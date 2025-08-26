import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ShoppingCartState } from '../../types/shoppingCart';
import { Product } from '../../types/product';

const initialState: ShoppingCartState = {
  items: [],
  selectedItems: [],
  isOpen: false,

  user: {
    firstName: '',
    lastName: '',
    phone: '',
    country: '',
    city: '',
  },

  delivery: {
    type: null,
    method: null,
    service: '',
    branch: '',
    street: '',
    house: '',
    apartment: '',
  },

  payment: {
    method: null,
    screenshot: '',
  },

  orderStatus: 'draft',
};

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    addItem(state, action: PayloadAction<Product>) {
      state.items.push(action.payload);
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    addSelectedItem(state, action: PayloadAction<Product>) {
      state.selectedItems.push(action.payload);
    },
    removeSelectedItem(state, action: PayloadAction<string>) {
      state.selectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload,
      );
    },
    updateUserInfo(state, action: PayloadAction<ShoppingCartState['user']>) {
      state.user = action.payload;
    },
    updateDelivery(
      state,
      action: PayloadAction<ShoppingCartState['delivery']>,
    ) {
      state.delivery = action.payload;
    },
    updatePayment(state, action: PayloadAction<ShoppingCartState['payment']>) {
      state.payment = action.payload;
    },
  },
});

export const {
  setIsOpen,
  addItem,
  removeItem,
  addSelectedItem,
  removeSelectedItem,
  updateUserInfo,
  updateDelivery,
  updatePayment,
} = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
