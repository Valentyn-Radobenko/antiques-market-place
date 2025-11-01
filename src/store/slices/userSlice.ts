/* eslint-disable @typescript-eslint/no-explicit-any */

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { SavingState } from '../store';
import apiClient from '../../utils/apiClient';
import { User } from '../../types/user';

// Типи для даних користувача

const initialState: User = {
  email: 'dukat.ua@gmail.com',
  phoneNumber: '+380503332222',
  firstName: 'Андрій',
  lastName: 'Містеряков',
  picture: './images/mainUser.png',
  country: 'Україна',
  city: 'Київ',
  auctionNumber: '+380503332222',
  verified: true,
  status: 'succeeded',
  id: '0001',
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
    updateUserField: (state: User, action: PayloadAction<Partial<User>>) => {
      Object.assign(state, action.payload);
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

export const { logoutUser, updateUserField } = userSlice.actions;
export default userSlice.reducer;
