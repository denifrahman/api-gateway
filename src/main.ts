import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";


async function bootstrap() {
  //initialisasi gateway socket dan redis
  const app = await NestFactory.create(AppModule);

  // config swagger
  const config = new DocumentBuilder()
    .setBasePath("/api/v1")
    .addBearerAuth(
      { type: "http", scheme: "bearer", bearerFormat: "JWT" },
      "access-token"
    )
    .setTitle("Documentasion API GATEWAY e-Commerce")
    .setDescription("Create room and save converstation Service API")
    .setVersion("1.0")
    .addTag("Api Gateway")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api/v1/docs", app, document);

  app.enableCors({
    origin: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    credentials: true
  });


  await app.listen(3000);
}

bootstrap();
