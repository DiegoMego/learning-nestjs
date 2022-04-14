import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { join } from 'path';
// import { ValidationPipe } from './common/pipe/validation.pipe';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(express.static(join(__dirname, '..', 'client')));
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  app.use(cookieParser());
  app.enableCors({
    allowedHeaders: ['Authorization'],
  });
  await app.listen(3000);
}
bootstrap();
