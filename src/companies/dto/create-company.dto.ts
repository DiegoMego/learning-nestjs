import {
  IsBoolean,
  IsInt,
  IsOptional,
  IsUUID,
  MaxLength,
} from 'class-validator';

export class CreateCompanyDTO {
  @MaxLength(512)
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
  @MaxLength(256)
  Address: string;

  @IsOptional()
  @MaxLength(256)
  District: string;

  @IsOptional()
  @MaxLength(256)
  City: string;

  @IsOptional()
  @MaxLength(256)
  State: string;

  @IsOptional()
  @MaxLength(256)
  Zip: string;

  @IsOptional()
  @MaxLength(256)
  Country: string;

  @IsOptional()
  @MaxLength(15)
  Phone: string;

  @IsOptional()
  @MaxLength(256)
  LinkToMainLogo: string;

  @IsOptional()
  @MaxLength(256)
  LinkToSmallLogo: string;

  @IsOptional()
  @MaxLength(256)
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
