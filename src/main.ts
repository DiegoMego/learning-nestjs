import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { join } from 'path';
import { ValidationPipe } from './common/pipe/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(express.static(join(__dirname, '..', 'client')))
  app.useGlobalPipes(new ValidationPipe())
  // app.setGlobalPrefix('api', {
  //   exclude: [
  //     {
  //       path: '/',
  //       method: RequestMethod.GET
  //     },
  //     {
  //       path: '/ticket/create',
  //       method: RequestMethod.GET
  //     }
  //   ]
  // });
  await app.listen(3000);
}
bootstrap();