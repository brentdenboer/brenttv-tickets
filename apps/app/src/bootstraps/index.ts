// Types
import type { App } from "vue";

// Bootstraps
import { apolloBootstrap } from "./apollo";
import { vuetifyBootstrap } from "./vuetify";
import { routerBootstrap } from "@/bootstraps/router";


export function bootstrap(app: App) {

    apolloBootstrap(app);
    vuetifyBootstrap(app);
    routerBootstrap(app);
}