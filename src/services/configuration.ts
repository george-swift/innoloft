import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axiosBase';

export const configurationApi = createApi({
  reducerPath: 'configurationApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://api-test.innoloft.com/',
  }),
  endpoints: builder => ({
    getConfigByAppId: builder.query({
      query: appId => ({ url: `configuration/${appId}/`, method: 'get' }),
    }),
  }),
});

export const { useGetConfigByAppIdQuery } = configurationApi;
