import { createApi } from '@reduxjs/toolkit/query/react';

import AxiosBaseQuery from '@/lib/axiosBaseQuery';

const BaseApi = createApi({
  reducerPath: 'api',
  baseQuery: AxiosBaseQuery({ baseUrl: import.meta.env.VITE_BASEURL }),
  endpoints: () => ({}),
  tagTypes: [],
});

export default BaseApi;
