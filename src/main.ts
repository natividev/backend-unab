import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { envs } from 'config/envs';

async function bootstrap() {
  const logger = new Logger('Backend de UNAB');
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  app.enableCors({
    origin: '*',
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
  });
  logger.log(`Server running on port ${envs.PORT}`);
  app.setGlobalPrefix('api');
  await app.listen(envs.PORT);
}
bootstrap();
