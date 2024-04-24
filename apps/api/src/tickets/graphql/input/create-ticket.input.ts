import { Field, InputType } from "@nestjs/graphql";
import { GraphQLNonEmptyString } from "graphql-scalars";
import { MaxLength, MinLength } from "class-validator";
import { GraphQLString } from "graphql/type";


@InputType()
export class CreateTicketInput {

    @Field(_ => GraphQLNonEmptyString)
    @MinLength(1)
    @MaxLength(255)
    title: string;

    @Field(_ => GraphQLString, { nullable: true, defaultValue: null })
    @MaxLength(2048)
    content?: string;

    @Field(_ => GraphQLNonEmptyString)
    @MinLength(1)
    @MaxLength(255)
    createdBy: string;
}