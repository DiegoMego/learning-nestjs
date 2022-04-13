import React from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';

type DataRow = {
  Name: string,
  Enabled: boolean,
};

const columns: TableColumn<DataRow>[] = [
  {
    name: 'Nombre',
    selector: (row) => row.Name,
  },
  {
    name: 'Habilitado',
    selector: (row) => (row.Enabled ? 'Sí' : 'No'),
  },
];

export default function CompanyTable({ data }: { data: DataRow[] }) {
  return <DataTable columns={columns} data={data} />;
}
