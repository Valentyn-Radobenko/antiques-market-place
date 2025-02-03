import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { currencyType } from '../../types/currencyType';

export interface CurrencyState {
  currency: currencyType;
}

export const initialState: CurrencyState = {
  currency: 'UAH',
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<currencyType>) => {
      state.currency = action.payload;
    },
  },
});

export const { setCurrency } = currencySlice.actions;
export default currencySlice.reducer;
