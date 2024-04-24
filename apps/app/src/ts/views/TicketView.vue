<template>

  <div class="content pa-5 ma-auto w-100 h-100 d-flex justify-center align-center flex-column">
    <h1 class="text-md-h2 mb-12 text-sm-h3">BrentTV ticket</h1>
    <v-form class="w-100 d-flex flex-column" @submit.prevent="createTicket">
      <v-text-field label="Naam" class="mb-2"/>
      <v-text-field label="Titel probleem" v-model="input.title"/>
      <v-textarea auto-grow label="Omschrijving probleem" v-model="input.content"/>
      <p class="text-subtitle-1 text-center align-self-center mb-2">Hoe hard ga je huilen als ik het niet op
        los?</p>
      <v-btn-toggle class="justify-center">
        <v-btn>Heel hard</v-btn>
        <v-btn>Een beetje</v-btn>
        <v-btn>Niet</v-btn>
      </v-btn-toggle>
      <v-btn type="submit" class="mt-12">Verstuur</v-btn>
    </v-form>
  </div>

</template>

<script lang="ts">
import { Component, Inject, Vue } from "vue-facing-decorator";

// Services
import type { TicketService } from "@/ts/services/ticket.service";


@Component({})
export default class TicketView extends Vue {

  input: { title: string, content: string } = {
    title: "",
    content: ""
  }

  @Inject()
  private readonly ticketService!: TicketService;

  async createTicket(): Promise<void> {
    await this.ticketService.create(this.input);
  }
}
</script>

<style scoped lang="scss">

</style>