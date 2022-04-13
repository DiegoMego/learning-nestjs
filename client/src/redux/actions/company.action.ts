import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/index';

const industries = {
  get: createAsyncThunk(
    'company.industries/get',
    async () => {
      const response = await api.company.industries.get();
      const industryOptions = response.data.map((i) => ({ value: i.Id, label: i.Name }));
      return {
        industryOptions,
      };
    },
  ),
};

const types = {
  get: createAsyncThunk(
    'company.types/get',
    async () => {
      const response = await api.company.types.get();
      const typeOptions = response.data.map((t) => ({ value: t.Id, label: t.Name }));
      return {
        typeOptions,
      };
    },
  ),
};

const table = createAsyncThunk(
  'company.table/get',
  async (filters: CompanyFilters) => {
    const response = await api.company.table(filters);
    return {
      companies: response.data,
    };
  },
);

export default {
  table,
  industries,
  types,
};
