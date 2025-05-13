import { useOutletContext } from 'react-router-dom';
import { ArrowTale } from '../../../components/Imgs/ArrowTale';
import { OutletContextType } from '../../../types/openMenuOtlet';
import { SearchSVG } from '../../../components/Imgs/SearchSVG';
import { Arrow } from '../../../components/Imgs/Arrow';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { SortSVG } from '../../../components/Imgs/SortSVG';
import { CheckboxRound } from '../../../components/Imgs/CheckboxRound';
import SimpleBar from 'simplebar-react';
import { OrderType } from '../../../types/order';
import { Order } from './Order/Order';

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
    deliveryStatus: 'waiting to be send',
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
          '../images/expertise/Photo1.png',
          '../images/expertise/Photo1.png',
          '../images/expertise/Photo1.png',
        ],
        name: 'taler',
        price: 3180,
      },
      {
        id: 1233425234,

        img: [
          '../images/expertise/Photo1.png',
          '../images/expertise/Photo1.png',
          '../images/expertise/Photo1.png',
        ],
        name: 'taler',
        price: 3180,
      },
      {
        id: 1253425234,
        img: [
          '../images/expertise/Photo1.png',
          '../images/expertise/Photo1.png',
          '../images/expertise/Photo1.png',
        ],
        name: 'taler',
        price: 3180,
      },
    ],
  },
  {
    id: 2,
    status: 'Відправлено',
    deliveryStatus: 'sended',
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
          '../images/expertise/Photo1.png',
          '../images/expertise/Photo1.png',
          '../images/expertise/Photo1.png',
        ],
        name: 'taler',
        price: 3180,
      },
      {
        id: 1241241234,
        img: [
          '../images/expertise/Photo1.png',
          '../images/expertise/Photo1.png',
          '../images/expertise/Photo1.png',
        ],
        name: 'taler',
        price: 3180,
      },
    ],
  },
  {
    id: 3,
    status: 'Отримано',
    deliveryStatus: 'delivered',
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
          '../images/expertise/Photo1.png',
          '../images/expertise/Photo1.png',
          '../images/expertise/Photo1.png',
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
          '../images/expertise/Photo1.png',
          '../images/expertise/Photo1.png',
          '../images/expertise/Photo1.png',
        ],
        name: 'taler',
        price: 3180,
      },
      {
        id: 12314241234,
        img: [
          '../images/expertise/Photo1.png',
          '../images/expertise/Photo1.png',
          '../images/expertise/Photo1.png',
        ],
        name: 'taler',
        price: 3180,
      },
    ],
  },
];

export const Orders = () => {
  const [setOpenMenu] = useOutletContext<OutletContextType>();
  const [activeInput, setActiveInput] = useState<boolean>(false);
  const [activeSortings, setActiveSortings] = useState(false);
  const [activeSortType, setActiveSortType] = useState<null | number>(null);
  const [currentHeight, setCurrentHeight] = useState<number>(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current?.clientHeight) {
      setCurrentHeight(ref.current?.clientHeight);
    }
  }, [activeSortType]);

  return (
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

      <div className="orders__navigation">
        <SimpleBar className="orders__wrapper-filters">
          <div className="orders__filters">
            <p className="orders__filter isActive">Усі замовлення</p>
            <p className="orders__filter">Куплені</p>
            <p className="orders__filter">Відправлені</p>
            <p className="orders__filter">Отримані</p>
            <p className="orders__filter">Скасовні</p>
          </div>
        </SimpleBar>

        <div
          className={classNames('orders__search-sorting', {
            isActive: activeInput,
          })}
        >
          <div
            className={classNames('orders__search', {
              isActive: activeInput,
            })}
          >
            <SearchSVG className="orders__search-svg" />
            <input
              onBlur={() => setActiveInput(false)}
              onFocus={() => setActiveInput(true)}
              placeholder="Пошук товару"
              type="text"
              className="orders__input"
            />
          </div>
          <button
            className={classNames('orders__search-button', {
              isActive: activeInput,
            })}
          >
            Знайти
          </button>
          <div
            className={classNames('orders__sorting', {
              isActive: !activeInput,
            })}
          >
            <button
              onClick={() => setActiveSortings(!activeSortings)}
              className={classNames('orders__sorting-button', {
                isActive: activeSortings,
              })}
            >
              <SortSVG className="orders__sort-search" />
              <h4 className="orders__sort-text">Сортування</h4>
              <Arrow
                className={classNames('orders__sort-arrow', {
                  isActive: activeSortings,
                })}
              />
            </button>

            <div
              className={classNames('orders__sort-list', {
                isActive: activeSortings,
              })}
            >
              {sortings.map((a) => (
                <div
                  key={a.id}
                  className="orders__sort-list-item"
                >
                  <div
                    className={classNames('orders__item-title', {
                      isActive: a.id === activeSortType,
                    })}
                    onClick={() =>
                      setActiveSortType(a.id === activeSortType ? null : a.id)
                    }
                  >
                    <p className="orders__item-name">{a.name}</p>
                    <Arrow
                      className={classNames('orders__item-sort-arrow', {
                        isActive: a.id === activeSortType,
                      })}
                    />
                  </div>
                  <div
                    style={{
                      height: activeSortType === a.id ? currentHeight : 0,
                    }}
                    className={classNames('orders__list-item-container', {
                      isActive: activeSortType === a.id,
                    })}
                  >
                    <div
                      ref={ref}
                      className="orders__list-item-items"
                    >
                      {a.types.map((b) => (
                        <div
                          key={b}
                          className="orders__list-item-item"
                        >
                          <p>{b}</p>
                          <CheckboxRound value="defoult" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="orders__list">
        {orders.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
};
