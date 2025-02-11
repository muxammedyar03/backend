import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';

export const apiStore = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof apiStore.getState>;
export type AppDispatch = typeof apiStore.dispatch;
