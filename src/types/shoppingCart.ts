import { Product as product } from './product';

export interface ShoppingCartState {
  items: product[];
  selectedItems: product[];
  isOpen: boolean;

  user: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    country: string;
    city: string;
  };

  delivery: {
    type: 'pickup' | 'delivery'; // самовивіз зі складу чи доставка
    method?: 'post' | 'courier' | null; // для доставки
    service?: string; // служба доставки
    branch?: string; // номер відділення (якщо поштою)
    street?: string; // якщо courier
    house?: string;
    apartment?: string;
  };

  payment: {
    method: 'onReceipt' | 'international' | 'internal' | 'cash' | null;
    screenshot?: string;
  };

  orderStatus: 'draft' | 'confirmed' | 'completed';
}
