import { Catalog, LUser, TUser } from '../utils/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://newbackend-zwku.onrender.com' }),
  endpoints: (builder) => ({
    // GET 
    getProducts: builder.query<Catalog[], void>({
      query: () => 'category/all',
      keepUnusedDataFor: 300,
    }),
    // POST register
    register: builder.mutation<any, Partial<TUser>>({
      query: (data) => ({
        url: '/users',
        method: 'POST',
        body: data,
      }),
    }),
    // POST - Login
    login: builder.mutation<any, Partial<LUser>>({
      query: (data) => ({
        url: '/users/login', // Login endpointi
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useRegisterMutation, useLoginMutation } = apiSlice; 
