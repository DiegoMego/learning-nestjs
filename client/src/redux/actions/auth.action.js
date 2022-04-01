import { createAsyncThunk } from "@reduxjs/toolkit";
import api from '../../api/index';
import ability from '../../acl/ability';
import GetUserAbilityRules from "../../acl/rules";

const login = createAsyncThunk(
  'login',
  async (payload, { rejectWithValue }) => {
    try {
      const { Username, Password } = payload;
      const response = await api.auth.login(Username, Password);
      ability.update(GetUserAbilityRules(response.data.rolename));
      return {
        access_token: response.data.access_token,
      };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const refresh = createAsyncThunk(
  'refresh',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.auth.refresh_token();
      ability.update(GetUserAbilityRules(response.data.rolename));
      return {
        access_token: response.data.access_token,
      };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
)

export default {
  login,
  refresh,
}