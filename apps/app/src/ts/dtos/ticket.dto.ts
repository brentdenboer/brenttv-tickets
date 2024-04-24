export class Ticket {

    id!: string;

    title!: string;
    content!: string;

    createdAt!: Date;
    updatedAt?: Date|null;
}