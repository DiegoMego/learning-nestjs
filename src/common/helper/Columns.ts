export const CompanyColumns = [
  'company.Name',
  'company.RUC',
  'industry.Name',
  'type.Name',
  'company.Enabled',
];

export const CompanyColumnNames = {
  Name: {
    table: 'company',
    name: 'Name',
  },
  Industry: {
    table: 'industry',
    name: 'Id',
  },
  Type: {
    table: 'type',
    name: 'Id',
  },
  Enabled: {
    table: 'company',
    name: 'Enabled',
  },
};
