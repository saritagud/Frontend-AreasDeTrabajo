import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import officeReducer from '../features/office/officeSlice';
import sidebarSlice from '../features/sidebar/sidebarSlice';
import bookingsSlice from '../features/bookings/bookingsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    office: officeReducer,
    sidebar: sidebarSlice,
    bookings: bookingsSlice,
  },
});

export default store;