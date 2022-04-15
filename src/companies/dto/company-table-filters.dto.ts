import { Type } from 'class-transformer';
import { IsBoolean, IsNumber, IsOptional, Length } from 'class-validator';
import { ToBoolean } from 'src/common/decorators/parser.decorator';

export class CompanyTableFiltersDTO {
  @IsOptional()
  @Length(0, 512)
  Name: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  Industry: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  Type: number;

  @IsOptional()
  @ToBoolean()
  @IsBoolean()
  Enabled: boolean;
}
