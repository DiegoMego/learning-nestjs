import { IsBoolean, IsInt, IsOptional, IsUUID, Length } from 'class-validator';

export class CreateCompanyDTO {
  @Length(1, 512)
  Name: string;

  @IsOptional()
  @IsInt()
  CompanyTypeId: number;

  @IsOptional()
  @IsBoolean()
  Enabled: boolean;

  @IsOptional()
  @IsInt()
  Position: number;

  @IsOptional()
  @IsInt()
  CompanyIndustryId: number;

  @IsOptional()
  @Length(1, 256)
  Address: string;

  @IsOptional()
  @Length(1, 256)
  District: string;

  @IsOptional()
  @Length(1, 256)
  City: string;

  @IsOptional()
  @Length(1, 256)
  State: string;

  @IsOptional()
  @Length(1, 256)
  Zip: string;

  @IsOptional()
  @Length(1, 256)
  Country: string;

  @IsOptional()
  @Length(1, 15)
  Phone: string;

  @IsOptional()
  @Length(1, 256)
  LinkToMainLogo: string;

  @IsOptional()
  @Length(1, 256)
  LinkToSmallLogo: string;

  @IsOptional()
  @Length(1, 256)
  RUC: string;

  @IsOptional()
  @IsUUID()
  MasterAdminUserId: string;

  @IsOptional()
  @IsInt()
  StatusIdAvailabilityBasedOn: number;

  @IsOptional()
  @IsBoolean()
  SAPPOIntegration: boolean;

  @IsOptional()
  @IsInt()
  CurrentPlanId: number;

  @IsOptional()
  @IsInt()
  MaxPremiumUsers: number;

  @IsOptional()
  @IsBoolean()
  MultiCompanyEnabled: boolean;
}
