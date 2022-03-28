import { createAsyncThunk } from "@reduxjs/toolkit";
import api from '../../api/index';

const login = createAsyncThunk(
  'login',
  async (payload, { rejectWithValue }) => {
    try {
      const { Username, Password } = payload;
      const response = await api.auth.login(Username, Password);
      return {
        access_token: response.data.access_token,
        navigate: payload.Navigate,
      };
    } catch (error) {
      console.log("ERROR", JSON.stringify(error));
      return rejectWithValue(error);
    }
  }
);

export default {
  login
}