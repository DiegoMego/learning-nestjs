import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AutoMap } from '@automapper/classes';
import { Company } from './company.entity';

@Entity('companyindustry')
export class CompanyIndustry {
  @PrimaryGeneratedColumn({ name: 'id' })
  Id: number;

  @AutoMap()
  @Column({ name: 'name', length: 256 })
  Name: string;

  @OneToMany(() => Company, (company) => company.CompanyIndustry)
  Companies: Company[];
}
