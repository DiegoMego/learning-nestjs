import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Hash } from 'src/common/helper/Hash';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, password: string) : Promise<any> {
    const user = await this.usersService.findUser(username);
    if (user && Hash.compare(password, user.PasswordHash)) {
      const { PasswordHash, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    return await this.jwtService.signAsync({ username: user.Username, sub: user.Id });
  }

  async getRefreshToken(user: any) {
    const refresh_token = await this.jwtService.signAsync({username: user.Username}, { expiresIn: '1h'});
    await this.usersService.updateRefreshToken(user.Username, refresh_token);
    return refresh_token;
  }

  async validateRefreshToken(token: string) {
    try {
      const payload = await this.jwtService.verifyAsync(token);
      const user = await this.usersService.findUser(payload.username);
      if (user && Hash.compare(token, user.RefreshTokenHash)) {
        const { PasswordHash, ...result } = user;
        return result;
      }
    } catch (error) {
      return null;
    }
    return null;
  }
}
