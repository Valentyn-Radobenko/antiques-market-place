import classNames from 'classnames';
import { Arrow } from '../../../../components/Imgs/Arrow';
import { OrderType } from '../../../../types/order';
import { OrdersSVG } from '../../../../components/Imgs/OrdersSVG';
import { BoxSVG } from '../../../../components/Imgs/BoxSVG';
import { HandsSVG } from '../../../../components/Imgs/HandsSVG';
import { useState } from 'react';
import { AccountSVG } from '../../../../components/Imgs/AccountSVG';
import { LocationSVG } from '../../../../components/Imgs/LocationSVG';
import { PaymentSVG } from '../../../../components/Imgs/paymentSVG';

type Props = {
  order: OrderType;
};

export const Order: React.FC<Props> = ({ order }) => {
  const [openDetailed, setOpenDetailed] = useState<boolean>(false);

  function formattedDate(date: Date) {
    return date.toLocaleDateString('uk', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }

  const statuses = {
    bought: order.status === 'Куплено',
    pending: order.status === 'Відправлено',
    delivered: order.status === 'Отримано',
    canseled: order.status === 'Скасовано',
  };

  return (
    <div className="order">
      <div className="order__info">
        <div className="order__title">
          <p className="order__name">Замовлення №{order.id}</p>
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
                    <p className="order__item-price">{item.price} грн</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="order__delivery">
            <div className="order__statuses">
              <p className={classNames('order__general-status', statuses)}>
                {order.status}
              </p>
              {order.status !== 'Скасовано' && (
                <div
                  className={classNames('order__progres', {
                    isActive: openDetailed,
                  })}
                >
                  <div className="order__svgs">
                    <OrdersSVG className={classNames('order__svg', statuses)} />
                    <BoxSVG
                      className={classNames('order__svg', {
                        pending: order.status === 'Відправлено',
                        delivered: order.status === 'Отримано',
                      })}
                    />
                    <HandsSVG
                      className={classNames('order__svg', {
                        delivered: order.status === 'Отримано',
                      })}
                    />
                  </div>
                  <div className="order__underline">
                    <p className={classNames('order__dot', statuses)} />
                    <p
                      className={classNames('order__line', {
                        pending: order.status === 'Відправлено',
                        delivered: order.status === 'Отримано',
                      })}
                    />
                    <p
                      className={classNames('order__dot', {
                        pending: order.status === 'Відправлено',
                        delivered: order.status === 'Отримано',
                      })}
                    />
                    <p
                      className={classNames('order__line', {
                        delivered: order.status === 'Отримано',
                      })}
                    />
                    <p
                      className={classNames('order__dot', {
                        delivered: order.status === 'Отримано',
                      })}
                    />
                  </div>
                </div>
              )}
              <p
                className={classNames(
                  'order__general-detailed-status',
                  statuses,
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
                      <PaymentSVG className="order__delivery-icon" />
                      <p className="order__delivery-status-name">Оплата:</p>
                    </div>
                    <p className="order__delivery-status-info">
                      {order.payment.type},{' '}
                      <span className="order__price-amount">
                        {order.items.reduce((acc, curr) => acc + curr.price, 0)}{' '}
                        грн
                      </span>{' '}
                    </p>
                  </div>
                </div>
                {order.status !== 'Скасовано' && (
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
