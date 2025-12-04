export type OrderItemType = {
  id: number;
  img: string;
  name: string;
  price: number;
};

// export type PaymentStatusPurchased = {
//   name: 'Куплено';
//   slug: 'purchased';
// };
// export type PaymentStatusShipped = {
//   name: 'Відправлено';
//   slug: 'shipped';
// };
// export type PaymentStatusRecived = {
//   name: 'Отримано';
//   slug: 'received';
// };
// export type PaymentStatusCancelled = {
//   name: 'Скасовано';
//   slug: 'cancelled';
// };

export type OrderType = {
  id: number;
  status: 'purchased' | 'shipped' | 'received' | 'cancelled';
  deliveryStatus?: string;
  orderDate: Date;
  deliveryDate?: Date;
  payment: string;
  delivery: string;
  recipient: string;
  items: OrderItemType[];
};
