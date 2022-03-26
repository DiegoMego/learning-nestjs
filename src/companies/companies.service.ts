import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
    private CompanyIndustryRepository: Repository<CompanyIndustry>
  ) {}

  create(createCompanyDTO: CreateCompanyDTO) {
    const company = this.CompanyRepository.create({...createCompanyDTO})
    // const company = new Company();
    // company.Name = createCompanyDTO.Name;
    // company.CompanyTypeId = createCompanyDTO.CompanyTypeId;
    // company.Enabled = createCompanyDTO.Enabled;
    // company.Position = createCompanyDTO.Position;
    // company.CompanyIndustryId = createCompanyDTO.CompanyIndustryId;
    // company.Address = createCompanyDTO.Address;
    // company.District = createCompanyDTO.District;
    // company.City = createCompanyDTO.City;
    // company.State = createCompanyDTO.State;
    // company.Zip = createCompanyDTO.Zip;
    // company.Country = createCompanyDTO.Country;
    // company.Phone = createCompanyDTO.Phone;
    // company.LinkToMainLogo = createCompanyDTO.LinkToMainLogo;
    // company.LinkToSmallLogo = createCompanyDTO.LinkToSmallLogo;
    // company.RUC = createCompanyDTO.RUC;
    // company.MasterAdminUserId = createCompanyDTO.MasterAdminUserId;
    // company.StatusIdAvailabilityBasedOn = createCompanyDTO.StatusIdAvailabilityBasedOn;
    // company.SAPPOIntegration = createCompanyDTO.SAPPOIntegration;
    // company.CurrentPlanId = createCompanyDTO.CurrentPlanId;
    // company.MaxPremiumUsers = createCompanyDTO.MaxPremiumUsers;
    // company.MultiCompanyEnabled = createCompanyDTO.MultiCompanyEnabled;

    return this.CompanyRepository.save(company);
  }

  getCompanyTypes() : Promise<CompanyType[]> {
    return this.CompanyTypeRepository.find();
  }

  getCompanyIndustries() : Promise<CompanyIndustry[]> {
    return this.CompanyIndustryRepository.find();
  }
}
