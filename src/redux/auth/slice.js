import { createSlice } from "@reduxjs/toolkit";
import {
  loginThunk,
  logoutThunk,
  refreshUserThunk,
  registrationThunk,
} from "./operations";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: false,
};

const slice = createSlice({
  name: "authorization",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(registrationThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })

      // pending
      .addCase(registrationThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(refreshUserThunk.pending, (state) => {
        state.isLoading = true;
        state.isRefreshing = true;
      })
      .addCase(logoutThunk.pending, (state) => {
        state.isLoading = true;
      })

      // rejected
      .addCase(registrationThunk.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(loginThunk.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(refreshUserThunk.rejected, (state) => {
        state.isLoading = false;
        state.isRefreshing = false;
      })
      .addCase(logoutThunk.rejected, (state) => {
        state.isLoading = false;
      }),
});

export const authorizationReducer = slice.reducer;
