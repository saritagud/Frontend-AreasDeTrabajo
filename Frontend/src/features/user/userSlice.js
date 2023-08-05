import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    allUsers: [],
    totalPages: 0,
    currentPage: 1,
    isLoading: false,
    error: null,
  },
  reducers: {
    usersRequest: (state) => {
      state.isLoading = true;
    },
    getAllUsersSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.allUsers = action.payload;
      state.totalPages = Math.ceil(action.payload.length / 6);
    },
    updateUserSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      
      const updatedUserIndex = state.allUsers.findIndex((user) => user._id === action.payload._id);
      if (updatedUserIndex !== -1) {
        state.allUsers[updatedUserIndex] = action.payload;
      }
    },
    deleteUserSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.allUsers = state.allUsers.filter((user) => user._id !== action.payload);
      state.totalPages = Math.ceil(state.allUsers.length / 6);
    },
    usersFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const {
  usersRequest,
  getAllUsersSuccess,
  deleteUserSuccess,
  updateUserSuccess,
  usersFailure,
  setCurrentPage,
} = userSlice.actions;

export const selectAllUsers = (state) =>
  state.user.allUsers.slice((state.user.currentPage - 1) * 6, state.user.currentPage * 6);
export const selectIsLoadingUsers = (state) => state.user.isLoading;
export const selectUsersError = (state) => state.user.error;
export const selectTotalPages = (state) => state.user.totalPages;
export const selectCurrentPage = (state) => state.user.currentPage;

export default userSlice.reducer;