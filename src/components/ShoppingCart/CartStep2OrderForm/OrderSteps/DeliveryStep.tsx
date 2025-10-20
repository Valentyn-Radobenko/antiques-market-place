import { useDispatch, useSelector } from 'react-redux';
import { useIsMobile } from '../../../../hooks/useMediaQuery';
import { AppDispatch, SavingState } from '../../../../store/store';
import { ArrowBackSVG } from '../../../Imgs/ArrowBackSVG';
import React from 'react';
import classNames from 'classnames';
import {
  updateDeliveryApartment,
  updateDeliveryBranch,
  updateDeliveryHouse,
  updateDeliveryMethod,
  updateDeliveryService,
  updateDeliveryStreet,
  updateDeliveryType,
  updateReceiverFirstName,
  updateReceiverLastName,
  updateReceiverMiddleName,
  updateReceiverPhone,
  updateUserEmail,
  updateUserFirstName,
  updateUserLastName,
  updateUserPhone,
} from '../../../../store/slices/shoppingCartSlice';
import { Dropdown } from '../../../Dropdown/Dropdown';
import { CheckboxRound } from '../../../Imgs/CheckBoxRound/CheckBoxRound';
import { InkHighlighterSVG } from '../../../Imgs/InkHighlighterSVG';
import { Link } from 'react-router-dom';
import { LocationSVG } from '../../../Imgs/LocationSVG';
import { MapSearchSVG } from '../../../Imgs/MapSearchSVG';
import { NestClockSVG } from '../../../Imgs/NestClockSVG';

type Props = {
  setOrderStep: React.Dispatch<React.SetStateAction<number>>;
  areErrorsOn: boolean;
};

