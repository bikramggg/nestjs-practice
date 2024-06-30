import {
    IsEmail,
    IsNumber,
    IsOptional,
} from 'class-validator';
  
export class FetchAllUserDto {
    name: string;
  
    @IsEmail()
    email: string;
  
    @IsNumber()
    @IsOptional()
    phone?: number;
}
  