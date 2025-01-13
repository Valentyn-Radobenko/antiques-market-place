import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LanguageState {
  language: 'ua' | 'en';
}

export const initialState: LanguageState = {
  language: 'ua',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<'ua' | 'en'>) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
