import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { CreateCompanyDTO } from './dto/create-company.dto';
import { CompanyIndustry } from './entities/company-industry.entity';
import { CompanyType } from './entities/company-type.entity';
import { Company } from './entities/company.entity';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Company)
    private CompanyRepository: Repository<Company>,

    @InjectRepository(CompanyType)
    private CompanyTypeRepository: Repository<CompanyType>,

    @InjectRepository(CompanyIndustry)
    private CompanyIndustryRepository: Repository<CompanyIndustry>,

    private connection: Connection,
  ) {}

  create(createCompanyDTO: CreateCompanyDTO) {
    const company = this.CompanyRepository.create({ ...createCompanyDTO });

    return this.CompanyRepository.save(company);
  }

  getCompanyTypes(): Promise<CompanyType[]> {
    return this.CompanyTypeRepository.find();
  }

  getCompanyIndustries(): Promise<CompanyIndustry[]> {
    return this.CompanyIndustryRepository.find();
  }

  async getCompaniesTable(): Promise<Company[]> {
    const companies = await this.connection.query('');
    return companies;
  }
}
