import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  login: string;

  @Column({ nullable: true })
  password: string;

  @Column()
  email: string;

  @Column()
  nickname: string;
}
