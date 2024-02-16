import { configureStore } from '@reduxjs/toolkit';
import authReducer from 'pages/Login/state/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add other reducers as needed
  },
});