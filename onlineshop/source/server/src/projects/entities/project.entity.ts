import { IsString } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { User } from '../../users/entities/user.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @IsString()
  projectName: string;

  @Column()
  @IsString()
  desription: string;

  @Column()
  feeAmount: number;

  @Column()
  alreadyCollected: number;

  @ManyToOne(() => User, (user) => user.id, { onDelete: 'SET NULL' })
  user: User;

  @Column()
  likesCount: number;

  @Column()
  dislikesCount: number;

  @Column({ type: 'timestamp' })
  endTime: Date;
}
