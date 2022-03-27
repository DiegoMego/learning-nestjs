import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { join } from 'path';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get()
  getHello() {
    return this.appService.getHello();
    // req.sendFile(join(__dirname, '..', 'client', 'public', 'index.html'))
  }
}
