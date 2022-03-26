import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { UserProfile } from './entities/user-profile.entity';
import { User } from './entities/user.entity';
import { Hash } from 'src/common/helper/Hash';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private UserRepository: Repository<User>,

    @InjectRepository(UserProfile)
    private UserProfileRepository: Repository<UserProfile>,
  ){}

  async create(createUserDto: CreateUserDTO) {
    const user = new User();
    user.UserName = createUserDto.Username;
    user.Email = createUserDto.Email;
    user.EmailConfirmed = true;
    user.PasswordHash = await Hash.create(createUserDto.Password);
    user.CompanyId = '937d9038-48c8-4747-b95b-9d7749a58ec8';
    user.PhoneNumberConfirmed = false;
    user.TwoFactorEnabled = false;
    user.AccessFailedCount = 0;
    user.LockoutEnabled = false;
    return await this.UserRepository.save(user);
  }

  findAll(): Promise<UserProfile[]> {
    return this.UserProfileRepository.find();
  }

  findOne(id: string): Promise<UserProfile> {
    return this.UserProfileRepository.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDTO) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
