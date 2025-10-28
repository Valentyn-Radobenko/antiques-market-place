import { useOutletContext } from 'react-router-dom';
import { ArrowTale } from '../../../components/Imgs/ArrowTale';
import { OutletContextType } from '../../../types/openMenuOtlet';
import { OrderType } from '../../../types/order';
import { Order } from './Order/Order';
import { NavSortSearch } from '../../../components/NavSortSearch/NavSortSearch';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { SavingState } from '../../../store/store';

const pageNavigation = [
  'Усі замовлення',
  'Куплені',
  'Відправлені',
  'Отримані',
  'Скасовані',
];
const sortings = [
  {
    id: 1,
    name: 'За новизною',
    types: ['Спочатку нові', 'Спочатку старі'],
  },
  {
    id: 2,
    name: 'За популярністю',
    types: ['Більш популярні', 'Меньш Популярні'],
  },
  {
    id: 3,
    name: 'За чимось',
    types: ['Більш популярні', 'Меньш Популярні'],
  },
  {
    id: 4,
    name: 'За тимось',
    types: ['Більш популярні', 'Меньш Популярні'],
  },
];

const orders: OrderType[] = [
  {
    id: 1,
    status: 'Куплено',
    deliveryStatus: 'Очікує відправки',
    orderDate: new Date('2025.01.05'),
    deliveryDate: new Date('2025.01.10'),
    payment: {
      type: 'При отриманні',
      price: 8000,
    },
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
    status: 'Відправлено',
    deliveryStatus: 'Передано до перевізника',
    orderDate: new Date('2025.01.05'),
    deliveryDate: new Date('2025.01.10'),
    payment: {
      type: 'При отриманні',
      price: 8000,
    },
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
    status: 'Отримано',
    deliveryStatus: 'Доставлено',
    orderDate: new Date('2025.01.05'),
    deliveryDate: new Date('2025.01.10'),
    payment: {
      type: 'При отриманні',
      price: 8000,
    },
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
    status: 'Скасовано',
    orderDate: new Date('2025.01.05'),
    payment: {
      type: 'При отриманні',
      price: 8000,
    },
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

  const { t } = useTranslation();
  const lang = useSelector((state: SavingState) => state.language.language);

  return (
    <>
      {lang === 'en' && (
        <div className="profile-page__section">
          <h2 className="profile-page__section-h2">{t('no-translation')}</h2>
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
            {orders.map((order) => (
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
