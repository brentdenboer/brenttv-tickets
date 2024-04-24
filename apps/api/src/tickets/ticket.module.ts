import { Module } from "@nestjs/common";

// Modules
import { MikroOrmModule } from "@mikro-orm/nestjs";

// Entities
import { Ticket } from "@/tickets/entities/ticket.entity";

// Services
import { TicketService } from "@/tickets/services/ticket.service";

// Objects
import { Ticket as TicketObject } from "@/tickets/graphql/objects/ticket.object";

// Resolvers
import { TicketResolver } from "@/tickets/graphql/resolvers/ticket.resolver";


@Module({
    imports: [MikroOrmModule.forFeature([Ticket])],
    providers: [TicketService, TicketObject, TicketResolver]
})
export class TicketModule {}