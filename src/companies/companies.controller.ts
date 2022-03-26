import { Body, Controller, Get, Post } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompanyDTO } from './dto/create-company.dto';

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
}
