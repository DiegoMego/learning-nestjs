import { IsOptional, Length } from 'class-validator';

export class CompanyTableFiltersDTO {
  @IsOptional()
  @Length(0, 512)
  Name: string;
}
