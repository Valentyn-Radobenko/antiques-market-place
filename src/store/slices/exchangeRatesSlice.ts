import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { localRates } from '../../data/localRates';

export interface ExchangeRatesState {
  rates: Record<string, number>;
  lastUpdated: string | null;
}

const initialState: ExchangeRatesState = {
  rates: localRates,
  lastUpdated: new Date().toISOString(),
};

const exchangeRatesSlice = createSlice({
  name: 'exchangeRates',
  initialState,
  reducers: {
    setRates(state, action: PayloadAction<Record<string, number>>) {
      state.rates = action.payload;
      state.lastUpdated = new Date().toISOString();
    },
    setRate(state, action: PayloadAction<{ cur: string; value: number }>) {
      state.rates[action.payload.cur] = action.payload.value;
      state.lastUpdated = new Date().toISOString();
    },
  },
});

export const { setRates, setRate } = exchangeRatesSlice.actions;
export default exchangeRatesSlice.reducer;
