import { configureStore } from '@reduxjs/toolkit';

import BaseApi from './api/baseApi';
import { RootReducer } from './rootReducer';

const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(BaseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
