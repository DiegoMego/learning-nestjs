import Swal from 'sweetalert2';
import { ReactSweetAlert } from 'sweetalert2-react-content';

declare global {
  interface IResponse<T> {
    status: number,
    data: T
  }

  interface IError {
    message: string,
    status: number,
  }

  type Alert = typeof Swal & ReactSweetAlert

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
    Industry: number | null | undefined,
    Type: number | null | undefined,
    Enabled: boolean | null | undefined,
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
