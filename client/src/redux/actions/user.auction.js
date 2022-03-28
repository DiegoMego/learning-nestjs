import { createAsyncThunk } from "@reduxjs/toolkit";
import api from '../../api/index';

const profile = {
  get: createAsyncThunk(
    'profile/get',
    async payload => {
      const response = await api.user.profile.get(payload);
      const { FirstName, LastName } = response.data;
      return {
        FirstName,
        LastName,
      };
    }
  )
}

export default {
  profile,
}