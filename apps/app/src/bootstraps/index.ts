// Plugins
import { apolloBootstrap } from "./apollo";
import { vuetifyBootstrap } from "./vuetify";

// Types
import type { App } from "vue";


export function bootstrap(app: App) {

    apolloBootstrap(app);
    vuetifyBootstrap(app);
}