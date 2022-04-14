declare global {
  type CompanyIndustry = {
    Id?: numner,
    Name?: string,
  }

  type CompanyType = {
    Id?: number,
    Name?: string,
  }

  type Company = {
    Name: string,
    RUC: string,
    CompanyIndustry: CompanyIndustry,
    CompanyType: CompanyType,
    Phone?: string,
    Address?: string,
    District?: string,
    City?: string,
    State?: string,
    Country?: string,
    Enabled: boolean,
  }
}

export {};
