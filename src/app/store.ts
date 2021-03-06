import { configureStore } from '@reduxjs/toolkit';
import { configurationApi } from '../services/configuration';
import { productApi } from '../services/product';
import modalReducer from '../features/product/modalSlice';

export const store = configureStore({
  reducer: {
    [configurationApi.reducerPath]: configurationApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    modal: modalReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      configurationApi.middleware,
      productApi.middleware,
    ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
