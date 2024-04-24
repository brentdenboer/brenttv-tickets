import { IsNotEmpty, IsOptional, MaxLength, MinLength } from "class-validator";


export class CreateTicketDto {

    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(255)
    title: string;

    @IsOptional()
    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(2048)
    content?: string;

    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(255)
    createdBy: string;
}