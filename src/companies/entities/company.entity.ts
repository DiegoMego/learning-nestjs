import { User } from "src/users/entities/user.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

@Entity("company")
export class Company {
  @PrimaryGeneratedColumn('uuid', {name: 'id'})
  Id: string;

  @Column({name: 'name', length: 512})
  Name: string;

  @Column({name: 'companytypeid', nullable: true})
  CompanyTypeId: number;

  @Column({name: 'enabled', nullable: true})
  Enabled: boolean;

  @Column({name: 'position', nullable: true})
  Position: number;

  @Column({name: 'companyindustryid', nullable: true})
  CompanyIndustryId: number;

  @Column({name: 'address', length: 256, nullable: true})
  Address: string;

  @Column({name: 'district', length: 256, nullable: true})
  District: string;

  @Column({name: 'city', length: 256, nullable: true})
  City: string;

  @Column({name: 'state', length: 256, nullable: true})
  State: string;

  @Column({name: 'zip', length: 256, nullable: true})
  Zip: string;

  @Column({name: 'country', length: 256, nullable: true})
  Country: string;

  @Column({name: 'phone', length: 15, nullable: true})
  Phone: string;

  @Column({name: 'linktomainlogo', length: 256, nullable: true})
  LinkToMainLogo: string;

  @Column({name: 'linktosmalllogo', length: 256, nullable: true})
  LinkToSmallLogo: string;

  @Column({name: 'ruc', length: 256, nullable: true})
  RUC: string;

  @Column({name: 'masteradminuserid', type: 'uuid', nullable: true})
  MasterAdminUserId: string;

  @CreateDateColumn({name: 'createdon', type: 'timestamp'})
  CreatedOn: Date;

  @Column({name: 'createdby', type: 'uuid'})
  CreatedBy: string;

  @UpdateDateColumn({name: 'updatedon', type: 'timestamp', nullable: true})
  UpdatedOn: Date;

  @Column({name: 'updatedby', type: 'uuid', nullable: true})
  UpdatedBy: string;

  @Column({name: 'statusidavailabilitybasedon', nullable: true})
  StatusIdAvailabilityBasedOn: number;

  @Column({name: 'sap_po_integration', nullable: true})
  SAPPOIntegration: boolean;

  @Column({name: 'currentplanid', nullable: true})
  CurrentPlanId: number;

  @Column({name: 'maxpremiumusers', nullable: true})
  MaxPremiumUsers: number;

  @Column({name: 'multicompanyenabled', nullable: true})
  MultiCompanyEnabled: boolean;

  @OneToMany(_ => User, user => user.Company)
  Users: User[]
}
