import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("companytype")
export class CompanyType {
  @PrimaryGeneratedColumn({name: 'id'})
  Id: number;

  @Column({name: 'name', length: 256})
  Name: string;
}
