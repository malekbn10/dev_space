import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../src/redux/inventory/authSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    
  }
  },    
)
export default store;