import { createSlice } from '@reduxjs/toolkit';

const officeSlice = createSlice({
    name: 'office',
    initialState: {
        allOffices: [],
        offices: [],
        totalPages: 0,
        currentPage: 1,
        isLoading: false,
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
    },
});

export const { getAllOfficesRequest, getAllOfficesSuccess, getAllOfficesFailure, setCurrentPage } =
    officeSlice.actions;
export const selectAllOffices = (state) => state.office.allOffices;
export const selectOffices = (state) =>
    state.office.allOffices.slice((state.office.currentPage - 1) * 6, state.office.currentPage * 6);
export const selectTotalPages = (state) => state.office.totalPages;
export const selectCurrentPage = (state) => state.office.currentPage;
export default officeSlice.reducer;
