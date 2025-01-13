import { RootState } from '../store/store';

// Функція для збереження стану в localStorage
export const saveState = (state: RootState): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (err) {
    console.error('Error saving state:', err);
  }
};

// Функція для завантаження стану з localStorage
export const loadState = (): RootState | undefined => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState) as RootState;
  } catch (err) {
    console.error('Error loading state:', err);
    return undefined;
  }
};
