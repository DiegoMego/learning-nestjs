declare global {
  interface IResponse<T> {
    data: T
  }

  type SelectOption = {
    Id: number,
    Name: string
  }

  type DropdownOption<T> = {
    label: string,
    value: T,
  }

  type CompanyFilters = {
    Name: string | null | undefined,
    Enabled: boolean | null | undefined,
  }

  // Entities
  type Company = {
    Name: string,
    Ruc: string,
    Industry: number,
    Companytype: number,
    Phone?: string,
    Address?: string,
    District?: string,
    City?: string,
    State?: string,
    Country?: string,
    Enabled: boolean,
  }

  type NavDataLinkChildren = {
    id: number,
    name: string,
    url: string,
    disabled: boolean,
  }

  type NavDataLinks = {
    id: number,
    name: string,
    url: string,
    icon: string,
    children: Array<NavDataLinkChildren>,
    disabled: boolean,
  }
}

export {};