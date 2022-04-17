import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/index';
import ability from '../../acl/ability';
import GetUserAbilityRules from '../../acl/rules';
import Error from '../../shared/responses/error';
import BaseResponse from '../../shared/responses/base';

interface AuthLogin {
  Username: string,
  Password: string,
}

interface AccessToken {
  access_token: string,
}

const login = createAsyncThunk<
AccessToken,
AuthLogin,
{
  rejectValue: BaseResponse,
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
    } catch (e) {
      const error = e as ErrorType;
      return rejectWithValue(Error(error.status, 'El usuario y/o contraseña son inválidos'));
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
      return rejectWithValue(error as ErrorType);
    }
  },
);

export default {
  login,
  refresh,
};
