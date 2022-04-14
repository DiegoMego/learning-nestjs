import React from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';

const columns: TableColumn<Company>[] = [
  {
    name: 'Nombre',
    selector: (row) => row.Name,
  },
  {
    name: 'Habilitado',
    selector: (row) => (row.Enabled === null || row.Enabled ? 'Sí' : 'No'),
  },
];

export default function CompanyTable({ data }: { data: Company[] }) {
  return <DataTable columns={columns} data={data} />;
}
