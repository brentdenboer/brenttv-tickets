import { Query, Resolver } from "@nestjs/graphql";
import { IndexService } from "@/app/services/index.service";


@Resolver()
export class IndexResolver {

    public constructor(protected indexService: IndexService) {}

    @Query(_ => String)
    async _(): Promise<string> {

        return this.indexService.getIndex();
    }
}