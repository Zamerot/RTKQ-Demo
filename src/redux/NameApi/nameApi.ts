import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import * as Types from './types';

export const nameApi = createApi({
  reducerPath: 'name',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.agify.io/',
  }),

  endpoints: build => ({
    getAge: build.query<Types.Response, String>({
      query: args => {
        return {
          url: '?name=' + args,
        };
      },
    }),
  }),
});
