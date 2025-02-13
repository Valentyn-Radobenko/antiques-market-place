import { configureStore } from '@reduxjs/toolkit';
import languageReducer, { LanguageState } from './slices/languageSlice';
import expHeaderReducer, { ExpHeaderState } from './slices/expHeaderSlice';
import currencyReducer, { CurrencyState } from './slices/currencySlice';
import authModeReducer, { AuthModeState } from './slices/authModeSlice';
import authReducer, { AuthState } from './slices/authSlice';
import userReducer, { UserState } from './slices/userSlice';
import expSearchReducer, { ExpSearchState } from './slices/expSearchSlice';
import { saveState, loadState } from './../utils/localStorageUtils';
import { availableCurrencies } from '../data/availableCurrencies';

// Завантажуємо стан з localStorage
const persistedState = loadState();

// Тип для кореневого стану (дані юзера не зберігаються локально)
export interface RootState {
  language: LanguageState;
  expHeader: ExpHeaderState;
  currency: CurrencyState;
  authMode: AuthModeState;
  auth: AuthState;
  expSearch: ExpSearchState;
  user: UserState;
}

// Тип для стану який зберігається в локальній пам'яті
export interface SavingState {
  language: LanguageState;
  expHeader: ExpHeaderState;
  currency: CurrencyState;
  authMode: AuthModeState;
  auth: AuthState;
  expSearch: ExpSearchState;
}

// Приведення стану до правильного типу
const validatedState: SavingState =
  persistedState && persistedState.language && persistedState.expHeader ?
    {
      language: {
        language:
          (
            persistedState.language.language === 'ua' ||
            persistedState.language.language === 'en'
          ) ?
            persistedState.language.language
          : 'ua',
      },
      expHeader: {
        expHeader:
          (
            persistedState.expHeader.expHeader === null ||
            persistedState.expHeader.expHeader === 'club' ||
            persistedState.expHeader.expHeader === 'questions' ||
            persistedState.expHeader.expHeader === 'currency' ||
            persistedState.expHeader.expHeader === 'account'
          ) ?
            persistedState.expHeader.expHeader
          : null,
        expAuth:
          (
            persistedState.expHeader &&
            typeof persistedState.expHeader.expAuth === 'boolean'
          ) ?
            persistedState.expHeader.expAuth
          : false,
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
      auth: {
        token:
          (
            typeof persistedState.auth.token === 'string' ||
            persistedState.auth.token === null
          ) ?
            persistedState.auth.token
          : null,
        isAuthenticated:
          (
            persistedState.auth &&
            typeof persistedState.auth.isAuthenticated === 'boolean'
          ) ?
            persistedState.auth.isAuthenticated
          : false,
      },
      expSearch: {
        expSearch:
          (
            persistedState.expSearch &&
            typeof persistedState.expSearch.expSearch === 'boolean'
          ) ?
            persistedState.expSearch.expSearch
          : false,
      },
    }
  : {
      language: { language: 'ua' },
      expHeader: { expHeader: null, expAuth: false },
      currency: { currency: 'UAH' },
      authMode: { authMode: null },
      auth: { token: null, isAuthenticated: false },
      expSearch: { expSearch: false },
    };

// Створюємо store
const store = configureStore({
  reducer: {
    language: languageReducer,
    expHeader: expHeaderReducer,
    currency: currencyReducer,
    authMode: authModeReducer,
    auth: authReducer,
    user: userReducer,
    expSearch: expSearchReducer,
    // Додаємо редюсери тут
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
