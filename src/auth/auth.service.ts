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
    const access_token = await this.jwtService.signAsync({ username: user.Username, sub: user.Id });
    return {
      access_token
    }
  }
}
