// Types
import type { App } from "vue";
import type { ApolloClient } from "@apollo/client/core";

// Services
import { TicketService } from "@/ts/services/ticket.service";


export function servicesBootstrap(app: App, apolloClient: ApolloClient<any>) {

    app.provide("ticketService", new TicketService(apolloClient));
}