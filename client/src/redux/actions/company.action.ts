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

const create = createAsyncThunk<
  IResponse<undefined>,
  Company,
  {
    rejectValue: IError
  }
>(
  'company/create',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.company.create(payload);
      return response;
    } catch (e) {
      const error = e as IError;
      return rejectWithValue({
        status: error.status,
        message: error.message,
      });
    }
  },
);

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
  create,
  industries,
  table,
  types,
};
