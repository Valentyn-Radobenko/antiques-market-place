export type OrderItemType = {
  id: number;
  img: string[];
  name: string;
  price: number;
};

export type PaymentType = {
  type: string;
  price: number;
};

export type OrderType = {
  id: number;
  status: 'Куплено' | 'Відправлено' | 'Отримано' | 'Скасовано';
  deliveryStatus?: string;
  orderDate: Date;
  deliveryDate?: Date;
  payment: PaymentType;
  delivery: string;
  recipient: string;
  items: OrderItemType[];
};
