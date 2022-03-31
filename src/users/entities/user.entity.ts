import { Company } from "src/companies/entities/company.entity";
import { 
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";

import { Role } from "./role.entity";

@Entity("aspnetusers")
export class User {
  @PrimaryGeneratedColumn('uuid', {name: 'id'})
  Id: string;

  @Column({name: 'email', length: 256, nullable: true})
  Email: string

  @Column({name: 'emailconfirmed'})
  EmailConfirmed: boolean

  @Column({name: 'passwordhash', length: 1000, nullable: true})
  PasswordHash: string

  @Column({name: 'phonenumber', length: 15, nullable: true})
  PhoneNumber: string

  @Column({name: 'phonenumberconfirmed'})
  PhoneNumberConfirmed: boolean

  @Column({name: 'twofactorenabled'})
  TwoFactorEnabled: boolean

  @Column({name: 'lockoutenddate', type: 'timestamp', nullable: true})
  LockoutEndDate: Date

  @Column({name: 'lockoutenabled'})
  LockoutEnabled: boolean

  @Column({name: 'accessfailedcount'})
  AccessFailedCount: number

  @Column({name: 'username', length: 256})
  Username: string

  @Column({name: 'companyid', type: 'uuid'})
  CompanyId: string

  @CreateDateColumn({name: 'createdon', type: 'timestamp'})
  CreatedOn: Date

  @Column({name: 'refreshtokenhash', length: 1000, nullable: true})
  RefreshTokenHash: string

  @ManyToOne(_ => Company, company => company.Users)
  @JoinColumn({name: 'companyid'})
  Company: Company

  @ManyToOne(_ => Role, role => role.Users)
  @JoinColumn({name: 'roleid'})
  Role: Role
}
