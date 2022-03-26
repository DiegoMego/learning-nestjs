import {
  Entity,
  Column,
  ManyToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { User } from "./user.entity";

@Entity("aspnetroles")
export class Role {
  @PrimaryGeneratedColumn('uuid', {name: 'id'})
  Id: string;

  @Column({name: "name", length: 256})
  Name: string

  @ManyToMany(_ => User, (user) => user.roles)
  users: User[]
}
