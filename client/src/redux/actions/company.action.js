import { createAsyncThunk } from "@reduxjs/toolkit";
import api from '../../api/index';

const industries = {
  get: createAsyncThunk(
    'industries/get',
    async _ => {
      const response = await api.company.industries.get();
      const industries = response.data.map(i => ({value: i.Id, label: i.Name}));
      return {
        industries,
      };
    }
  )
}

const types = {
  get: createAsyncThunk(
    'types/get',
    async _ => {
      const response = await api.company.types.get();
      const types = response.data.map(t => ({value: t.Id, label: t.Name}));
      return {
        types,
      };
    }
  )
}

export default {
  industries,
  types,
}