import { Field, InputType } from "@nestjs/graphql";
import { GraphQLNonEmptyString } from "graphql-scalars";


@InputType()
export class CreateTicketInput {

    @Field(_ => GraphQLNonEmptyString)
    title: string;

    @Field(_ => GraphQLNonEmptyString)
    content: string;
}