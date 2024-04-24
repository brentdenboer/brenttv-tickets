<template>
  <v-row class="ticket view w-100 h-100" no-gutters align="center" align-content="center">
    <v-col cols="12" md="8" class="h-100 pa-15">
      <h1 class="text-md-h2 mb-12 text-sm-h3">Heb je weer wat te klagen? 😠</h1>
      <v-form class="w-100 d-flex flex-column" @submit.prevent="createTicket">
        <v-text-field label="Hoe heet je?" class="mb-2" v-model="input.createdBy"/>
        <v-text-field label="Wat is er?" v-model="input.title"/>
        <v-textarea auto-grow label="En wat bedoel je daar precies mee?" v-model="input.content"/>
        <p class="text-subtitle-1 text-center align-self-center mb-2">Hoe hard ga je huilen als ik het niet op
          los?</p>
        <v-btn-toggle class="justify-center">
          <v-btn>Heel hard</v-btn>
          <v-btn>Een beetje</v-btn>
          <v-btn>Niet</v-btn>
        </v-btn-toggle>
        <v-btn
          type="submit" class="mt-12" color="primary" :loading="creatingTicket" :disabled="shouldDisable"
        >Verstuur
        </v-btn>
        <span class="text-subtitle-2 text-grey text-center mt-3" @click="showAdmin">&copy; 2024 - Brent den Boer</span>
      </v-form>
    </v-col>
    <v-col cols="12" md="4" class="h-100 pa-15 complaints-section">
      <h2 class="text-md-h4 mb-12 text-sm-h5 font-weight-light">Live geklaag</h2>
      <div class="complaint-container" ref="complaintContainer">
        <v-slide-y-transition group>
          <v-card
            v-for="ticket of displayTickets" :key="`complaint-${ticket.id}`" class="mb-5" :title="ticket.title"
            :subtitle="`${ ticket.createdBy } - ${ ticket.createdAt }`"
            :text="ticket.content"
          ></v-card>
        </v-slide-y-transition>
      </div>
    </v-col>
  </v-row>
  <!--  <div class="content pa-5 ma-auto w-100 h-100 d-flex justify-center align-center flex-column">-->

  <!--    <v-overlay persistent location="center center" v-model="showSentEmoji">-->
  <!--      <div style="width: 100vw; height: 100vh" class="d-flex justify-center align-center flex-column">-->
  <!--        <v-scale-transition>-->
  <!--          <h2 class="text-h1">📨</h2>-->
  <!--        </v-scale-transition>-->
  <!--      </div>-->
  <!--    </v-overlay>-->
  <!--  </div>-->

</template>

<script lang="ts">
import { Component, Inject, Ref, Vue } from "vue-facing-decorator";

// Queries
import AllTicketsQuery from "@/gql/queries/ticket/AllTicketsQuery.gql";

// Services
import type { TicketService } from "@/ts/services/ticket.service";

// DTOs
import { Ticket } from "@/ts/dtos/ticket.dto";


@Component({
  options: {
    apollo: {
      allTickets: {
        query: AllTicketsQuery
      }
    }
  }
})
export default class TicketView extends Vue {

  allTickets: Ticket[] = [];
  adminCounter: number = 0;

  creatingTicket: boolean = false;
  showSentEmoji: boolean = false;

  input: { title: string, content: string, createdBy: string } = {
    title: "",
    content: "",
    createdBy: ""
  };

  get shouldDisable(): boolean {
    return this.creatingTicket;
  }

  get displayTickets(): Ticket[] {

    const tickets: Ticket[] = [...this.allTickets];

    tickets.sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

    return tickets;
  }

  @Inject()
  private readonly ticketService!: TicketService;

  @Ref()
  private readonly complaintContainer!: HTMLDivElement;

  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (
      max - min + 1
    )) + min;
  }

  reset(): void {
    this.input = {
      title: "",
      content: "",
      createdBy: ""
    };
  }

  showSent(): void {
    this.showSentEmoji = true;
    setTimeout(
      () => {
        this.showSentEmoji = false;
      },
      1000
    );
  }

  async showAdmin(): Promise<void> {
    if (this.adminCounter < 15) {
      this.adminCounter++;
      return;
    }

    this.adminCounter = 0;
    await this.$router.push({ name: "admin" });
  }

  async createTicket(): Promise<void> {
    this.creatingTicket = true;
    const ticket = await this.ticketService.create(this.input);
    this.creatingTicket = false;

    if (!ticket?.id) {
      //@TODO: Error toast
      return;
    }

    //@TODO: Success toast
    this.reset();
    this.showSent();

    this.complaintContainer.scrollTop = 0;

    await this.$nextTick(() => {
      this.$apollo.queries.allTickets.refetch();
    })
  }
}
</script>

<style scoped lang="scss">

.obnoxious {
  animation: obnoxious 0.5s infinite;
}

@keyframes obnoxious {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.025);
  }
  100% {
    transform: scale(1);
  }
}

.complaints-section {
  display: flex;
  flex-direction: column;
}

.complaint-container {
  flex-grow: 1;
  overflow-y: auto;
}

</style>