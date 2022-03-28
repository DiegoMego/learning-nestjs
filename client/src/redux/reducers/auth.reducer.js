import { createReducer } from "@reduxjs/toolkit";
import auth from '../actions/auth.action';

const authReducer = createReducer({
  token: null
},
builder => {
  builder.addCase(auth.login.fulfilled, (state, action) => state.token = action.token)
         .addCase(auth.login.rejected, (state, action) => console.log(action));
});

export default authReducer;