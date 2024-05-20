import BaseApi from './api/baseApi';

export const RootReducer = {
  [BaseApi.reducerPath]: BaseApi.reducer,
};
