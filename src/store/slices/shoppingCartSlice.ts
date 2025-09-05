import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ShoppingCartState } from '../../types/shoppingCart';
import { Product } from '../../types/Product';

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
    receiver: {
      firstName: '',
      middleName: '',
      lastName: '',
      phone: '',
    },
  },

  payment: {
    method: null,
    screenshots: [],
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
    updateDeliveryType(state, action: PayloadAction<'delivery' | 'pickup'>) {
      state.delivery.type = action.payload;
    },
    updateDeliveryMethod(state, action: PayloadAction<'post' | 'courier'>) {
      state.delivery.method = action.payload;
    },
    updateDeliveryService(state, action: PayloadAction<string>) {
      state.delivery.service = action.payload;
    },
    updateDeliveryBranch(state, action: PayloadAction<string>) {
      state.delivery.branch = action.payload;
    },
    updateDeliveryStreet(state, action: PayloadAction<string>) {
      state.delivery.street = action.payload;
    },
    updateDeliveryHouse(state, action: PayloadAction<string>) {
      state.delivery.house = action.payload;
    },
    updateDeliveryApartment(state, action: PayloadAction<string>) {
      state.delivery.apartment = action.payload;
    },
    updateReceiverFirstName(state, action: PayloadAction<string>) {
      state.delivery.receiver.firstName = action.payload;
    },
    updateReceiverMiddleName(state, action: PayloadAction<string>) {
      state.delivery.receiver.middleName = action.payload;
    },
    updateReceiverLastName(state, action: PayloadAction<string>) {
      state.delivery.receiver.lastName = action.payload;
    },
    updateReceiverPhone(state, action: PayloadAction<string>) {
      state.delivery.receiver.phone = action.payload;
    },
    updatePayment(state, action: PayloadAction<ShoppingCartState['payment']>) {
      state.payment = action.payload;
    },
    updatePaymentMethod(
      state,
      action: PayloadAction<
        'onReceipt' | 'international' | 'internal' | 'cash'
      >,
    ) {
      state.payment.method = action.payload;
    },
    addPaymentScreenshots(state, action: PayloadAction<File>) {
      state.payment.screenshots.push(action.payload);
    },
    updatePaymentScreenshots(state, action: PayloadAction<File[]>) {
      state.payment.screenshots = [...action.payload];
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
  updateDeliveryType,
  updateDeliveryMethod,
  updateDeliveryService,
  updateDeliveryBranch,
  updateDeliveryStreet,
  updateDeliveryHouse,
  updateDeliveryApartment,
  updateReceiverFirstName,
  updateReceiverMiddleName,
  updateReceiverLastName,
  updateReceiverPhone,
  updatePayment,
  updatePaymentMethod,
  addPaymentScreenshots,
  updatePaymentScreenshots,
} = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
