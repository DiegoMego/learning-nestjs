import { Transform } from 'class-transformer';
import { IsBoolean, IsOptional, Length } from 'class-validator';

export class CompanyTableFiltersDTO {
  @IsOptional()
  @Length(0, 512)
  Name: string;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => {
    if (value === 'true') return true;
    if (value === 'false') return false;
    return null;
  })
  Enabled: boolean;
}
