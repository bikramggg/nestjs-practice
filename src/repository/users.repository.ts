import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User, UserDocument } from 'src/schemas/user.schema';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find({}).exec();
  }

<<<<<<< Updated upstream
  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
=======
  async findOne(_id: string): Promise<User> {
    return this.userModel.findOne({ _id }).exec();
  }

  async findOneByEmail(email: string): Promise<User> {
    return this.userModel.findOne({
      email,
    }).exec();
>>>>>>> Stashed changes
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<User> {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}
