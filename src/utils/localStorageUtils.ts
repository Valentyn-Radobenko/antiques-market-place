import { SavingState } from '../store/store';

// Функція для збереження стану в localStorage
export const saveState = (state: SavingState): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (err) {
    console.error('Error saving state:', err);
  }
};

// Функція для завантаження стану з localStorage
export const loadState = (): SavingState | undefined => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState) as SavingState;
  } catch (err) {
    console.error('Error loading state:', err);
    return undefined;
  }
};
