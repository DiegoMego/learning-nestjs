import { Controller, Get, Res } from '@nestjs/common';
import { join } from 'path';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res) {
    res.sendFile(join(__dirname, '..', 'client', 'public', 'index.html'))
    // return this.appService.getHello();
  }
}
