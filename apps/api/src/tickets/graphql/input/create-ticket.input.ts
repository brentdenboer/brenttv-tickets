import { Field, InputType } from "@nestjs/graphql";
import { GraphQLNonEmptyString } from "graphql-scalars";
import { IsOptional, MaxLength, MinLength } from "class-validator";


@InputType()
export class CreateTicketInput {

    @Field(_ => GraphQLNonEmptyString)
    @MinLength(1)
    @MaxLength(255)
    title: string;

    @Field(_ => GraphQLNonEmptyString, { nullable: true, defaultValue: null })
    @IsOptional()
    @MinLength(1)
    @MaxLength(2048)
    content?: string;

    @Field(_ => GraphQLNonEmptyString)
    @MinLength(1)
    @MaxLength(255)
    createdBy: string;
}