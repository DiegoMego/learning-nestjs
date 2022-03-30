import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import api from '../../api/index';

const login = createAsyncThunk(
  'login',
  async (payload, { rejectWithValue }) => {
    try {
      const { Username, Password } = payload;
      const response = await api.auth.login(Username, Password);
      return {
        access_token: response.data.access_token,
      };
    } catch (error) {
      console.log("ERROR", JSON.stringify(error));
      return rejectWithValue(error);
    }
  }
);

const refresh = createAsyncThunk(
  'refresh',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.auth.refresh_token();
      return {
        access_token: response.data.access_token
      };
    } catch (error) {
      console.log("ERROR", JSON.stringify(error));
      return rejectWithValue(error);
    }
  }
)

export default {
  login,
  refresh,
}