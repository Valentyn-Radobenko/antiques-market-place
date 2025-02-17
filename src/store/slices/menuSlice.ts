import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MenuState {
  isMenuOn: boolean;
}

export const initialState: MenuState = {
  isMenuOn: false,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setIsMenuOn: (state, action: PayloadAction<boolean>) => {
      state.isMenuOn = action.payload;
    },
  },
});

export const { setIsMenuOn } = menuSlice.actions;
export default menuSlice.reducer;
