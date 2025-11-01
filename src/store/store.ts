import { configureStore } from '@reduxjs/toolkit';
import languageReducer, { LanguageState } from './slices/languageSlice';
import expHeaderReducer, { ExpHeaderState } from './slices/expHeaderSlice';
import currencyReducer, { CurrencyState } from './slices/currencySlice';
import authModeReducer, { AuthModeState } from './slices/authModeSlice';
import authReducer, { AuthState } from './slices/authSlice';
import userReducer from './slices/userSlice';
import expSearchReducer, { ExpSearchState } from './slices/expSearchSlice';
import menuReducer, { MenuState } from './slices/menuSlice';
import { saveState, loadState } from './../utils/localStorageUtils';
import { availableCurrencies } from '../data/availableCurrencies';
import { User } from '../types/user';
import { ShoppingCartState } from '../types/shoppingCart';
import shoppingCartReducer from './slices/shoppingCartSlice';

//
import discussionsReducer from './slices/discussionsSlice';
import { DiscussionData } from '../types/discussionTypes';

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
  user: User;
  menu: MenuState;
  shoppingCart: ShoppingCartState;
  discussions: DiscussionData[];
}

// Тип для стану який зберігається в локальній пам'яті
export interface SavingState {
  language: LanguageState;
  expHeader: ExpHeaderState;
  currency: CurrencyState;
  authMode: AuthModeState;
  auth: AuthState;
  expSearch: ExpSearchState;
  menu: MenuState;
  shoppingCart: ShoppingCartState;
  //
  // discussions: DiscussionData;
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
      menu: {
        isMenuOn:
          (
            persistedState.menu &&
            typeof persistedState.menu.isMenuOn === 'boolean'
          ) ?
            persistedState.menu.isMenuOn
          : false,
      },
      shoppingCart: {
        items:
          persistedState.shoppingCart && persistedState.shoppingCart.items ?
            persistedState.shoppingCart.items
          : [],
        selectedItems:
          (
            persistedState.shoppingCart &&
            persistedState.shoppingCart.selectedItems
          ) ?
            persistedState.shoppingCart.selectedItems
          : [],
        isCartOpen:
          (
            persistedState.shoppingCart &&
            persistedState.shoppingCart.isCartOpen
          ) ?
            persistedState.shoppingCart.isCartOpen
          : false,
        user:
          persistedState.shoppingCart && persistedState.shoppingCart.user ?
            persistedState.shoppingCart.user
          : {
              firstName: '',
              lastName: '',
              phone: '',
              email: '',
              country: '',
              city: '',
            },
        delivery:
          persistedState.shoppingCart && persistedState.shoppingCart.delivery ?
            persistedState.shoppingCart.delivery
          : {
              type: 'delivery',
              method: null,
              service: '',
              branch: '',
              street: '',
              house: '',
              apartment: '',
              receiver: {
                firstName: '',
                middleName: '',
                lastName: '',
                phone: '',
              },
            },
        payment:
          persistedState.shoppingCart && persistedState.shoppingCart.payment ?
            persistedState.shoppingCart.payment
          : {
              method: null,
            },
        orderStatus:
          (
            persistedState.shoppingCart &&
            persistedState.shoppingCart.orderStatus
          ) ?
            persistedState.shoppingCart.orderStatus
          : 'draft',
      },
    }
  : {
      language: { language: 'ua' },
      expHeader: { expHeader: null, expAuth: false },
      currency: { currency: 'UAH' },
      authMode: { authMode: null },
      auth: { token: null, isAuthenticated: false },
      expSearch: { expSearch: false },
      menu: { isMenuOn: false },
      shoppingCart: {
        items: [],
        selectedItems: [],
        isCartOpen: false,

        user: {
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          country: '',
          city: '',
        },

        delivery: {
          type: 'delivery',
          method: null,
          service: '',
          branch: '',
          street: '',
          house: '',
          apartment: '',
          receiver: {
            firstName: '',
            middleName: '',
            lastName: '',
            phone: '',
          },
        },

        payment: {
          method: null,
        },

        orderStatus: 'draft',
      },
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
    menu: menuReducer,
    shoppingCart: shoppingCartReducer,
    //
    discussions: discussionsReducer,
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
