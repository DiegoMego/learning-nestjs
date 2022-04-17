/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { AUTHENTICATION_STATUS } from '../../shared/constants';
import auth from '../actions/auth.action';

type InitialState = {
  token: string,
  status: string,
  role: string,
  error?: {
    success?: boolean,
    statusCode?: number,
    message?: string,
  }
}

const authReducer = createReducer<InitialState>(
  {
    token: '',
    status: AUTHENTICATION_STATUS.PENDING,
    role: '',
  },
  (builder) => {
    builder.addCase(auth.login.fulfilled, (state, action) => {
      state.token = action.payload.access_token;
      state.status = AUTHENTICATION_STATUS.AUTHENTICATED;
      state.error = undefined;
    }).addCase(auth.login.rejected, (state, action) => {
      state.status = AUTHENTICATION_STATUS.NOT_AUTHENTICATED;
      state.error = {
        success: action.payload?.success,
        statusCode: action.payload?.statusCode,
        message: action.payload?.message,
      };
    });

    builder.addCase(auth.refresh.fulfilled, (state, action) => {
      state.token = action.payload.access_token;
      state.status = AUTHENTICATION_STATUS.AUTHENTICATED;
    }).addCase(auth.refresh.rejected, (state) => {
      state.token = '';
      state.role = '';
      state.status = AUTHENTICATION_STATUS.NOT_AUTHENTICATED;
    });
  },
);

export default authReducer;
