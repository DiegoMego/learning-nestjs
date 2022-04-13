/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { AUTHENTICATION_STATUS } from '../../shared/constants';
import auth from '../actions/auth.action';

const authReducer = createReducer(
  {
    token: '',
    status: AUTHENTICATION_STATUS.PENDING,
    role: '',
  },
  (builder) => {
    builder.addCase(auth.login.fulfilled, (state, action) => {
      state.token = action.payload.access_token;
      state.status = AUTHENTICATION_STATUS.AUTHENTICATED;
    }).addCase(auth.login.rejected, (state) => {
      state.status = AUTHENTICATION_STATUS.NOT_AUTHENTICATED;
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
