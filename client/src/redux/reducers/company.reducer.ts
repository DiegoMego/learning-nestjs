/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { Options } from 'react-select';
import CustomResponse from '../../shared/responses';
import company from '../actions/company.action';

const initialState = {
  dropdowns: {
    industries: [] as Options<DropdownOption<number>>,
    types: [] as Options<DropdownOption<number>>,
  },
  table: {
    data: [] as CompanyVM[],
  },
};

const companyReducer = createReducer(
  initialState,
  (builder) => {
    builder.addCase(company.industries.get.fulfilled, (state, action) => {
      state.dropdowns.industries = action.payload.industryOptions;
    }).addCase(company.types.get.fulfilled, (state, action) => {
      state.dropdowns.types = action.payload.typeOptions;
    }).addCase(company.create.fulfilled, (_, action) => {
      const response = CustomResponse(action.payload.status, 'La compañía fue creada exitosamente');
      response.alert().then(() => {
        window.location.href = '/company/index';
      });
    }).addCase(company.table.fulfilled, (state, action) => {
      state.table.data = action.payload.companies;
    });
  },
);

export default companyReducer;
