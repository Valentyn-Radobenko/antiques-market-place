import { configureStore } from '@reduxjs/toolkit';
import languageReducer, { LanguageState } from './slices/languageSlice';
import { saveState, loadState } from './../utils/localStorageUtils';

// Завантажуємо стан з localStorage
const persistedState = loadState();

// Тип для кореневого стану
export interface RootState {
  language: LanguageState;
}

// Приведення стану до правильного типу
const validatedState: RootState =
  persistedState && persistedState.language ?
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
    }
  : { language: { language: 'ua' } };

// Створюємо store
const store = configureStore({
  reducer: {
    language: languageReducer, // Додаємо редюсер для мови
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
