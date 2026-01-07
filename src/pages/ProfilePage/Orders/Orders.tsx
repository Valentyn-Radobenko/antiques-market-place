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
    orderDate: new Date('2025-01-05T00:00:00'),
    deliveryDate: new Date('2025-01-10T00:00:00'),
    payment: 'При отриманні',
    delivery: 'Нова пошта №74',
    recipient: 'Андрій Містеряков, Україна, Київ',
    items: [
      {
        id: 1253424234,
        img: 'images/product/1002.jpg',
        name: 'Монета (9900123456) Продавець: DIKO',
        price: 2000,
      },
      {
        id: 1233425234,
        img: 'images/product/000001R.jpg',
        name: 'Монета (9900123477) Продавець: DIKO',
        price: 2500,
      },
      {
        id: 1253425234,
        img: 'images/product/000004A.jpg',
        name: 'Монета (9900123499) Продавець: DIKO',
        price: 3580,
      },
    ],
  },
  {
    id: 2,
    status: 'shipped',
    deliveryStatus: 'Передано до перевізника',
    orderDate: new Date('2025-01-05T00:00:00'),
    deliveryDate: new Date('2025-01-10T00:00:00'),
    payment: 'При отриманні',
    delivery: 'Нова пошта №74',
    recipient: 'Андрій Містеряков, Україна, Київ',
    items: [
      {
        id: 124124124234,
        img: 'images/product/000005A.jpg',
        name: 'Монета (8800456123) Продавець: DIKO',
        price: 2200,
      },
      {
        id: 1241241234,
        img: 'images/product/000006A.jpg',
        name: 'Монета (8800456144) Продавець: DIKO',
        price: 4500,
      },
    ],
  },
  {
    id: 3,
    status: 'received',
    deliveryStatus: 'Доставлено',
    orderDate: new Date('2025-01-05T00:00:00'),
    deliveryDate: new Date('2025-01-10T00:00:00'),
    payment: 'При отриманні',
    delivery: 'Нова пошта №74',
    recipient: 'Андрій Містеряков, Україна, Київ',
    items: [
      {
        id: 1253421234,
        img: 'images/product/1004.jpg',
        name: 'Монета (5500789123) Продавець: DIKO',
        price: 3180,
      },
    ],
  },
  {
    id: 4,
    status: 'cancelled',
    orderDate: new Date('2025-01-05T00:00:00'),
    payment: 'При отриманні',
    delivery: 'Нова пошта №74',
    recipient: 'Андрій Містеряков, Україна, Київ',
    items: [
      {
        id: 1214241234,
        img: 'images/product/1003.jpg',
        name: 'Монета (7700661122) Продавець: DIKO',
        price: 2100,
      },
      {
        id: 12314241234,
        img: 'images/product/1004.jpg',
        name: 'Монета (7700661188) Продавець: DIKO',
        price: 1800,
      },
    ],
  },
];

export const Orders = () => {
  const [setOpenMenu] = useOutletContext<OutletContextType>();
  const [searchParams] = useSearchParams();
  const [ordersToShow, setOrdersToShow] = useState<OrderType[]>([]);
  const [filtredOrders, setFiltredOrders] = useState<OrderType[]>([]);
  const filterBy = searchParams.get('filterBy');
  const query = searchParams.get('query');
  const sortBy = searchParams.get('sortBy');

  useEffect(() => {
    setOrdersToShow(orders);
  }, []);

  useEffect(() => {
    if (ordersToShow) {
      let newFiltredOrders = [...ordersToShow];

      if (filterBy) {
        newFiltredOrders = newFiltredOrders.filter(
          (a) => a.status === filterBy,
        );
      }

      if (query) {
        newFiltredOrders = newFiltredOrders.filter((a) =>
          a.items.find((b) =>
            b.name.toLowerCase().includes(query.toLowerCase()),
          ),
        );
      }

      if (sortBy) {
        newFiltredOrders = [...newFiltredOrders].sort((a, b) => {
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

      setFiltredOrders(newFiltredOrders);
    }
  }, [searchParams, ordersToShow]);

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
            {filtredOrders && filtredOrders.length > 0 ?
              filtredOrders.map((order) => (
                <Order
                  key={order.id}
                  order={order}
                  setOrdersToShow={setOrdersToShow}
                />
              ))
            : <div className="items__no-items-wrapper">
                <div className="items__no-items hidden reveal">
                  <div className="items__text-block">
                    <div className="items__text-block-2">
                      <p className="items__yikes">
                        {t('no-content__block-top-text')}
                      </p>
                      <p className="items__main-text-no-items">
                        {t('items__main-text-no-items')}
                      </p>
                    </div>

                    <p className="items__hint-noitems desk-tab">
                      {t('items__hint-noitems')}
                    </p>
                  </div>
                  <img
                    className="items__img"
                    src="images/no-items.png"
                    alt=""
                  />
                </div>
                <p className="items__hint-noitems phone">
                  {t('items__hint-noitems')}
                </p>
              </div>
            }
          </div>
        </div>
      )}
    </>
  );
};
