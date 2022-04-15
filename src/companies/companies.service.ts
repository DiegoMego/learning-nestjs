import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyColumns } from 'src/common/helper/Columns';
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

  async getCompanies(filters: Filter[]): Promise<Company[]> {
    const query = this.CompanyRepository.createQueryBuilder('company');
    query.leftJoinAndSelect('company.CompanyType', 'type');
    query.leftJoinAndSelect('company.CompanyIndustry', 'industry');
    query.select(CompanyColumns);
    if (!!filters.length) {
      query.where('true is true');
      filters.forEach((filter) => {
        switch (typeof filter.value) {
          case 'string':
            query.andWhere(
              `${filter.column.table}.${filter.column.name} ilike :${filter.column.name}`,
              {
                [filter.column.name]: `%${filter.value}%`,
              },
            );
            break;
          case 'number':
          case 'boolean':
            query.andWhere(
              `${filter.column.table}.${filter.column.name} = :${filter.column.name}`,
              {
                [filter.column.name]: filter.value,
              },
            );
            break;
          default:
            break;
        }
      });
    }
    const companies = await query.getMany();
    return companies;
  }
}
