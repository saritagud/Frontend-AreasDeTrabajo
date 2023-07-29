import { createSlice } from '@reduxjs/toolkit';
import jwt_decode from 'jwt-decode';

const tokenLS = 'accessToken';
const accessToken = localStorage.getItem(tokenLS); // Acceder al token del LocalStorage

// Función para decodificar el token y obtener los datos del usuario
const decodeToken = (token) => {
  if (token) {
    try {
      const decodedToken = jwt_decode(token);
      return {
        user: decodedToken.data,
        token: token,
        tokenExpiration: decodedToken.exp,
      };
    } catch (error) {
      console.error('Error al decodificar el token:', error);
    }
  } else {
    console.warn('El token no existe o es nulo en el LocalStorage.');
  }
  return null;
};

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
  tokenExpiration: null,
};

// Inicializar el estado con los datos del usuario y el token
const decodedData = decodeToken(accessToken);
if (decodedData) {
  initialState.user = decodedData.user;
  initialState.token = decodedData.token;
  initialState.tokenExpiration = decodedData.tokenExpiration;
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;

      const token = action.payload;
      const decodedData = decodeToken(action.payload);
      if (decodedData) {
        state.user = decodedData.user;
        state.token = decodedData.token;
        state.tokenExpiration = decodedData.tokenExpiration;
      } else {
        state.user = null;
        state.token = null;
        state.tokenExpiration = null;
      }
      localStorage.setItem(tokenLS, token);
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.user = null;
      state.token = null;
      state.tokenExpiration = null;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.tokenExpiration = null;
      localStorage.removeItem(tokenLS);
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure, logout } = authSlice.actions;
export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
export const selectTokenExpiration = (state) => state.auth.tokenExpiration;
export default authSlice.reducer;