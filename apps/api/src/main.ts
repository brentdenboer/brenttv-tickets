import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import { NestFactory } from "@nestjs/core";

// Extensions
import helmet from "@fastify/helmet";
import { ValidationPipe } from "@nestjs/common";

// Modules
import { AppModule } from "./app/app.module";


async function bootstrap() {

    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter()
    );

    app.enableCors();
    await app.register(helmet);

    app.useGlobalPipes(new ValidationPipe());

    await app.listen(3000, "0.0.0.0");
}

bootstrap();