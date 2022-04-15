import React from 'react';
import CompanyFilters from '../../components/filters/company.filters';
import CompanyTable from '../../components/tables/company.table';
import { useAppDispatch, useAppSelector } from '../../hooks/store.hooks';
import ContentLayout from '../../layouts/content.layout';
import actions from '../../redux/actions/company.action';

export default function CompanyIndex() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.company.table.data);
  const reload = (filters: CompanyFilters) => {
    dispatch(actions.table(filters));
  };

  return (
    <ContentLayout>
      <CompanyFilters reload={reload} />
      <CompanyTable data={data} />
    </ContentLayout>
  );
}
