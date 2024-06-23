/* eslint-disable @typescript-eslint/no-unused-vars */
import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schemas/user.schema';
// import { Model } from 'mongoose';
import { UsersRepository } from 'src/repository/users.repository';

@Injectable()
export class UsersService {
  constructor(@Inject(UsersRepository) private userRepo: UsersRepository) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = this.userRepo.create(createUserDto);
    return createdUser;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
