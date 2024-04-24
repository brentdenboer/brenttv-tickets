import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

// GraphQL Objects
import { Ticket } from "@/tickets/graphql/objects/ticket.object";

// GraphQL Inputs
import { CreateTicketInput } from "@/tickets/graphql/input/create-ticket.input";

// Services
import { TicketService } from "@/tickets/services/ticket.service";


@Resolver(_ => Ticket)
export class TicketResolver {

    public constructor(protected readonly ticketService: TicketService) {}

    @Query(_ => [Ticket])
    async allTickets(): Promise<Ticket[]> {

        return await this.ticketService.getAllTickets();
    }

    @Mutation(_ => Ticket)
    async createTicket(@Args('input', { type: () => CreateTicketInput }) input: CreateTicketInput): Promise<Ticket> {

        return await this.ticketService.createTicket(input);
    }
}