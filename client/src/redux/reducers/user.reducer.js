import { createReducer } from "@reduxjs/toolkit";

const userReducer = createReducer({}, builder => {
  builder.addCase('login', (state, action) => state.token = action.token);
})

export default userReducer;