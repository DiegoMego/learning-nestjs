import { configureStore } from '@reduxjs/toolkit';
import auth from './reducers/auth.reducer';
import company from './reducers/company.reducer';
import user from './reducers/user.reducer';

export const store = configureStore({
  reducer: {
    auth,
    company,
    user,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
