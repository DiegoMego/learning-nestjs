import React from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';

const columns: TableColumn<CompanyVM>[] = [
  {
    name: 'Nombre',
    selector: (row) => row.Name,
  },
  {
    name: 'RUC',
    selector: (row) => row.RUC,
  },
  {
    name: 'Industria',
    selector: (row) => row.CompanyIndustry,
  },
  {
    name: 'Tipo',
    selector: (row) => row.CompanyType,
  },
  {
    name: 'Estado',
    selector: (row) => row.Enabled,
  },
];

export default function CompanyTable({ data }: { data: CompanyVM[] }) {
  return <DataTable columns={columns} data={data} />;
}
