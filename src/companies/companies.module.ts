import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyProfile } from 'src/common/helper/Mapper';
import { CompaniesController } from './companies.controller';
import { CompaniesService } from './companies.service';
import { CompanyIndustry } from './entities/company-industry.entity';
import { CompanyType } from './entities/company-type.entity';
import { Company } from './entities/company.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Company, CompanyType, CompanyIndustry])],
  controllers: [CompaniesController],
  providers: [CompaniesService, CompanyProfile],
})
export class CompaniesModule {}
