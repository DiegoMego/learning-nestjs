import { configureStore } from '@reduxjs/toolkit';
import auth from './reducers/auth.reducer';
import company from './reducers/company.reducer';
import user from './reducers/user.reducer';

const store = configureStore({
  reducer: {
    auth,
    company,
    user,
  }
});

export default store;