export const DeliveryStep: React.FC<Props> = ({
  setOrderStep,
  areErrorsOn,
}) => {
  const isPhone = useIsMobile();
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state: SavingState) => state.shoppingCart);

  return (
    <div className="shopping-cart__order-block">
      <div className="shopping-cart__order-block-top">
        {isPhone ?
          <div className="shopping-cart__order-block-heading">
            <ArrowBackSVG
              onClick={() => setOrderStep(2)}
              className="shopping-cart__order-block-back-button"
            />
            <h3 className="shopping-cart__order-block-title">Отримання</h3>
          </div>
        : <h3 className="shopping-cart__order-block-title">Отримання</h3>}
        <p className="shopping-cart__order-block-step">
          3<span className="shopping-cart__order-block-steps">/5</span>
        </p>
      </div>
      <div className="shopping-cart__order-block-receiving-nav">
        <div
          className={classNames(
            'shopping-cart__order-block-receiving-nav-section',
            {
              'shopping-cart__order-block-receiving-nav-section--inactive':
                cart.delivery.type === 'pickup',
              'shopping-cart__order-block-receiving-nav-section--active':
                cart.delivery.type === 'delivery',
            },
          )}
          onClick={() => {
            dispatch(updateDeliveryType('delivery'));
          }}
        >
          Доставка
        </div>
        <div
          className={classNames(
            'shopping-cart__order-block-receiving-nav-section',
            {
              'shopping-cart__order-block-receiving-nav-section--active':
                cart.delivery.type === 'pickup',
              'shopping-cart__order-block-receiving-nav-section--inactive':
                cart.delivery.type === 'delivery',
            },
          )}
          onClick={() => {
            dispatch(updateDeliveryType('pickup'));
          }}
        >
          Самовивіз з складу
        </div>
      </div>

      {cart.delivery.type === 'delivery' && (
        <>
          <Dropdown
            onClick={() => {
              dispatch(updateDeliveryMethod('post'));
            }}
            customIsVisible={cart.delivery.method === 'post'}
            buttonArea="all"
            buttonIcon={() => (
              <CheckboxRound isActive={cart.delivery.method === 'post'} />
            )}
            customClassName="shopping-cart__order-block-radio-dropdown"
            buttonTitle={() => (
              <h4 className="shopping-cart__order-block-radio-dropdown-title">
                Самовивіз з пошти
              </h4>
            )}
            renderContent={() => (
              <>
                <div className="shopping-cart__order-block-radio-dropdown-inputs">
                  <label className="shopping-cart__order-block-radio-dropdown-label">
                    Служба доставки
                    <input
                      type="text"
                      className={classNames(
                        'shopping-cart__order-block-radio-dropdown-input',
                        {
                          'shopping-cart__order-block-radio-dropdown-input--error':
                            areErrorsOn && !cart.delivery.service,
                        },
                      )}
                      placeholder="Нова пошта"
                      onChange={(e) =>
                        dispatch(updateDeliveryService(e.target.value))
                      }
                      value={cart.delivery.service}
                    />
                    {areErrorsOn && !cart.delivery.service && (
                      <p className="shopping-cart__order-block-error">
                        Вкажіть службу доставки
                      </p>
                    )}
                  </label>

                  <label className="shopping-cart__order-block-radio-dropdown-label">
                    Номер відділення
                    <input
                      type="text"
                      className={classNames(
                        'shopping-cart__order-block-radio-dropdown-input',
                        {
                          'shopping-cart__order-block-radio-dropdown-input--error':
                            areErrorsOn && !cart.delivery.branch,
                        },
                      )}
                      placeholder="№456"
                      onChange={(e) =>
                        dispatch(updateDeliveryBranch(e.target.value))
                      }
                      value={cart.delivery.branch}
                    />
                    {areErrorsOn && !cart.delivery.branch && (
                      <p className="shopping-cart__order-block-error">
                        Вкажіть номер відділення
                      </p>
                    )}
                  </label>
                </div>

                <p className="shopping-cart__order-block-receiving-notification">
                  Послуга післяплати оплачується окремо,
                  <br /> за тарифами перевізника
                </p>
              </>
            )}
            customAfterTitle={() => {
              return isPhone ? '' : 'за тарифами перевізника';
            }}
            subtitle={isPhone ? 'за тарифами перевізника' : ''}
          />

          <Dropdown
            onClick={() => {
              dispatch(updateDeliveryMethod('courier'));
            }}
            customIsVisible={cart.delivery.method === 'courier'}
            buttonArea="all"
            buttonIcon={() => (
              <CheckboxRound isActive={cart.delivery.method === 'courier'} />
            )}
            customClassName="shopping-cart__order-block-radio-dropdown"
            buttonTitle={() => (
              <h4 className="shopping-cart__order-block-radio-dropdown-title">
                Кур'єр
              </h4>
            )}
            renderContent={() => (
              <>
                <div className="shopping-cart__order-block-radio-dropdown-inputs">
                  <label className="shopping-cart__order-block-radio-dropdown-label">
                    Служба доставки
                    <input
                      type="text"
                      className={classNames(
                        'shopping-cart__order-block-radio-dropdown-input',
                        {
                          'shopping-cart__order-block-radio-dropdown-input--error':
                            areErrorsOn && !cart.delivery.service,
                        },
                      )}
                      placeholder="Нова пошта"
                      onChange={(e) =>
                        dispatch(updateDeliveryService(e.target.value))
                      }
                      value={cart.delivery.service}
                    />
                    {areErrorsOn && !cart.delivery.service && (
                      <p className="shopping-cart__order-block-error">
                        Вкажіть службу доставки
                      </p>
                    )}
                  </label>

                  <label className="shopping-cart__order-block-radio-dropdown-label">
                    Вулиця
                    <input
                      type="text"
                      className={classNames(
                        'shopping-cart__order-block-radio-dropdown-input',
                        {
                          'shopping-cart__order-block-radio-dropdown-input--error':
                            areErrorsOn && !cart.delivery.street,
                        },
                      )}
                      placeholder="Червнева вулиця"
                      onChange={(e) =>
                        dispatch(updateDeliveryStreet(e.target.value))
                      }
                      value={cart.delivery.street}
                    />
                    {areErrorsOn && !cart.delivery.street && (
                      <p className="shopping-cart__order-block-error">
                        Вкажіть вулицю
                      </p>
                    )}
                  </label>

                  <label className="shopping-cart__order-block-radio-dropdown-label">
                    Будинок
                    <input
                      type="text"
                      className={classNames(
                        'shopping-cart__order-block-radio-dropdown-input',
                        {
                          'shopping-cart__order-block-radio-dropdown-input--error':
                            areErrorsOn && !cart.delivery.house,
                        },
                      )}
                      placeholder="1"
                      onChange={(e) =>
                        dispatch(updateDeliveryHouse(e.target.value))
                      }
                      value={cart.delivery.house}
                    />
                    {areErrorsOn && !cart.delivery.house && (
                      <p className="shopping-cart__order-block-error">
                        Вкажіть номер будинку
                      </p>
                    )}
                  </label>

                  <label className="shopping-cart__order-block-radio-dropdown-label">
                    Квартира
                    <input
                      type="text"
                      className={classNames(
                        'shopping-cart__order-block-radio-dropdown-input',
                        {
                          'shopping-cart__order-block-radio-dropdown-input--error':
                            areErrorsOn && !cart.delivery.apartment,
                        },
                      )}
                      placeholder="56"
                      onChange={(e) =>
                        dispatch(updateDeliveryApartment(e.target.value))
                      }
                      value={cart.delivery.apartment}
                    />
                    {areErrorsOn && !cart.delivery.apartment && (
                      <p className="shopping-cart__order-block-error">
                        Вкажіть номер квартири або поставте “-”
                      </p>
                    )}
                  </label>
                </div>

                <p className="shopping-cart__order-block-receiving-notification">
                  Послуга післяплати оплачується окремо,
                  <br /> за тарифами перевізника
                </p>
              </>
            )}
            customAfterTitle={() => {
              return isPhone ? '' : 'за тарифами перевізника';
            }}
            subtitle={isPhone ? 'за тарифами перевізника' : ''}
          />

          <div className="shopping-cart__order-block-receiving-receiver">
            <h4 className="shopping-cart__order-block-receiving-receiver-title">
              ПІБ отримувача:
            </h4>

            <Dropdown
              customClassName="shopping-cart__order-block-dropdown"
              buttonArea="all"
              buttonTitle={() => (
                <p className="shopping-cart__order-block-dropdown-option">
                  {cart.delivery.receiver.firstName ?
                    cart.delivery.receiver.firstName
                  : "Ім'я"}{' '}
                  {cart.delivery.receiver.middleName ?
                    cart.delivery.receiver.middleName
                  : 'По батькові'}{' '}
                  {cart.delivery.receiver.lastName ?
                    cart.delivery.receiver.lastName
                  : 'Прізвище'}
                </p>
              )}
              renderContent={() => (
                <div className="shopping-cart__order-block-inputs">
                  <label className="shopping-cart__order-block-label">
                    {' '}
                    Ім'я
                    <input
                      className={classNames(
                        'shopping-cart__order-block-input',
                        {
                          'shopping-cart__order-block-input--error':
                            areErrorsOn && !cart.delivery.receiver.firstName,
                        },
                      )}
                      type="text"
                      placeholder="Андрій"
                      onChange={(e) =>
                        dispatch(updateReceiverFirstName(e.target.value))
                      }
                      value={cart.delivery.receiver.firstName}
                    />
                    {areErrorsOn && !cart.delivery.receiver.firstName && (
                      <p className="shopping-cart__order-block-error">
                        Вкажіть ім'я
                      </p>
                    )}
                  </label>

                  <label className="shopping-cart__order-block-label">
                    {' '}
                    Прізвище
                    <input
                      className={classNames(
                        'shopping-cart__order-block-input',
                        {
                          'shopping-cart__order-block-input--error':
                            areErrorsOn && !cart.delivery.receiver.lastName,
                        },
                      )}
                      type="text"
                      placeholder="Містеряков"
                      onChange={(e) =>
                        dispatch(updateReceiverLastName(e.target.value))
                      }
                      value={cart.delivery.receiver.lastName}
                    />
                    {areErrorsOn && !cart.delivery.receiver.lastName && (
                      <p className="shopping-cart__order-block-error">
                        Вкажіть прізвище
                      </p>
                    )}
                  </label>

                  <label className="shopping-cart__order-block-label">
                    {' '}
                    Номер телефону
                    <input
                      className={classNames(
                        'shopping-cart__order-block-input',
                        {
                          'shopping-cart__order-block-input--error':
                            areErrorsOn && !cart.delivery.receiver.phone,
                        },
                      )}
                      type="tel"
                      placeholder="+38 093 674 34 67"
                      onChange={(e) =>
                        dispatch(updateReceiverPhone(e.target.value))
                      }
                      value={cart.delivery.receiver.phone}
                    />
                    {areErrorsOn && !cart.delivery.receiver.phone && (
                      <p className="shopping-cart__order-block-error">
                        Вкажіть номер телефону
                      </p>
                    )}
                  </label>

                  <label className="shopping-cart__order-block-label">
                    {' '}
                    По батькові
                    <input
                      className={classNames(
                        'shopping-cart__order-block-input',
                        {
                          'shopping-cart__order-block-input--error':
                            areErrorsOn && !cart.delivery.receiver.middleName,
                        },
                      )}
                      type="text"
                      placeholder="Олександрович"
                      onChange={(e) =>
                        dispatch(updateReceiverMiddleName(e.target.value))
                      }
                      value={cart.delivery.receiver.middleName}
                      required
                    />
                    {areErrorsOn && !cart.delivery.receiver.middleName && (
                      <p className="shopping-cart__order-block-error">
                        Вкажіть по батькові або поставте “-”
                      </p>
                    )}
                  </label>
                </div>
              )}
              customAfterTitle={() => <InkHighlighterSVG />}
            />
          </div>
        </>
      )}

      {cart.delivery.type === 'pickup' && (
        <>
          <div className="shopping-cart__order-block-contact">
            <h5 className="shopping-cart__order-block-contact-label">
              Контактні данні:
            </h5>
            <Dropdown
              customClassName="shopping-cart__order-block-dropdown"
              buttonArea="all"
              buttonTitle={() => (
                <p className="shopping-cart__order-block-dropdown-option">
                  {cart.user.firstName ? cart.user.firstName : "Ім'я"}{' '}
                  {cart.user.lastName ? cart.user.lastName : 'Прізвище'}
                </p>
              )}
              renderContent={() => (
                <div className="shopping-cart__order-block-inputs">
                  <label className="shopping-cart__order-block-label">
                    {' '}
                    Ім'я
                    <input
                      className={classNames(
                        'shopping-cart__order-block-input',
                        {
                          'shopping-cart__order-block-input--error':
                            areErrorsOn && !cart.user.firstName,
                        },
                      )}
                      type="text"
                      placeholder="Андрій"
                      onChange={(e) =>
                        dispatch(updateUserFirstName(e.target.value))
                      }
                      value={cart.user.firstName}
                      required
                    />
                    {areErrorsOn && !cart.user.firstName && (
                      <p className="shopping-cart__order-block-error">
                        Вкажіть ім'я
                      </p>
                    )}
                  </label>

                  <label className="shopping-cart__order-block-label">
                    {' '}
                    Прізвище
                    <input
                      className={classNames(
                        'shopping-cart__order-block-input',
                        {
                          'shopping-cart__order-block-input--error':
                            areErrorsOn && !cart.user.lastName,
                        },
                      )}
                      type="text"
                      placeholder="Містеряков"
                      onChange={(e) =>
                        dispatch(updateUserLastName(e.target.value))
                      }
                      value={cart.user.lastName}
                      required
                    />
                    {areErrorsOn && !cart.user.lastName && (
                      <p className="shopping-cart__order-block-error">
                        Вкажіть прізвище
                      </p>
                    )}
                  </label>

                  <label className="shopping-cart__order-block-label">
                    {' '}
                    Номер телефону
                    <input
                      className={classNames(
                        'shopping-cart__order-block-input',
                        {
                          'shopping-cart__order-block-input--error':
                            areErrorsOn && !cart.user.phone,
                        },
                      )}
                      type="tel"
                      placeholder="+38 093 674 34 67"
                      onChange={(e) =>
                        dispatch(updateUserPhone(e.target.value))
                      }
                      value={cart.user.phone}
                      required
                    />
                    {areErrorsOn && !cart.user.phone && (
                      <p className="shopping-cart__order-block-error">
                        Вкажіть телефон
                      </p>
                    )}
                  </label>

                  <label className="shopping-cart__order-block-label">
                    {' '}
                    Електронна пошта
                    <input
                      className={classNames(
                        'shopping-cart__order-block-input',
                        {
                          'shopping-cart__order-block-input--error':
                            areErrorsOn && !cart.user.email,
                        },
                      )}
                      type="email"
                      placeholder="artemmisti@gmail.com"
                      onChange={(e) =>
                        dispatch(updateUserEmail(e.target.value))
                      }
                      value={cart.user.email}
                      required
                    />
                    {areErrorsOn && !cart.user.email && (
                      <p className="shopping-cart__order-block-error">
                        Вкажіть email
                      </p>
                    )}
                  </label>
                </div>
              )}
              customAfterTitle={() => <InkHighlighterSVG />}
            />
          </div>
          <div className="shopping-cart__order-block-storage">
            <div className="shopping-cart__order-block-storage-location">
              <p className="shopping-cart__order-block-storage-location-label">
                Адреса складу:
              </p>
              <Link
                to={'https://maps.app.goo.gl/wAdeT2GGibefrzub9'}
                target="_blank"
                rel="noopener noreferrer"
                className="shopping-cart__order-block-storage-location-link"
              >
                <LocationSVG />
                <span className="shopping-cart__order-block-storage-location-link-text">
                  10014, м. Житомир, пл. Перемоги, 9
                </span>
                <MapSearchSVG />
              </Link>
            </div>
            <div className="shopping-cart__order-block-storage-schedule">
              <p className="shopping-cart__order-block-storage-schedule-label">
                Години роботи:
              </p>
              <div className="shopping-cart__order-block-storage-schedule-info">
                <div className="shopping-cart__order-block-storage-schedule-info-block">
                  <NestClockSVG />
                  <p className="shopping-cart__order-block-storage-schedule-info-text">
                    Вт - Нд: 10:00 - 18:00
                  </p>
                </div>
                <div className="shopping-cart__order-block-storage-schedule-info-block">
                  <p className="shopping-cart__order-block-storage-schedule-info-text">
                    Обідня перерва: 13:00 – 14:00
                    <br />
                    Графік може змінюватися у святкові дні.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
