import { createSlice } from "@reduxjs/toolkit";

const statisticSlice = createSlice({
  name: "statistics",
  initialState: {
    allStatistics: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    getStatisticsRequest: (state) => {
      state.isLoading = true;
    },
    getStatisticSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.allStatistics = Array.isArray(action.payload) ? action.payload : [action.payload];
    },
    getStatisticsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getStatisticSuccess,
  getStatisticsFailure,
  getStatisticsRequest,
} = statisticSlice.actions;

export const selectStatistics = (state) => state.statistics.allStatistics;
export const selectIsLoadingStatistics = (state) => state.statistics.isLoading;
export const selectStatisticsError = (state) => state.statistics.error;

export default statisticSlice.reducer;
