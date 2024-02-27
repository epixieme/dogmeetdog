import { configureStore } from '@reduxjs/toolkit';
import authReducer from 'features/auth/state/authSlice';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add other reducers as needed
  },

});



export type RootState = ReturnType<typeof store.getState>

