import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Slices/AuthSlice';
import cartReducer from './features/cart/cartSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
});
