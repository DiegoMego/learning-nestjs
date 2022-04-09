import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/index';
import ability from '../../acl/ability';
import GetUserAbilityRules from '../../acl/rules';

interface AuthLogin {
  Username: string,
  Password: string,
}

interface AccessToken {
  access_token: string,
}

interface AuthenticationError {
  message: string,
  code: number,
}

const login = createAsyncThunk<
AccessToken,
AuthLogin,
{
  rejectValue: AuthenticationError,
}>(
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
      return rejectWithValue(error as AuthenticationError);
    }
  },
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
      return rejectWithValue(error as AuthenticationError);
    }
  },
);

export default {
  login,
  refresh,
};
