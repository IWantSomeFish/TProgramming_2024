import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly login: string;
  @IsString()
  @MinLength(8)
  readonly password: string;
  @IsEmail()
  readonly email: string;
  @IsString()
  @MinLength(6)
  readonly nickname: string;
}
