import { configureStore } from "@reduxjs/toolkit";
// IMPORTING SLICES
import ProductsReducer from './Slices/productsSlice';
import RequestsReducer from './Slices/requestsSlice';

const store = configureStore({
  reducer: {
    products: ProductsReducer,
    requests: RequestsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production'
})

export default store;