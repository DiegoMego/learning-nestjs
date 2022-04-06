import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('companyindustry')
export class CompanyIndustry {
  @PrimaryGeneratedColumn({ name: 'id' })
  Id: number;

  @Column({ name: 'name', length: 256 })
  Name: string;
}
