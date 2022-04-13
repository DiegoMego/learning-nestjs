/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { Options } from 'react-select';
import company from '../actions/company.action';

const initialState = {
  dropdowns: {
    industries: [] as Options<DropdownOption<number>>,
    types: [] as Options<DropdownOption<number>>,
  },
  table: {
    data: [] as Company[],
  },
};

const companyReducer = createReducer(
  initialState,
  (builder) => {
    builder.addCase(company.industries.get.fulfilled, (state, action) => {
      state.dropdowns.industries = action.payload.industryOptions;
    }).addCase(company.types.get.fulfilled, (state, action) => {
      state.dropdowns.types = action.payload.typeOptions;
    }).addCase(company.table.fulfilled, (state, action) => {
      state.table.data = action.payload.companies;
    });
  },
);

export default companyReducer;
