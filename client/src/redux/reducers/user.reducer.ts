/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import user from '../actions/user.action';

const userReducer = createReducer(
  {
    profile: {
      FirstName: '',
      LastName: '',
    },
  },
  (builder) => {
    builder.addCase(user.profile.get.fulfilled, (state, action) => {
      state.profile = {
        FirstName: action.payload.FirstName,
        LastName: action.payload.LastName,
      };
    });
  },
);

export default userReducer;
