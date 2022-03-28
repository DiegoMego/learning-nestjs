import { Controller, Get, Post, Request, UseGuards, UseInterceptors } from '@nestjs/common';
import { Public } from 'src/common/decorators/public.decorator';
import { AuthInterceptor } from './auth.interceptor';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @UseInterceptors(AuthInterceptor)
  @Post('login')
  async login(@Request() req) {
    return await this.authService.login(req.user);
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
