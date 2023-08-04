import { createSlice } from '@reduxjs/toolkit';

const bookingsSlice = createSlice({
  name: 'bookings',
  initialState: {
    allBookings: [],
    userBookings: [],
    totalPages: 0,
    currentPage: 1,
    isLoading: false,
    error: null,
  },
  reducers: {
    getBookingsRequest: (state) => {
      state.isLoading = true;
    },
    getAllBookingsSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.allBookings = action.payload;
      state.totalPages = Math.ceil(action.payload.length / 6);
    },
    getUserBookingsSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.userBookings = action.payload;
      state.totalPages = Math.ceil(action.payload.length / 6);
    },
    getBookingsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    deleteBookingRequest: (state) => {
      state.isLoading = true;
    },
    deleteAllBookingSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.allBookings = state.allBookings.filter((booking) => booking._id !== action.payload);
      state.userBookings = state.userBookings.filter((booking) => booking._id !== action.payload);
      state.totalPages = Math.ceil(state.allBookings.length / 6);
    },
    deleteUserBookingSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.allBookings = state.allBookings.filter((booking) => booking._id !== action.payload);
      state.userBookings = state.userBookings.filter((booking) => booking._id !== action.payload);
      state.totalPages = Math.ceil(state.userBookings.length / 6);
    },
    deleteBookingFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    addBookingRequest: (state) => { // reducer para manejar el envío de reservas
      state.isLoading = true;
    },
    addBookingSuccess: (state, action) => { // reducer para manejar el envio exitoso de una reserva
      state.isLoading = false;
      state.error = null;
      // actualizmao el estado segun sea necesario
    },
    addBookingFailure: (state, action) => { // reducer para manejar errores al enviar una reserva
      state.isLoading = false;
      state.error = action.payload;
    }
  },
});

export const {
  getBookingsRequest,
  getAllBookingsSuccess,
  getUserBookingsSuccess,
  getBookingsFailure,
  deleteBookingRequest,
  deleteAllBookingSuccess,
  deleteUserBookingSuccess,
  deleteBookingFailure,
  setCurrentPage,
  addBookingRequest, // exportar acciones para manejar el envío de reservas
  addBookingSuccess,
  addBookingFailure
} = bookingsSlice.actions;

export const selectAllBookings = (state) =>
  state.bookings.allBookings.slice((state.bookings.currentPage - 1) * 6, state.bookings.currentPage * 6);
export const selectUserBookings = (state) => state.bookings.userBookings;
export const selectIsLoadingBookings = (state) => state.bookings.isLoading;
export const selectBookingError = (state) => state.bookings.error;
export const selectTotalPages = (state) => state.bookings.totalPages;
export const selectCurrentPage = (state) => state.bookings.currentPage;

export default bookingsSlice.reducer;
