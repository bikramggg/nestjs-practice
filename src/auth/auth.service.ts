/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { UsersRepository } from 'src/repository/users.repository';
import * as bcrypt from 'bcryptjs';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from 'src/users/dto/login.dto';
import { UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    @Inject(UsersRepository) private userRepo: UsersRepository,
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    if (user && bcrypt.compareSync(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async signUp(signUpDto: CreateUserDto): Promise<any> {
    const userExists = await this.userRepo.findOne(signUpDto.email);
    if (userExists) {
      throw new HttpException('User already exists', 400);
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(signUpDto.password, salt);
    signUpDto.password = hashedPassword;
    const user = await this.usersService.create(signUpDto);
    return user;
  }

  async login(loginDto: LoginDto) {
    const user: UserDocument = await this.validateUser(loginDto.email, loginDto.password);
    if (!user) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
    const payload = { email: user.email, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
