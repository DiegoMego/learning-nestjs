import React from 'react';
import CompanyFilters from '../../components/Filters/CompanyFilters';
import CompanyTable from '../../components/Tables/CompanyTable';
import { useAppDispatch, useAppSelector } from '../../hooks/store.hooks';
import PageLayout from '../../layouts/PageLayout';
import actions from '../../redux/actions/company.action';

export default function CompanyIndex() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.company.table.data);
  const reload = (filters: CompanyFilters) => {
    dispatch(actions.table(filters));
  };

  return (
    <PageLayout>
      <CompanyFilters reload={reload} />
      <CompanyTable data={data} />
    </PageLayout>
  );
}
