import { Module } from "@nestjs/common";

// Config
import { ConfigModule } from "@nestjs/config";

// GraphQL Core
import { MercuriusDriver, MercuriusDriverConfig } from "@nestjs/mercurius";

// MikroORM Core
import { MikroOrmModule } from "@mikro-orm/nestjs";
import { MariaDbDriver } from "@mikro-orm/mariadb";

// Controllers
import { IndexController } from "./controllers/index.controller";

// Services
import { IndexService } from "@/app/services/index.service";

// Resolvers
import { IndexResolver } from "@/app/graphql/resolvers/index.resolver";

// Modules
import { GraphQLModule } from "@nestjs/graphql";
import { ThrottlerModule } from "@nestjs/throttler";
import { TicketModule } from "@/tickets/ticket.module";


@Module({

    imports: [

        TicketModule,

        ConfigModule.forRoot({ isGlobal: true }),

        MikroOrmModule.forRoot({

            autoLoadEntities: true,
            driver: MariaDbDriver,

            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT || "3306"),
            dbName: process.env.DB_NAME,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD
        }),

        ThrottlerModule.forRoot([
            {
                ttl: 10000,
                limit: 20
            }
        ]),

        GraphQLModule.forRoot<MercuriusDriverConfig>({

            driver: MercuriusDriver,
            autoSchemaFile: true,
            graphiql: false
        })
    ],
    controllers: [IndexController],
    providers: [
        IndexService,
        IndexResolver,
        // {
        //     provide: APP_GUARD,
        //     useClass: ThrottlerGuard
        // }
    ]
})
export class AppModule {}