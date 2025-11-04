import classNames from 'classnames';
import { Arrow } from '../../../../components/Imgs/Arrow';
import { OrderType } from '../../../../types/order';
import { OrdersSVG } from '../../../../components/Imgs/OrdersSVG';
import { BoxSVG } from '../../../../components/Imgs/BoxSVG';
import { HandsSVG } from '../../../../components/Imgs/HandsSVG';
import { useState } from 'react';
import { AccountSVG } from '../../../../components/Imgs/AccountSVG';
import { LocationSVG } from '../../../../components/Imgs/LocationSVG';
import { CreditCardSVG } from '../../../../components/Imgs/CreditCardSVG';
import { useCurrency } from '../../../../hooks/useCurrency';

type Props = {
  order: OrderType;
};

export const Order: React.FC<Props> = ({ order }) => {
  const [openDetailed, setOpenDetailed] = useState<boolean>(false);

  function formattedDate(date: Date): string {
    const formatter = new Intl.DateTimeFormat('uk-UA', {
      day: 'numeric',
      month: 'long',
      hour: '2-digit',
      minute: '2-digit',
      year: 'numeric',
    });

    const parts = formatter.formatToParts(date);
    const day = parts.find((p) => p.type === 'day')?.value ?? '';
    const month = parts.find((p) => p.type === 'month')?.value ?? '';
    const year = parts.find((p) => p.type === 'year')?.value ?? '';

    return `${day} ${month} ${year}`;
  }

  const orderStatus = {
    purchased: {
      ua: 'куплено',
      en: 'purchased',
    },
    shipped: {
      ua: 'відпарвлено',
      en: 'shipped',
    },
    received: {
      ua: 'отримано',
      en: 'received',
    },
    cancelled: {
      ua: 'скаслвано',
      en: 'cancelled',
    },
  };

  const { formatPrice } = useCurrency();
  const status = orderStatus[order.status];

  return (
    <div className="order">
      <div className="order__info">
        <div className="order__title">
          <p className={classNames('order__name', status.en)}>
            Замовлення №{order.id}
          </p>
          <Arrow
            onClick={() => setOpenDetailed(!openDetailed)}
            className={classNames('order__arrow', {
              isActive: openDetailed,
            })}
          />
        </div>
        <div
          className={classNames('order__general-info', {
            isActive: openDetailed,
          })}
        >
          <div
            className={classNames('order__items', {
              isActive: openDetailed,
            })}
          >
            {order.items.map((item) => (
              <div
                className={classNames('order__item-block', {
                  isActive: openDetailed,
                })}
                key={item.id}
              >
                <img
                  className={classNames('order__item-img', {
                    isActive: openDetailed,
                  })}
                  src={item.img[0]}
                  alt="#"
                />
                {openDetailed && (
                  <div className="order__item-info">
                    <p className="order__item-name">{item.name}</p>
                    <p className="order__item-price">
                      {formatPrice(item.price)}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="order__delivery">
            <div className="order__status">
              <p className={classNames('order__general-status', status.en)}>
                {status.ua}
              </p>
              {status.en !== 'cancelled' && (
                <div
                  className={classNames('order__progres', {
                    isActive: openDetailed,
                  })}
                >
                  <div className="order__svgs">
                    <OrdersSVG
                      className={classNames('order__svg', status.en)}
                    />
                    <BoxSVG
                      className={classNames('order__svg', {
                        pending: status.en === 'shipped',
                        delivered: status.en === 'received',
                      })}
                    />
                    <HandsSVG
                      className={classNames('order__svg', {
                        delivered: status.en === 'received',
                      })}
                    />
                  </div>
                  <div className="order__underline">
                    <p className={classNames('order__dot', status.en)} />
                    <p
                      className={classNames('order__line', {
                        pending: status.en === 'shipped',
                        delivered: status.en === 'received',
                      })}
                    />
                    <p
                      className={classNames('order__dot', {
                        pending: status.en === 'shipped',
                        delivered: status.en === 'received',
                      })}
                    />
                    <p
                      className={classNames('order__line', {
                        delivered: status.en === 'received',
                      })}
                    />
                    <p
                      className={classNames('order__dot', {
                        delivered: status.en === 'received',
                      })}
                    />
                  </div>
                </div>
              )}
              <p
                className={classNames(
                  'order__general-detailed-status',
                  status.en,
                )}
              >
                {order.deliveryStatus}
              </p>
            </div>
            {openDetailed && (
              <div className="order__delivery-info-cancel">
                <div className="order__delivery-info">
                  <div className="order__delivery-item">
                    <div className="order__delivery-status">
                      <AccountSVG className="order__delivery-icon" />
                      <p className="order__delivery-status-name">Ортимувач:</p>
                    </div>
                    <p className="order__delivery-status-info">
                      {order.recipient}
                    </p>
                  </div>
                  <div className="order__delivery-item">
                    <div className="order__delivery-status">
                      <LocationSVG className="order__delivery-icon" />
                      <p className="order__delivery-status-name">Достава:</p>
                    </div>
                    <p className="order__delivery-status-info">
                      Самовивіз з пошти,{' '}
                      <span className="order__delivery-lock">
                        {order.delivery}
                      </span>{' '}
                    </p>
                  </div>
                  <div className="order__delivery-item">
                    <div className="order__delivery-status">
                      <CreditCardSVG className="order__delivery-icon" />
                      <p className="order__delivery-status-name">Оплата:</p>
                    </div>
                    <p className="order__delivery-status-info">
                      {order.payment},{' '}
                      <span className="order__price-amount">
                        {formatPrice(
                          order.items.reduce(
                            (acc, curr) => acc + curr.price,
                            0,
                          ),
                        )}
                      </span>{' '}
                    </p>
                  </div>
                </div>
                {status.en !== 'cancelled' && (
                  <button className="order__cancel">Скасувати</button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="order__delivery-time">
        <p className="order__start-date">
          від {formattedDate(order.orderDate)}
        </p>
        {order.deliveryDate && (
          <p className="order__end-date">
            до {formattedDate(order.deliveryDate)}
          </p>
        )}
      </div>
    </div>
  );
};
