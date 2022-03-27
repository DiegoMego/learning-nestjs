import { createAsyncThunk } from "@reduxjs/toolkit";
import api from '../../api/index';

const login = createAsyncThunk(
  'login',
  async payload => {
    const response = await api.auth.login(payload)
    return response;
  }
);

export default {
  login
}