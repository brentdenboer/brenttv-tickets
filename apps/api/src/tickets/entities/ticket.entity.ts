import { Entity, Property } from "@mikro-orm/core";
import { BaseEntity } from "@/app/entities/base.entity";


@Entity({ tableName: "tickets" })
export class Ticket extends BaseEntity {

    @Property({ length: 255 })
    title: string;

    @Property({ length: 2048 })
    content: string;

    // @Property({ type: "enum" })
    // priority: string;
}