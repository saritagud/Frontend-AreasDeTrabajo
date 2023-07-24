// Importamos createSlice de Redux Toolkit q ya teniamos configurado
import { createSlice } from '@reduxjs/toolkit';

// Creamos un slice de Redux para manejar el estado de las oficinas
const officeSlice = createSlice({
    name: 'office',
    initialState: {
        offices: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        // Reducer para manejar la solicitud de obtener oficinas
        getOfficesRequest: (state) => {
            state.isLoading = true;
        },
        // Reducer para manejar el exito al obtener oficinas
        getOfficesSuccess: (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.offices = action.payload;
        },
        // Reducer para manejar el fracaso al obtener oficinas
        getOfficesFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

// Exportamos las acciones y un selector para obtener las oficinas del estado y el reducer
export const { getOfficesRequest, getOfficesSuccess, getOfficesFailure } =
    officeSlice.actions;
export const selectOffices = (state) => state.office.offices;
export default officeSlice.reducer;
