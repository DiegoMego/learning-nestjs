import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/index';

const industries = {
  get: createAsyncThunk(
    'industries/get',
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
    'types/get',
    async () => {
      const response = await api.company.types.get();
      const typeOptions = response.data.map((t) => ({ value: t.Id, label: t.Name }));
      return {
        typeOptions,
      };
    },
  ),
};

export default {
  industries,
  types,
};
