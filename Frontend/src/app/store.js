import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import officeReducer from '../features/office/officeSlice';
import sidebarSlice from '../features/sidebar/sidebarSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    office: officeReducer, //configuracion para las oficinas
    sidebar: sidebarSlice,
  },
});

export default store;