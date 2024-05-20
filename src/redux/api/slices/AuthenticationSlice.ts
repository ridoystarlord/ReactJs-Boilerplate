import BaseApi from '../baseApi';

const AuthenticationApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        data,
      }),
    }),
  }),
});

export const { useLoginMutation } = AuthenticationApi;
