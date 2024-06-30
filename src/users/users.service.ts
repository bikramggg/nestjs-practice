/* eslint-disable @typescript-eslint/no-unused-vars */
import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
<<<<<<< Updated upstream
// import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schemas/user.schema';
// import { Model } from 'mongoose';
=======
import { User, UserDocument } from '../schemas/user.schema';
>>>>>>> Stashed changes
import { UsersRepository } from 'src/repository/users.repository';

@Injectable()
export class UsersService {
  constructor(@Inject(UsersRepository) private userRepo: UsersRepository) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = this.userRepo.create(createUserDto);
    return createdUser;
  }

  findAll() {
    return this.userRepo.findAll();
  }

<<<<<<< Updated upstream
  findOne(id: number) {
    return `This action returns a #${id} user`;
=======
  findOne(id: string): Promise<User> {
    return this.userRepo.findOne(id);
  }

  findOneByEmail(email: string): Promise<UserDocument & User> {
    return this.userModel.findOne({email: email});
>>>>>>> Stashed changes
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.userModel.updateOne({_id: id}, {
        ...updateUserDto
    })
  }

  async remove(id: string) {
    return await this.userModel.deleteOne({_id: id});
  }
}
