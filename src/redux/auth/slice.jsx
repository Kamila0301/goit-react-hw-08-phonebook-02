import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handleFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};
const handleLogOut = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};
const handleRefreshUserPending = state => {
  state.isLoggedIn = false;
  state.isRefreshing = true;
};
const handleRefreshUser = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};
const handleRefreshUserRejected = state => {
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, handleFulfilled)
      .addCase(logIn.fulfilled, handleFulfilled)
      .addCase(logOut.fulfilled, handleLogOut)
      .addCase(refreshUser.pending, handleRefreshUserPending)
      .addCase(refreshUser.fulfilled, handleRefreshUser)
      .addCase(refreshUser.rejected, handleRefreshUserRejected),
});

export const authReducer = authSlice.reducer;
