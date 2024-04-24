<template>
  <v-app>
    <v-main>
      <router-view v-slot="{ route, Component }">
        <v-fade-transition :duration="150" mode="out-in">
          <component :is="Component" :key="route.fullPath"></component>
        </v-fade-transition>
      </router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import {Component, Vue} from "vue-facing-decorator";


@Component({
  name: "btv-app"
})
export default class App extends Vue {}
</script>

<style lang="scss">

* {
  user-select: none;
}

.view {
  width: 100vvw;
  min-width: 100vw;
  max-width: 100vw;
  overflow-x: hidden;

  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
  overflow-y: hidden;
}

</style>