import { IsString, IsDate, IsInt, IsPositive } from 'class-validator';
import { Column } from 'typeorm';

import { User } from 'src/users/entities/user.entity';

export class CreateProjectDto {
  @Column({ unique: true })
  @IsString()
  readonly projectName: string;

  @Column()
  @IsString()
  readonly desription: string;

  @Column()
  readonly feeAmount: number;

  @Column()
  readonly alreadyCollected: number;

  @IsInt()
  @IsPositive()
  @Column(() => User)
  readonly user: User;

  @Column()
  readonly likesCount: number;

  @Column()
  readonly dislikesCount: number;

  @Column()
  @IsDate()
  readonly endTime;
}
