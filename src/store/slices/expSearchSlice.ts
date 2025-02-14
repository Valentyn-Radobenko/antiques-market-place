import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ExpSearchState {
  expSearch: boolean;
}

export const initialState: ExpSearchState = {
  expSearch: false,
};

const expSearchSlice = createSlice({
  name: 'expSearch',
  initialState,
  reducers: {
    setExpSearch: (state, action: PayloadAction<boolean>) => {
      state.expSearch = action.payload;
    },
  },
});

export const { setExpSearch } = expSearchSlice.actions;
export default expSearchSlice.reducer;
