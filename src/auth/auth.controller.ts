import { Controller, Get, Post, Req, UnauthorizedException, UseGuards, UseInterceptors } from '@nestjs/common';
import { Request } from 'express';
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
  async login(@Req() req : any) {
    const access_token = await this.authService.login(req.user);
    const refresh_token = await this.authService.getRefreshToken(req.user)
    const rolename = req.user.Role.Name;
    return {
      access_token,
      refresh_token,
      rolename,
    }
  }

  @Public()
  @UseInterceptors(AuthInterceptor)
  @Get('refresh_token')
  async refresh_token(@Req() request: Request) {
    if (request.cookies) {
      const refresh_token = request.cookies['refresh_token'];
      const user = await this.authService.validateRefreshToken(refresh_token);
      if (!user) {
        throw new UnauthorizedException();
      }
      const access_token = await this.authService.login(user);
      const new_refresh_token = await this.authService.getRefreshToken(user)
      const rolename = user.Role.Name;
      return {
        refresh_token: new_refresh_token,
        access_token,
        rolename,
      }
    }
    throw new UnauthorizedException();
  }
}
