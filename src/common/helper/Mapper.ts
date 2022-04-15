import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import {
  createMap,
  forMember,
  mapFrom,
  Mapper,
  MappingProfile,
} from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { Company } from 'src/companies/entities/company.entity';
import { CompanyTableVM } from 'src/companies/vm/company-table.vm';

@Injectable()
export class CompanyProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile(): MappingProfile {
    return (mapper) => {
      createMap(
        mapper,
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
          mapFrom((source) =>
            source.Enabled ? 'Habilitado' : 'Deshabilitado',
          ),
        ),
      );
    };
  }
}
