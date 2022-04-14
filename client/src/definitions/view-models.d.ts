declare global {
  type CompanyVM = {
    Name: string,
    RUC: string,
    CompanyIndustry: string,
    CompanyType: string,
    Phone?: string,
    Address?: string,
    District?: string,
    City?: string,
    State?: string,
    Country?: string,
    Enabled: string,
  }
}

export {};
