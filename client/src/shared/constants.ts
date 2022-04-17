export const AUTHENTICATION_STATUS = {
  AUTHENTICATED: 'AUTHENTICATED',
  PENDING: 'PENDING',
  NOT_AUTHENTICATED: 'NOT_AUTHENTICATED',
};

export const EnabledFilter: DropdownOption<boolean>[] = [
  {
    value: true,
    label: 'Habilitado',
  },
  {
    value: false,
    label: 'Deshabilitado',
  },
];

export const HttpStatusCode = {
  CREATED: 201,
  UNAUTHORIZED: 401,
};
