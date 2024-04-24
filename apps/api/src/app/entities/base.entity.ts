import { randomUUID } from "node:crypto";
import { BaseEntity as MikroORMBaseEntity, PrimaryKey, Property } from "@mikro-orm/core";


export class BaseEntity extends MikroORMBaseEntity {

    @PrimaryKey({ type: "uuid", onCreate: () => randomUUID() })
    id: string;

    @Property({ onCreate: () => new Date() })
    createdAt: Date;

    @Property({ nullable: true, onUpdate: () => new Date() })
    updatedAt?: Date|null;
}