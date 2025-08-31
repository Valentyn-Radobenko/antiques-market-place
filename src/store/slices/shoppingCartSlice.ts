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
    updateUserFirstName(state, action: PayloadAction<string>) {
      state.user.firstName = action.payload;
    },
    updateUserLastName(state, action: PayloadAction<string>) {
      state.user.lastName = action.payload;
    },
    updateUserPhone(state, action: PayloadAction<string>) {
      state.user.phone = action.payload;
    },
    updateUserEmail(state, action: PayloadAction<string>) {
      state.user.email = action.payload;
    },
    updateUserCountry(state, action: PayloadAction<string>) {
      state.user.country = action.payload;
    },
    updateUserCity(state, action: PayloadAction<string>) {
      state.user.city = action.payload;
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
  updateUserFirstName,
  updateUserLastName,
  updateUserPhone,
  updateUserEmail,
  updateUserCountry,
  updateUserCity,
  updateDelivery,
  updatePayment,
} = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
