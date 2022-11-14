import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import transactionReducer from '../features/moneyTransApi/transSlice'

export const store = configureStore({
  reducer: {
    counter: transactionReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware,
  },
});
