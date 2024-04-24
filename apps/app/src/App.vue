<template>
  <v-app>
    <v-main>
      <div class="w-100 h-100 d-flex justify-center flex-column align-center">
        <h1 class="text-h1">BrentTV</h1>
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-facing-decorator";


@Component({
  name: "btv-app"
})
export default class App extends Vue {

}
</script>

<style lang="scss" scoped>
</style>