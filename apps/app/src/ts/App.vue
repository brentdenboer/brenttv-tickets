<template>
  <v-app>
    <v-main>
      <router-view v-slot="{ route, Component }">
        <v-fade-transition :key="route.fullPath">
          <component :is="Component"></component>
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

<style lang="scss" scoped>

.content {
  max-width: 900px;
}

</style>