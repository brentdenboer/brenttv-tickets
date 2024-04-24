import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@mikro-orm/nestjs";
import { EntityRepository } from "@mikro-orm/core";

// Entities
import { Ticket } from "@/tickets/entities/ticket.entity";

// DTOs
import { CreateTicketDto } from "@/tickets/dto/create-ticket.dto";


@Injectable()
export class TicketService {

    public constructor(
        @InjectRepository(Ticket)
        private readonly ticketRepository: EntityRepository<Ticket>
    ) {
    }

    async getAllTickets(): Promise<Ticket[]> {

        return await this.ticketRepository.findAll();
    }

    async createTicket({ title, content }: CreateTicketDto): Promise<Ticket> {

        // Create a new ticket.
        const ticket = new Ticket();
        ticket.title = title;
        ticket.content = content;

        // Save the created ticket to the database.
        await this.ticketRepository
            .getEntityManager()
            .persistAndFlush(ticket);

        // Return the ticket to the client.
        return ticket;
    }
}