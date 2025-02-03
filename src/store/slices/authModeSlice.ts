import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authModeType } from '../../types/authModeType';

export interface AuthModeState {
  authMode: authModeType;
}

export const initialState: AuthModeState = {
  authMode: null,
};

const authModeSlice = createSlice({
  name: 'authMode',
  initialState,
  reducers: {
    setAuthMode: (state, action: PayloadAction<authModeType>) => {
      state.authMode = action.payload;
    },
  },
});

export const { setAuthMode } = authModeSlice.actions;
export default authModeSlice.reducer;
