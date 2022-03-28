import { createReducer } from "@reduxjs/toolkit";
import user from '../actions/user.auction';

const userReducer = createReducer({
  profile: {}
},
builder => {
  builder.addCase(user.profile.get.fulfilled, (state, action) => {
    state.profile = {
      FirstName: action.payload.FirstName,
      LastName: action.payload.LastName,
    }
  });
})

export default userReducer;