// Types
import type { App } from "vue";
import type { ApolloClient } from "@apollo/client/core";

// Bootstraps
import { apolloBootstrap } from "./apollo";
import { vuetifyBootstrap } from "./vuetify";
import { routerBootstrap } from "./router";
import { servicesBootstrap } from "./services";


export function bootstrap(app: App) {

    const apolloClient: ApolloClient<any> = apolloBootstrap(app);
    vuetifyBootstrap(app);
    routerBootstrap(app);
    servicesBootstrap(app, apolloClient);
}