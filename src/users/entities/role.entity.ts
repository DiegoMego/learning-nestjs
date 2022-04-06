import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { User } from './user.entity';

@Entity('aspnetroles')
export class Role {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  Id: string;

  @Column({ name: 'name', length: 256 })
  Name: string;

  @OneToMany((_) => User, (user) => user.Role)
  Users: User[];
}
