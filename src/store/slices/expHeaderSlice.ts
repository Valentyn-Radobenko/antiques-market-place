import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { expandedModeType } from '../../types/expandedModeType';

export interface ExpHeaderState {
  expHeader: expandedModeType;
}

export const initialState: ExpHeaderState = {
  expHeader: null,
};

const expHeaderSlice = createSlice({
  name: 'extHeader',
  initialState,
  reducers: {
    setExpHeader: (state, action: PayloadAction<expandedModeType>) => {
      state.expHeader = action.payload;
    },
  },
});

export const { setExpHeader } = expHeaderSlice.actions;
export default expHeaderSlice.reducer;
