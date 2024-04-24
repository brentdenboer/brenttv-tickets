import { Controller, Get } from "@nestjs/common";
import { IndexService } from "@/app/services/index.service";


@Controller()
export class IndexController {

    public constructor(protected indexService: IndexService) {}

    @Get("/")
    getIndex(): string {

        return this.indexService.getIndex();
    }
}