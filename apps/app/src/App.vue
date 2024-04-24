<template>
  <v-app>
    <v-main>
      <div class="content pa-5 ma-auto w-100 h-100 d-flex justify-center align-center flex-column">
        <h1 class="text-md-h2 mb-12 text-sm-h3">BrentTV ticket</h1>
        <v-form class="w-100 d-flex flex-column">
          <v-text-field label="Naam" class="mb-2"/>
          <v-text-field label="Titel probleem"/>
          <v-textarea auto-grow label="Omschrijving probleem"/>
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
    </v-main>
  </v-app>
</template>

<script lang="ts">
import {Component, Vue} from "vue-facing-decorator";


@Component({
  name: "btv-app"
})
export default class App extends Vue {


}
</script>

<style lang="scss" scoped>

.content {
  max-width: 900px;
}

</style>