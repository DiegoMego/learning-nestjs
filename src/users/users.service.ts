import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { UserProfile } from './entities/user-profile.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserProfile)
    private UserProfileRepository: Repository<UserProfile>,
  ){}

  create(createUserDto: CreateUserDTO) {
    const user = new UserProfile();
    user.FirstName = "Diego";
    user.LastName = "Mego";
    user.AllowEmailNotification = true;
    user.AllowPriorityAEmailNotification = false;
    user.IsSubscribedToNotifications = true;
    user.UpdatedBy = "8489f3a0-5b60-471c-af72-b75820ce8f86";
    user.UpdatedOn = new Date("2022-03-21 00:55:22.055");
    user.Email = "dmego@chasquitechnologies.com";

    console.log(user);

    return this.UserProfileRepository.save(user);
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
