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
    Enabled: boolean | null | undefined,
  }

  // Entities
  type Company = {
    name: string,
    ruc: string,
    industry: number,
    companytype: number,
    phone?: string,
    address?: string,
    district?: string,
    city?: string,
    state?: string,
    country?: string,
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
