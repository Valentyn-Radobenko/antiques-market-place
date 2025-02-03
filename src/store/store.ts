import { configureStore } from '@reduxjs/toolkit';
import languageReducer, { LanguageState } from './slices/languageSlice';
import expHeaderReducer, { ExpHeaderState } from './slices/expHeaderSlice';
import currencyReducer, { CurrencyState } from './slices/currencySlice';
import { saveState, loadState } from './../utils/localStorageUtils';
import { availableCurrencies } from '../data/availableCurrencies';
import authModeReducer, { AuthModeState } from './slices/authModeSlice';

// Завантажуємо стан з localStorage
const persistedState = loadState();

// Тип для кореневого стану
export interface RootState {
  language: LanguageState;
  expHeader: ExpHeaderState;
  currency: CurrencyState;
  authMode: AuthModeState;
}

// Приведення стану до правильного типу
const validatedState: RootState =
  persistedState && persistedState.language && persistedState.expHeader ?
    {
      language: {
        language:
          (
            persistedState.language.language === 'ua' ||
            persistedState.language.language === 'en'
          ) ?
            persistedState.language.language
          : 'ua', // Якщо значення не відповідає типу, використовуємо 'ua' за замовчуванням
      },
      expHeader: {
        expHeader:
          (
            persistedState.expHeader.expHeader === null ||
            persistedState.expHeader.expHeader === 'club' ||
            persistedState.expHeader.expHeader === 'questions' ||
            persistedState.expHeader.expHeader === 'currency' ||
            persistedState.expHeader.expHeader === 'account' ||
            persistedState.expHeader.expHeader === 'language'
          ) ?
            persistedState.expHeader.expHeader
          : null,
      },
      currency: {
        currency:
          (
            persistedState.currency &&
            availableCurrencies.includes(persistedState.currency.currency)
          ) ?
            persistedState.currency.currency
          : 'UAH',
      },
      authMode: {
        authMode:
          (
            persistedState.authMode.authMode === null ||
            persistedState.authMode.authMode === 'registration' ||
            persistedState.authMode.authMode === 'login' ||
            persistedState.authMode.authMode === 'forgotPassword'
          ) ?
            persistedState.authMode.authMode
          : null,
      },
    }
  : {
      language: { language: 'ua' },
      expHeader: { expHeader: null },
      currency: { currency: 'UAH' },
      authMode: { authMode: null },
    };

// Створюємо store
const store = configureStore({
  reducer: {
    language: languageReducer,
    expHeader: expHeaderReducer,
    currency: currencyReducer,
    authMode: authModeReducer,
    // Додаємо редюсер для мови
  },
  preloadedState: validatedState, // Використовуємо validatedState замість persistedState
});

// Підписуємось на зміни стану, щоб зберігати його в localStorage
store.subscribe(() => {
  saveState(store.getState());
});

// Типи для коректної роботи
export type AppDispatch = typeof store.dispatch;

export default store;
