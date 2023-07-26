import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import officeReducer from '../features/office/officeSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    office: officeReducer, //configuracion para las oficinas
  },
});

export default store;

