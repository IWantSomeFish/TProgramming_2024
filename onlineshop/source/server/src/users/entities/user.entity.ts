import { IsString, Matches, MinLength } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @IsString()
  @MinLength(3, { message: 'Username must be at least 3 characters long' })
  login: string;

  @Column({ nullable: true })
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'Password too weak. Must include uppercase, lowercase, and numbers/symbols',
  })
  password: string;

  @Column({ unique: true })
  @IsString()
  email: string;

  @Column()
  @IsString()
  @MinLength(3, { message: 'Username must be at least 3 characters long' })
  nickname: string;
}
