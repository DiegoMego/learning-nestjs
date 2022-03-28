import { configureStore } from '@reduxjs/toolkit';
import auth from './reducers/auth.reducer';
import user from './reducers/user.reducer';

const store = configureStore({
  reducer: {
    auth,
    user,
  }
});

export default store;