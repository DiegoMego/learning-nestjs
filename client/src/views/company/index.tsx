import React from 'react';
import CompanyFilters from '../../components/Filters/CompanyFilters';
import { useAppDispatch } from '../../hooks/store.hooks';
import PageLayout from '../../layouts/PageLayout';
import actions from '../../redux/actions/company.action';

export default function CompanyIndex() {
  const dispatch = useAppDispatch();
  const reload = (filters: CompanyFilters) => {
    dispatch(actions.table(filters));
  };

  return (
    <PageLayout>
      <CompanyFilters reload={reload} />
    </PageLayout>
  );
}
