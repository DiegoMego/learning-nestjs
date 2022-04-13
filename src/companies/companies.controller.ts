import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompanyDTO } from './dto/create-company.dto';
import { CompanyTableFiltersDTO } from './dto/company-table-filters.dto';
import { CompanyColumnNames } from 'src/common/helper/Mapper';

@Controller('api/companies')
export class CompaniesController {
  constructor(private readonly companyService: CompaniesService) {}

  @Post('create')
  create(@Body() createCompanyDto: CreateCompanyDTO) {
    return this.companyService.create(createCompanyDto);
  }

  @Get('types')
  getCompanyTypes() {
    return this.companyService.getCompanyTypes();
  }

  @Get('industries')
  getCompanyIndustries() {
    return this.companyService.getCompanyIndustries();
  }

  @Get('table')
  async getCompanies(@Query() companyFilters: CompanyTableFiltersDTO) {
    const filters = [];
    for (const key in companyFilters) {
      if (Object.prototype.hasOwnProperty.call(companyFilters, key)) {
        const value = companyFilters[key];
        const column = CompanyColumnNames[key];
        filters.push({ column, value });
      }
    }
    const data = await this.companyService.getCompanies(filters);
    return data;
  }
}
