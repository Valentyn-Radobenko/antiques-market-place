import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { expandedModeType } from '../../types/expandedModeType';

export interface ExpHeaderState {
  expHeader: expandedModeType;
  expAuth: boolean;
}

export const initialState: ExpHeaderState = {
  expHeader: null,
  expAuth: false,
};

const expHeaderSlice = createSlice({
  name: 'extHeader',
  initialState,
  reducers: {
    setExpHeader: (state, action: PayloadAction<expandedModeType>) => {
      state.expHeader = action.payload;
    },
    setExpAuth: (state, action: PayloadAction<boolean>) => {
      state.expAuth = action.payload;
    },
  },
});

export const { setExpHeader } = expHeaderSlice.actions;
export default expHeaderSlice.reducer;
