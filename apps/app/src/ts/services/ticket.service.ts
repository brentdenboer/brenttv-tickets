import { ApolloClient } from "@apollo/client/core";

// DTOs
import { Ticket } from "@/ts/dtos/ticket.dto";

// Mutations
import CreateTicketMutation from "@/gql/mutations/ticket/CreateTicketMutation.gql";


export class TicketService {

    constructor(protected apolloClient: ApolloClient<any>) {}

    async create(input: { title: string, content: string }): Promise<Ticket> {

        const { data } = await this.apolloClient.mutate({

            mutation: CreateTicketMutation,
            variables: { input }
        });

        return data.createTicket as Ticket;
    }
}