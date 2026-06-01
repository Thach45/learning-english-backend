import { HttpAdapterHost, NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { UnprocessableEntityException, ValidationPipe } from "@nestjs/common";
import { LoggingInterceptor } from "./shared/interceptor/logging.interceptor";
import { TransformInterceptor } from "./shared/interceptor/transform.interceptor";
import { PrismaClientExceptionFilter } from "./shared/filters/prisma-client-exception.filter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Khởi tạo Global Exception Filter cho Prisma
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove các field không được khai báo trong dto
      forbidNonWhitelisted: true, // throw error nếu có field không được khai báo trong dto
      transform: true, // Tự động ép kiểu theo DTO (@Type)
      exceptionFactory: (errors) => {
        const errorMessages = errors.map((error) => {
          return {
            property: error.property,
            constraints: error.constraints,
            value: error.value,
          };
        });
        return new UnprocessableEntityException(errorMessages);
      },
    }),
  );
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.useGlobalInterceptors(new TransformInterceptor());
  app.enableCors({});
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
