/* eslint-disable @typescript-eslint/no-explicit-any */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SavingState } from '../store';
import apiClient from '../../utils/apiClient';

// Типи для даних користувача
export interface UserState {
  email: string | null;
  phoneNumber: string | null;
  firstName: string | null;
  lastName: string | null;
  country: string | null;
  auctionNumber: string | null;
  verified: boolean;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: UserState = {
  email: null,
  phoneNumber: null,
  firstName: null,
  lastName: null,
  country: null,
  auctionNumber: null,
  verified: false,
  status: 'idle',
};

// Запит до API для отримання даних користувача
export const fetchUserData = createAsyncThunk(
  'user/fetchUserData',
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState() as SavingState;
      const token = state.auth.token;

      if (!token) {
        return rejectWithValue('No token found');
      }

      const response = await apiClient.get('/users/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || 'Error fetching user data',
      );
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUser: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        Object.assign(state, action.payload);
      })
      .addCase(fetchUserData.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;
