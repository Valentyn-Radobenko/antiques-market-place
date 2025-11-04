import { useOutletContext, useSearchParams } from 'react-router-dom';
import { ArrowTale } from '../../../components/Imgs/ArrowTale';
import { OutletContextType } from '../../../types/openMenuOtlet';
import { OrderType } from '../../../types/order';
import { Order } from './Order/Order';
import { NavSortSearch } from '../../../components/NavSortSearch/NavSortSearch';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { SavingState } from '../../../store/store';
import { BaseNavSort, BaseNavigation } from '../../../types/baseNavigation';
import { useEffect, useState } from 'react';

const pageNavigation: BaseNavigation[] = [
  {
    ua: 'Усі замовлення',
    en: 'All orders',
    slug: 'all-orders',
    mainOption: true,
  },
  {
    ua: 'Куплені',
    en: 'Purchased',
    slug: 'purchased',
  },
  {
    ua: 'Відправлені',
    en: 'Shipped',
    slug: 'shipped',
  },
  {
    ua: 'Отримані',
    en: 'Received',
    slug: 'received',
  },
  {
    ua: 'Скасовані',
    en: 'Cancelled',
    slug: 'cancelled',
  },
];
const sortings: BaseNavSort[] = [
  {
    id: '1',
    nameUa: 'За новизною',
    nameEn: 'By novelty',
    types: [
      {
        ua: 'Спочатку нові',
        en: 'Newest first',
        slug: 'newest-first',
      },
      {
        ua: 'Спочатку старі',
        en: 'Oldest first',
        slug: 'oldest-first',
      },
    ],
  },
  {
    id: '2',
    nameUa: 'За ціною',
    nameEn: 'By price',
    types: [
      {
        ua: 'Дорожчі',
        en: 'High price',
        slug: 'high-price',
      },
      {
        ua: 'Дешевші',
        en: 'Low price',
        slug: 'low-price',
      },
    ],
  },
];

const orders: OrderType[] = [
  {
    id: 1,
    status: 'purchased',
    deliveryStatus: 'Очікує відправки',
    orderDate: new Date('2025.01.05'),
    deliveryDate: new Date('2025.01.10'),
    payment: 'При отриманні',
    delivery: 'Нова пошта №74',
    recipient: 'Адндрій Мукалевич, Україна, Київ',
    items: [
      {
        id: 1253424234,

        img: [
          'images/expertise/Photo1.png',
          'images/expertise/Photo1.png',
          'images/expertise/Photo1.png',
        ],
        name: 'taler',
        price: 3180,
      },
      {
        id: 1233425234,

        img: [
          'images/expertise/Photo1.png',
          'images/expertise/Photo1.png',
          'images/expertise/Photo1.png',
        ],
        name: 'taler',
        price: 3180,
      },
      {
        id: 1253425234,
        img: [
          'images/expertise/Photo1.png',
          'images/expertise/Photo1.png',
          'images/expertise/Photo1.png',
        ],
        name: 'taler',
        price: 3180,
      },
    ],
  },
  {
    id: 2,
    status: 'shipped',
    deliveryStatus: 'Передано до перевізника',
    orderDate: new Date('2025.01.05'),
    deliveryDate: new Date('2025.01.10'),
    payment: 'При отриманні',
    delivery: 'Нова пошта №74',
    recipient: 'Адндрій Мукалевич, Україна, Київ',
    items: [
      {
        id: 124124124234,
        img: [
          'images/expertise/Photo1.png',
          'images/expertise/Photo1.png',
          'images/expertise/Photo1.png',
        ],
        name: 'taler',
        price: 3180,
      },
      {
        id: 1241241234,
        img: [
          'images/expertise/Photo1.png',
          'images/expertise/Photo1.png',
          'images/expertise/Photo1.png',
        ],
        name: 'taler',
        price: 3180,
      },
    ],
  },
  {
    id: 3,
    status: 'received',
    deliveryStatus: 'Доставлено',
    orderDate: new Date('2025.01.05'),
    deliveryDate: new Date('2025.01.10'),
    payment: 'При отриманні',
    delivery: 'Нова пошта №74',
    recipient: 'Адндрій Мукалевич, Україна, Київ',
    items: [
      {
        id: 1253421234,
        img: [
          'images/expertise/Photo1.png',
          'images/expertise/Photo1.png',
          'images/expertise/Photo1.png',
        ],
        name: 'taler',
        price: 3180,
      },
    ],
  },
  {
    id: 4,
    status: 'cancelled',
    orderDate: new Date('2025.01.05'),
    payment: 'При отриманні',
    delivery: 'Нова пошта №74',
    recipient: 'Адндрій Мукалевич, Україна, Київ',
    items: [
      {
        id: 1214241234,
        img: [
          'images/expertise/Photo1.png',
          'images/expertise/Photo1.png',
          'images/expertise/Photo1.png',
        ],
        name: 'taler',
        price: 3180,
      },
      {
        id: 12314241234,
        img: [
          'images/expertise/Photo1.png',
          'images/expertise/Photo1.png',
          'images/expertise/Photo1.png',
        ],
        name: 'taler',
        price: 3180,
      },
    ],
  },
];

export const Orders = () => {
  const [setOpenMenu] = useOutletContext<OutletContextType>();
  const [searchParams] = useSearchParams();
  const [ordersToShow, setOrdersToShow] = useState<OrderType[]>();
  const filterBy = searchParams.get('filterBy');
  const query = searchParams.get('query');
  const sortBy = searchParams.get('sortBy');

  useEffect(() => {
    if (orders) {
      let filtredOrders = [...orders];

      if (filterBy) {
        filtredOrders = filtredOrders.filter((a) => a.status === filterBy);
      }

      if (query) {
        filtredOrders = filtredOrders.filter((a) =>
          a.items.map((b) => b.name).includes(query),
        );
      }

      if (sortBy) {
        filtredOrders = [...filtredOrders].sort((a, b) => {
          switch (sortBy) {
            case 'newest-first':
              return +b.orderDate - +a.orderDate;
            case 'oldest-first':
              return +a.orderDate - +b.orderDate;
            case 'high-price':
              return (
                b.items.reduce((acc, curr) => acc + curr.price, 0) -
                a.items.reduce((acc, curr) => acc + curr.price, 0)
              );
            case 'low-price':
              return (
                a.items.reduce((acc, curr) => acc + curr.price, 0) -
                b.items.reduce((acc, curr) => acc + curr.price, 0)
              );
            default:
              return 0;
          }
        });
      }

      setOrdersToShow(filtredOrders);
    }
  }, [searchParams]);

  const { t } = useTranslation();
  const lang = useSelector((state: SavingState) => state.language.language);

  return (
    <>
      {lang === 'en' && (
        <div className="profile-page__section">
          <div className="profile-page__section-title">
            <ArrowTale
              onClick={() => {
                setOpenMenu(false);
              }}
              className="profile-page__section-arrow"
            />

            <h2 className="profile-page__section-h2">{t('no-translation')}</h2>
          </div>
        </div>
      )}

      {lang === 'ua' && (
        <div className="profile-page__section">
          <div className="profile-page__section-title">
            <ArrowTale
              onClick={() => {
                setOpenMenu(false);
              }}
              className="profile-page__section-arrow"
            />
            <h2 className="profile-page__section-h2">Замовлення</h2>
          </div>
          <NavSortSearch
            pageNavigation={pageNavigation}
            sortings={sortings}
          />
          <div className="orders__list">
            {ordersToShow &&
              ordersToShow.map((order) => (
                <Order
                  key={order.id}
                  order={order}
                />
              ))}
          </div>
        </div>
      )}
    </>
  );
};
