/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import company from '../actions/company.action';

const companyReducer = createReducer(
  {
    dropdowns: {
      industries: [{
        value: 0,
        label: '',
      }],
      types: [{
        value: 0,
        label: '',
      }],
    },
  },
  (builder) => {
    builder.addCase(company.industries.get.fulfilled, (state, action) => {
      state.dropdowns.industries = action.payload.industryOptions;
    }).addCase(company.types.get.fulfilled, (state, action) => {
      state.dropdowns.types = action.payload.typeOptions;
    });
  },
);

export default companyReducer;
