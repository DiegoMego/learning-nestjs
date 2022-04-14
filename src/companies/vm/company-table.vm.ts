import { AutoMap } from '@automapper/classes';

export class CompanyTableVM {
  @AutoMap()
  Name: string;

  @AutoMap()
  RUC: string;

  CompanyIndustry: string;
  CompanyType: string;
  Enabled: string;
}
