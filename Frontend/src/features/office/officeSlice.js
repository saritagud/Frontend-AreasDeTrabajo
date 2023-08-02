import { createSlice } from '@reduxjs/toolkit';

const officeSlice = createSlice({
  name: 'office',
  initialState: {
    allOffices: [],
    offices: [],
    totalPages: 0,
    currentPage: 1,
    isLoading: false,
    isLoadingOffice: false,
    error: null,
  },
  reducers: {
    getAllOfficesRequest: (state) => {
      state.isLoading = true;
    },
    getAllOfficesSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.allOffices = action.payload;
      state.totalPages = Math.ceil(action.payload.length / 6);
    },
    getAllOfficesFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    deleteOfficesRequest: (state) => {
      state.isLoading = true;
    },
    deleteOfficesSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.allOffices = state.allOffices.filter((office) => office._id !== action.payload);
      state.totalPages = Math.ceil(state.allOffices.length / 6);
    },
    deleteOfficeFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    addOfficesRequest: (state) => {
      state.isLoading = true;
    },
    addOfficesSuccess: (state) => {
      state.isLoading = false;
      state.error = null;
    },
    addOfficesFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    loadOfficesRequest: (state) => {
      state.isLoadingOffice = true;
    },
    loadOfficesSuccess: (state) => {
      state.isLoadingOffice = false;
      state.error = null;
    },
    loadOfficesFailure: (state, action) => {
      state.isLoadingOffice = false;
      state.error = action.payload;
    },
    editOfficeRequest: (state) => {
      state.isLoading = true;
    },
    editOfficeSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      for (let i = 0; i < state.allOffices.length; i++) {
        if (action.payload.id === state.allOffices[i]._id) {
          state.allOffices[i] = action.payload.office
        }
      }
    },
    editOfficeFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { editOfficeFailure, editOfficeSuccess, editOfficeRequest, loadOfficesRequest, loadOfficesSuccess, loadOfficesFailure, addOfficesFailure, addOfficesSuccess, addOfficesRequest, deleteOfficeFailure, deleteOfficesSuccess, deleteOfficesRequest, getAllOfficesRequest, getAllOfficesSuccess, getAllOfficesFailure, setCurrentPage } =
  officeSlice.actions;
export const selectAllOffices = (state) => state.office.allOffices;
export const selectOffices = (state) =>
  state.office.allOffices.slice((state.office.currentPage - 1) * 6, state.office.currentPage * 6);
export const selectTotalPages = (state) => state.office.totalPages;
export const selectCurrentPage = (state) => state.office.currentPage;
export const selectIsLoadingOffices = (state) => state.office.isLoading;
export const selectIsLoadingOffice = (state) => state.office.isLoadingOffice;
export default officeSlice.reducer;