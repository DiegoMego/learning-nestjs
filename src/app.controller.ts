import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { join } from 'path';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res : Response) {
    res.sendFile(join(__dirname, '..', 'client', 'public', 'index.html'))
    // return this.appService.getHello();
  }
}
