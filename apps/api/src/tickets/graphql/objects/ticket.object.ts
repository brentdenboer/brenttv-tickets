import { Field, ObjectType } from "@nestjs/graphql";
import { GraphQLDateTime, GraphQLNonEmptyString, GraphQLUUID } from "graphql-scalars";


@ObjectType()
export class Ticket {

    @Field(_ => GraphQLUUID)
    id: string;

    @Field(_ => GraphQLNonEmptyString)
    title: string;

    @Field(_ => GraphQLNonEmptyString, { nullable: true })
    content?: string;

    @Field(_ => GraphQLNonEmptyString)
    createdBy: string;

    @Field(_ => GraphQLDateTime)
    createdAt: Date;

    @Field(_ => GraphQLDateTime, { nullable: true })
    updatedAt?: Date;
}