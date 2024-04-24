// Plugins
import { apolloBootstrap } from "./apollo";
import { vuetifyBootstrap } from "./vuetify";

// Types
import type { App } from "vue";

// Router
import router from "@/bootstraps/router";


export function bootstrap(app: App) {

    apolloBootstrap(app);
    vuetifyBootstrap(app);
    app.use(router);
}