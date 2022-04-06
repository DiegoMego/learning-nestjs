import { createReducer } from "@reduxjs/toolkit";
import company from '../actions/company.action';

const companyReducer = createReducer({
    dropdowns: {
      industries: [],
      types: [],
    }
  },
  builder => {
    builder.addCase(company.industries.get.fulfilled, (state, action) => {
      state.dropdowns.industries = action.payload.industries;
    }).addCase(company.types.get.fulfilled, (state, action) => {
      state.dropdowns.types = action.payload.types;
    });
  }
);

export default companyReducer;