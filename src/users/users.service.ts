import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ){}

  create(createUserDto: CreateUserDto) {
    const user = new User();
    user.FirstName = "Diego";
    user.LastName = "Mego";
    user.AllowEmailNotification = true;
    user.AllowPriorityAEmailNotification = false;
    user.IsSubscribedToNotifications = true;
    user.UpdatedBy = "8489f3a0-5b60-471c-af72-b75820ce8f86";
    user.UpdatedOn = new Date("2022-03-21 00:55:22.055");
    user.Email = "dmego@chasquitechnologies.com";

    return this.usersRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
