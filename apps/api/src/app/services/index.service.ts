import { Injectable } from "@nestjs/common";


@Injectable()
export class IndexService {

    getIndex(): string {

        return `BrentTV Tickets - API v1.0.0`;
    }
}