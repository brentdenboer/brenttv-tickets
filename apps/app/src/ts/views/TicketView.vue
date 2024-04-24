<template>

  <div class="content pa-5 ma-auto w-100 h-100 d-flex justify-center align-center flex-column">
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
      <v-btn type="submit" class="mt-12" color="primary" :loading="creatingTicket" :disabled="shouldDisable">Verstuur</v-btn>
      <span class="text-subtitle-2 text-grey text-center mt-3">&copy; 2024 - Brent den Boer</span>
    </v-form>
    <v-overlay persistent location="center center" v-model="showSentEmoji">
      <div style="width: 100vw; height: 100vh" class="d-flex justify-center align-center flex-column">
        <v-scale-transition>
          <h2 class="text-h1">📨</h2>
        </v-scale-transition>
      </div>
    </v-overlay>
  </div>

</template>

<script lang="ts">
import { Component, Inject, Vue } from "vue-facing-decorator";

// Services
import type { TicketService } from "@/ts/services/ticket.service";


@Component({})
export default class TicketView extends Vue {

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

  @Inject()
  private readonly ticketService!: TicketService;

  reset(): void {
    this.input = {
      title: "",
      content: "",
      createdBy: ""
    };
  }

  showSent() {
    this.showSentEmoji = true;
    setTimeout(
      () => {
        this.showSentEmoji = false;
      },
      1000
    );
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
  }
}
</script>

<style scoped lang="scss">

</style>