import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { InjectMapper } from '@automapper/nestjs';
import { createMap, forMember, mapFrom, Mapper } from '@automapper/core';
import { CompaniesService } from './companies.service';
import { CreateCompanyDTO } from './dto/create-company.dto';
import { CompanyTableFiltersDTO } from './dto/company-table-filters.dto';
import { CompanyColumnNames } from '../common/helper/Columns';
import { Company } from './entities/company.entity';
import { CompanyTableVM } from './vm/company-table.vm';

@Controller('api/companies')
export class CompaniesController {
  constructor(
    @InjectMapper() private readonly mapper: Mapper,
    private readonly companyService: CompaniesService,
  ) {}

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
    createMap(
      this.mapper,
      Company,
      CompanyTableVM,
      forMember(
        (destination) => destination.CompanyIndustry,
        mapFrom((source) => source.CompanyIndustry.Name),
      ),
      forMember(
        (destination) => destination.CompanyType,
        mapFrom((source) => source.CompanyType.Name),
      ),
      forMember(
        (destination) => destination.Enabled,
        mapFrom((source) => (source.Enabled ? 'Habilitado' : 'Deshabilitado')),
      ),
    );
    const data = await this.companyService.getCompanies(filters);
    const companies = this.mapper.mapArray(data, Company, CompanyTableVM);
    return companies;
  }
}
