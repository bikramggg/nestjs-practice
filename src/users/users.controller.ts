import {
  Controller,
  Get,
  Body,
  Param,
  Delete,
<<<<<<< Updated upstream
=======
  UseGuards,
  Put,
>>>>>>> Stashed changes
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import {
<<<<<<< Updated upstream
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('User')
=======
  ApiBearerAuth,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { FetchAllUserDto } from './dto/fetch-all-user.dto';
import { Public } from 'src/common/public.decorator';

@ApiTags('User')
@Public()
@ApiBearerAuth('access-token')
>>>>>>> Stashed changes
@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

<<<<<<< Updated upstream
  @ApiBody({ type: CreateUserDto })
  @ApiOperation({ summary: 'Create a new user' })
  @ApiCreatedResponse({
    status: 201,
    description: 'The user has been created.',
  })
  @Post('/signup')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
=======
  @Get("/all")
  findAll() : Promise<FetchAllUserDto[]>{
>>>>>>> Stashed changes
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Get('/whoami')
  findCurrentLoggedInUser(): {email: string, userId: string} | any{
    console.log('Current user');
    return {userId: '123', email: ''}
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<void> {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
