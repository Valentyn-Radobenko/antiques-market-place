import React, { FormEvent, useEffect, useState } from 'react';
import { Close } from '../Imgs/Close';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, SavingState } from '../../store/store';
import {
  removeItem,
  setIsCartOpen,
  addSelectedItem,
  removeSelectedItem,
  updateUserFirstName,
  updateUserLastName,
  updateUserPhone,
  updateUserEmail,
  updateUserCountry,
  updateUserCity,
  updateDeliveryService,
  updateDeliveryBranch,
  updateDeliveryMethod,
  updateDeliveryType,
  updateDeliveryStreet,
  updateDeliveryHouse,
  updateDeliveryApartment,
  updateReceiverFirstName,
  updateReceiverLastName,
  updateReceiverPhone,
  updateReceiverMiddleName,
  updatePaymentMethod,
  removeSelectedItems,
} from '../../store/slices/shoppingCartSlice';
import { DeleteSVG } from '../Imgs/DeleteSVG';
import products from '../../data/products.json';
import { LocalMallSVG } from '../Imgs/LocalMallSVG';
import { Link, useParams } from 'react-router-dom';
import { Info } from '../Imgs/Info';
import { CheckBoxSquare } from '../Imgs/CheckBoxSquare/CheckBoxSquare';
import { Dropdown } from '../Dropdown/Dropdown';
import { InkHighlighterSVG } from '../Imgs/InkHighlighterSVG';
import classNames from 'classnames';
import { CheckboxRound } from '../Imgs/CheckBoxRound/CheckBoxRound';
import { LocationSVG } from '../Imgs/LocationSVG';
import { MapSearchSVG } from '../Imgs/MapSearchSVG';
import { NestClockSVG } from '../Imgs/NestClockSVG';
import { CopySVG } from '../Imgs/CopySVG';
import { InfoSVG } from '../Imgs/InfoSVG';
import { FilesInput } from '../FilesInput/FilesInput';
import { PhotosList } from '../PhotosList/PhotosList';
import { AddPhotoAlternateSVG } from '../Imgs/AddPhotoAlternateSVG';
import { useIsMobile } from '../../hooks/useMediaQuery';
import { Tooltip } from '../Tooltip/Tooltip';
import { VerifiedSVG } from '../Imgs/VerifiedSVG';
import { ArrowBackSVG } from '../Imgs/ArrowBackSVG';

export const ShoppingCart: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { slug } = useParams();
  const cart = useSelector((state: SavingState) => state.shoppingCart);
  const currentProduct = products.find((p) => p.slug === slug) || cart.items[0];
  const lang = useSelector((state: SavingState) => state.language.language);
  const [showAll, setShowAll] = useState(false);
  const [step, setStep] = useState(1);
  const [orderStep, setOrderStep] = useState(0);
  const [files, setFiles] = useState<File[]>([]);
  const PHOTO_AMOUNT = 5;
  const [isPaymentNotificationOn, setIsPaymentNotificationOn] = useState(false);
  const [areErrorsOn, setAreErrorsOn] = useState(false);

  const isPhone = useIsMobile();

  const totalPrice = cart.selectedItems.reduce(
    (acc, item) => acc + item.price,
    0,
  );

  const isUserDataChecked = !!(
    cart.user.firstName &&
    cart.user.lastName &&
    cart.user.phone &&
    cart.user.email &&
    cart.user.city &&
    cart.user.country
  );

  const isDeliveryChecked = !!(
    (cart.delivery.type === 'delivery' &&
      cart.delivery.receiver.firstName &&
      cart.delivery.receiver.middleName &&
      cart.delivery.receiver.lastName &&
      cart.delivery.receiver.phone &&
      ((cart.delivery.method === 'post' &&
        cart.delivery.service &&
        cart.delivery.branch) ||
        (cart.delivery.method === 'courier' &&
          cart.delivery.service &&
          cart.delivery.street &&
          cart.delivery.house &&
          cart.delivery.apartment))) ||
    (cart.delivery.type === 'pickup' && isUserDataChecked)
  );

  const isPaymentsChecked = !!(
    (cart.payment.method === 'onReceipt' &&
      cart.delivery.method === 'post' &&
      cart.delivery.service &&
      cart.delivery.branch) ||
    (cart.payment.method === 'international' && files.length > 0) ||
    (cart.payment.method === 'internal' && files.length > 0) ||
    (cart.payment.method === 'cash' && cart.delivery.type === 'pickup')
  );

  const canSubmit = isUserDataChecked && isDeliveryChecked && isPaymentsChecked;

  useEffect(() => {
    if (canSubmit) {
      setAreErrorsOn(false);
    }
  }, [canSubmit]);

  const deleteSelectedItems = () =>
    cart.items.forEach((i) => {
      cart.selectedItems.forEach((si) => {
        if (i.id === si.id) {
          dispatch(removeSelectedItem(si.id));
          dispatch(removeItem(i.id));
        }
      });
    });

  if (cart.selectedItems.length > cart.items.length) {
    cart.selectedItems.forEach((si) => dispatch(removeSelectedItem(si.id)));
  }

  const handleOrdersSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (canSubmit) {
      dispatch(removeSelectedItems());
      setStep(3);
    }
  };

  const toggleAll = () => {
    if (cart.selectedItems.length === cart.items.length) {
      cart.items.forEach((i) => {
        dispatch(removeSelectedItem(i.id));
      });
    } else {
      cart.items.forEach((i) => {
        if (!cart.selectedItems.find((si) => si.id === i.id)) {
          dispatch(addSelectedItem(i));
        }
      });
    }
  };

  return (
    <div
      className={classNames('shopping-cart', {
        'shopping-cart--end': step === 3,
      })}
    >
      <div className="shopping-cart__header">
        {step === 1 && (
          <h2 className="shopping-cart__title">
            {cart.items.length === 0 ? 'Кошик пустий' : 'Кошик'}
          </h2>
        )}
        {step === 2 && (
          <h2 className="shopping-cart__title">Оформити замовлення</h2>
        )}
        {step === 3 && (
          <div className="shopping-cart__end-top">
            <h2 className="shopping-cart__title shopping-cart__title--end">
              <span className="shopping-cart__title shopping-cart__title--end shopping-cart__title--green">
                Дякуємо,
              </span>{' '}
              замовлення оформлено!
            </h2>
            <p className="shopping-cart__end-subtitle">
              Чекайте на зміну статусу замовлення
            </p>
          </div>
        )}
        <button
          className="shopping-cart__close"
          onClick={() => dispatch(setIsCartOpen(false))}
        >
          <Close />
        </button>
      </div>
      {step === 1 && (
        <div className="shopping-cart__content">
          {cart.items.length === 0 ?
            <div className="shopping-cart__no-content">
              <div className="shopping-cart__no-content-info-icon">
                <Info />
              </div>
              <p className="shopping-cart__no-content-text">
                Знайдіть цікаві товари у розділі{' '}
                <Link
                  to={'/market'}
                  onClick={() => dispatch(setIsCartOpen(false))}
                  className="shopping-cart__no-content-link"
                >
                  “Маркет”
                </Link>
              </p>
            </div>
          : <>
              <div className="shopping-cart__content-top">
                <div className="shopping-cart__selected">
                  <button
                    onClick={toggleAll}
                    className="shopping-cart__selected-checkbox"
                  >
                    <CheckBoxSquare
                      isActive={
                        cart.selectedItems.length > 0 &&
                        cart.selectedItems.length === cart.items.length
                      }
                    />
                  </button>
                  <p className="shopping-cart__selected-text">
                    Обрано {cart.selectedItems.length}
                    <span className="shopping-cart__selected-text-minor">
                      /{cart.items.length}
                    </span>{' '}
                    товари
                  </p>
                </div>
                <button
                  onClick={deleteSelectedItems}
                  className="shopping-cart__delete"
                >
                  <DeleteSVG />
                </button>
              </div>
              <div className="shopping-cart__content-middle">
                {showAll ?
                  <div className="shopping-cart__products">
                    {cart.items.map((item) => {
                      return (
                        <div className="shopping-cart__product">
                          <button
                            onClick={() => {
                              if (
                                !cart.selectedItems.find(
                                  (p) => p.id === item.id,
                                )
                              ) {
                                dispatch(addSelectedItem(item));
                              } else {
                                dispatch(removeSelectedItem(item.id));
                              }
                            }}
                            className="shopping-cart__product-checkbox"
                          >
                            <CheckBoxSquare
                              isActive={cart.selectedItems.some(
                                (p) => p.id === item.id,
                              )}
                            />
                          </button>
                          <img
                            className="shopping-cart__product-img"
                            src={item.imgs[0]}
                            alt={item.name[lang]}
                          />
                          <div className="shopping-cart__product-data">
                            <p className="shopping-cart__product-title">
                              {item.name[lang]}
                            </p>
                            <p className="shopping-cart__product-price">
                              {item.price} грн
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                : <div className="shopping-cart__product">
                    <button
                      onClick={() => {
                        if (
                          !cart.selectedItems.find(
                            (p) => p.id === currentProduct.id,
                          )
                        ) {
                          dispatch(addSelectedItem(currentProduct));
                        } else {
                          dispatch(removeSelectedItem(currentProduct.id));
                        }
                      }}
                      className="shopping-cart__product-checkbox"
                    >
                      <CheckBoxSquare
                        isActive={cart.selectedItems.some(
                          (p) => p.id === currentProduct.id,
                        )}
                      />
                    </button>
                    <img
                      className="shopping-cart__product-img"
                      src={currentProduct.imgs[0]}
                      alt={currentProduct.name[lang]}
                    />
                    <div className="shopping-cart__product-data">
                      <p className="shopping-cart__product-title">
                        {currentProduct.name[lang]}
                      </p>
                      <p className="shopping-cart__product-price">
                        {currentProduct.price} грн
                      </p>
                    </div>
                  </div>
                }
                {cart.items.length > 1 && !showAll && (
                  <button
                    onClick={() => setShowAll(true)}
                    className="shopping-cart__show-all"
                  >
                    Показати всі товари ({cart.items.length - 1})
                  </button>
                )}
              </div>
              <div className="shopping-cart__content-bottom">
                {!isPhone && (
                  <div className="shopping-cart__price">
                    <p className="shopping-cart__price-label">Загальна сума</p>
                    <p className="shopping-cart__price-value">
                      {totalPrice} грн
                    </p>
                  </div>
                )}

                <button
                  onClick={() => {
                    setStep(2);
                    setOrderStep(1);
                  }}
                  className="shopping-cart__cta"
                >
                  <span className="shopping-cart__cta-text">
                    {isPhone ?
                      `Оформити замовлення - ${totalPrice} грн`
                    : 'Оформити замовлення'}
                  </span>
                  <div className="shopping-cart__cta-button">
                    <LocalMallSVG />
                  </div>
                </button>
              </div>
            </>
          }
        </div>
      )}
      {step === 2 && (
        <form
          onSubmit={handleOrdersSubmit}
          className="shopping-cart__order"
          method="post"
        >
          {
            // #region user-data
          }
          {(!isPhone || (isPhone && orderStep === 1)) && (
            <div className="shopping-cart__order-block">
              <div className="shopping-cart__order-block-top">
                {isPhone ?
                  <h3 className="shopping-cart__order-block-title">
                    &nbsp;Ваші дані
                  </h3>
                : <h3 className="shopping-cart__order-block-title">
                    Ваші дані
                  </h3>
                }
                <p className="shopping-cart__order-block-step">
                  1<span className="shopping-cart__order-block-steps">/5</span>
                </p>
              </div>
              <div className="shopping-cart__order-block-data-content">
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

                <Dropdown
                  customClassName="shopping-cart__order-block-dropdown"
                  buttonArea="all"
                  buttonTitle={() => (
                    <p className="shopping-cart__order-block-dropdown-option">
                      {cart.user.country ? cart.user.country : 'Країна'},{' '}
                      {cart.user.city ? cart.user.city : 'Місто'}
                    </p>
                  )}
                  renderContent={() => (
                    <div className="shopping-cart__order-block-inputs">
                      <label className="shopping-cart__order-block-label">
                        {' '}
                        Країна
                        <input
                          className={classNames(
                            'shopping-cart__order-block-input',
                            {
                              'shopping-cart__order-block-input--error':
                                areErrorsOn && !cart.user.country,
                            },
                          )}
                          type="text"
                          placeholder="Україна"
                          onChange={(e) =>
                            dispatch(updateUserCountry(e.target.value))
                          }
                          value={cart.user.country}
                          required
                        />
                        {areErrorsOn && !cart.user.country && (
                          <p className="shopping-cart__order-block-error">
                            Вкажіть країну
                          </p>
                        )}
                      </label>

                      <label className="shopping-cart__order-block-label">
                        {' '}
                        Місто
                        <input
                          className={classNames(
                            'shopping-cart__order-block-input',
                            {
                              'shopping-cart__order-block-input--error':
                                areErrorsOn && !cart.user.city,
                            },
                          )}
                          type="text"
                          placeholder="Київ"
                          onChange={(e) =>
                            dispatch(updateUserCity(e.target.value))
                          }
                          value={cart.user.city}
                          required
                        />
                        {areErrorsOn && !cart.user.city && (
                          <p className="shopping-cart__order-block-error">
                            Вкажіть місто
                          </p>
                        )}
                      </label>
                    </div>
                  )}
                  customAfterTitle={() => <InkHighlighterSVG />}
                />
              </div>
            </div>
          )}
          {
            //#endregion
          }

          {
            //#region orders
          }
          {(!isPhone || (isPhone && orderStep === 2)) && (
            <div className="shopping-cart__order-block">
              <div className="shopping-cart__order-block-top">
                {isPhone ?
                  <div className="shopping-cart__order-block-heading">
                    <ArrowBackSVG
                      onClick={() => setOrderStep(1)}
                      className="shopping-cart__order-block-back-button"
                    />
                    <h3 className="shopping-cart__order-block-title">
                      Замовлення
                    </h3>
                  </div>
                : <h3 className="shopping-cart__order-block-title">
                    Замовлення
                  </h3>
                }
                <p className="shopping-cart__order-block-step">
                  2<span className="shopping-cart__order-block-steps">/5</span>
                </p>
              </div>
              <div className="shopping-cart__order-block-products">
                {cart.selectedItems.map((p, ind) => {
                  return (
                    <div
                      key={ind + p.id}
                      className="shopping-cart__order-block-product"
                    >
                      <div className="shopping-cart__order-block-product-top">
                        <h4 className="shopping-cart__order-block-product-number">
                          Замовлення №{ind + 1}
                        </h4>
                        <DeleteSVG
                          className="shopping-cart__order-block-product-delete"
                          onClick={() => {
                            if (
                              cart.selectedItems.find((si) => si.id === p.id)
                            ) {
                              dispatch(removeSelectedItem(p.id));
                            }

                            dispatch(removeItem(p.id));
                          }}
                        />
                      </div>

                      <div className="shopping-cart__order-block-product-content">
                        <img
                          className="shopping-cart__order-block-product-img"
                          src={p.imgs[0]}
                          alt={p.name[lang]}
                        />
                        <div className="shopping-cart__order-block-product-data">
                          <p className="shopping-cart__order-block-product-name">
                            {p.name[lang]}
                          </p>
                          <p className="shopping-cart__order-block-product-price">
                            {p.price} грн
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {
            //#endregion
          }

          {
            // #region receiving
          }
          {(!isPhone || (isPhone && orderStep === 3)) && (
            <div className="shopping-cart__order-block">
              <div className="shopping-cart__order-block-top">
                {isPhone ?
                  <div className="shopping-cart__order-block-heading">
                    <ArrowBackSVG
                      onClick={() => setOrderStep(2)}
                      className="shopping-cart__order-block-back-button"
                    />
                    <h3 className="shopping-cart__order-block-title">
                      Отримання
                    </h3>
                  </div>
                : <h3 className="shopping-cart__order-block-title">
                    Отримання
                  </h3>
                }
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
                      <CheckboxRound
                        isActive={cart.delivery.method === 'post'}
                      />
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
                      <CheckboxRound
                        isActive={cart.delivery.method === 'courier'}
                      />
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
                                dispatch(
                                  updateDeliveryApartment(e.target.value),
                                )
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
                                    areErrorsOn &&
                                    !cart.delivery.receiver.firstName,
                                },
                              )}
                              type="text"
                              placeholder="Андрій"
                              onChange={(e) =>
                                dispatch(
                                  updateReceiverFirstName(e.target.value),
                                )
                              }
                              value={cart.delivery.receiver.firstName}
                            />
                            {areErrorsOn &&
                              !cart.delivery.receiver.firstName && (
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
                                    areErrorsOn &&
                                    !cart.delivery.receiver.lastName,
                                },
                              )}
                              type="text"
                              placeholder="Містеряков"
                              onChange={(e) =>
                                dispatch(updateReceiverLastName(e.target.value))
                              }
                              value={cart.delivery.receiver.lastName}
                            />
                            {areErrorsOn &&
                              !cart.delivery.receiver.lastName && (
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
                                    areErrorsOn &&
                                    !cart.delivery.receiver.phone,
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
                                    areErrorsOn &&
                                    !cart.delivery.receiver.middleName,
                                },
                              )}
                              type="text"
                              placeholder="Олександрович"
                              onChange={(e) =>
                                dispatch(
                                  updateReceiverMiddleName(e.target.value),
                                )
                              }
                              value={cart.delivery.receiver.middleName}
                              required
                            />
                            {areErrorsOn &&
                              !cart.delivery.receiver.middleName && (
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
          )}
          {
            // #endregion
          }

          {
            // #region payment
          }
          {(!isPhone || (isPhone && orderStep === 4)) && (
            <div className="shopping-cart__order-block">
              <div className="shopping-cart__order-block-top">
                {isPhone ?
                  <div className="shopping-cart__order-block-heading">
                    <ArrowBackSVG
                      onClick={() => setOrderStep(3)}
                      className="shopping-cart__order-block-back-button"
                    />
                    <h3 className="shopping-cart__order-block-title">Оплата</h3>
                  </div>
                : <h3 className="shopping-cart__order-block-title">Оплата</h3>}
                <p className="shopping-cart__order-block-step">
                  4<span className="shopping-cart__order-block-steps">/5</span>
                </p>
              </div>
              <Dropdown
                onClick={() => {
                  dispatch(updatePaymentMethod('onReceipt'));
                }}
                customIsVisible={cart.payment.method === 'onReceipt'}
                buttonArea="all"
                buttonIcon={() => (
                  <CheckboxRound
                    isActive={cart.payment.method === 'onReceipt'}
                  />
                )}
                customClassName="shopping-cart__order-block-radio-dropdown"
                buttonTitle={() => (
                  <h4 className="shopping-cart__order-block-radio-dropdown-title">
                    Оплата під час отримання товару ( карта / готівка )
                  </h4>
                )}
                subtitle="Послуга післяплати оплачується окремо,<br/>
              за тарифами перевізника"
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
                isAfterTitleOn={false}
              />

              <Dropdown
                onClick={() => {
                  if (cart.payment.method !== 'international') {
                    setFiles([]);
                  }

                  dispatch(updatePaymentMethod('international'));
                }}
                customIsVisible={cart.payment.method === 'international'}
                buttonArea="all"
                buttonIcon={() => (
                  <CheckboxRound
                    isActive={cart.payment.method === 'international'}
                  />
                )}
                customClassName="shopping-cart__order-block-radio-dropdown"
                buttonTitle={() => (
                  <h4 className="shopping-cart__order-block-radio-dropdown-title">
                    Міжнародний переказ
                  </h4>
                )}
                subtitle="Послуга доставки оплачується окремо,<br/>
              за тарифами перевізника"
                renderContent={() => (
                  <>
                    <div className="shopping-cart__order-block-payments-info">
                      <div className="shopping-cart__order-block-payments-info-block">
                        <div className="shopping-cart__order-block-payments-info-unit">
                          <p className="shopping-cart__order-block-payments-info-label">
                            IBAN:
                          </p>
                          <div className="shopping-cart__order-block-payments-info-copy">
                            <p className="shopping-cart__order-block-payments-info-value">
                              UA2134565245678
                            </p>
                            <CopySVG
                              className="shopping-cart__order-block-payments-info-copy-icon"
                              onClick={() => {
                                navigator.clipboard.writeText(
                                  'UA2134565245678',
                                );
                              }}
                            />
                          </div>
                        </div>

                        <div className="shopping-cart__order-block-payments-info-unit">
                          <p className="shopping-cart__order-block-payments-info-label">
                            SWIFT код:
                          </p>
                          <div className="shopping-cart__order-block-payments-info-copy">
                            <p className="shopping-cart__order-block-payments-info-value">
                              ABCDUAUAXS
                            </p>
                            <CopySVG
                              className="shopping-cart__order-block-payments-info-copy-icon"
                              onClick={() => {
                                navigator.clipboard.writeText('ABCDUAUAXS');
                              }}
                            />
                          </div>
                        </div>

                        <div
                          className="shopping-cart__order-block-payments-info-unit 
                      shopping-cart__order-block-payments-info-unit--last"
                        >
                          <p className="shopping-cart__order-block-payments-info-label">
                            Сума:
                          </p>
                          <p className="shopping-cart__order-block-payments-info-value">
                            {totalPrice} грн
                          </p>
                        </div>
                      </div>

                      <div className="shopping-cart__order-block-payments-info-block">
                        <div className="shopping-cart__order-block-payments-info-unit">
                          <p className="shopping-cart__order-block-payments-info-label">
                            Назва банку:
                          </p>
                          <p className="shopping-cart__order-block-payments-info-value">
                            Приват банк
                          </p>
                        </div>

                        <div className="shopping-cart__order-block-payments-info-unit">
                          <p className="shopping-cart__order-block-payments-info-label">
                            Юридична адреса:
                          </p>
                          <p className="shopping-cart__order-block-payments-info-value">
                            вул.Велика Бердичівська 75
                          </p>
                        </div>

                        <div className="shopping-cart__order-block-payments-info-unit">
                          <p className="shopping-cart__order-block-payments-info-label">
                            Додаткова інформація:
                          </p>
                          <p className="shopping-cart__order-block-payments-info-value">
                            Переказ доступний у форматах SEPA/SWIFT з будь-якого
                            банку.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="shopping-cart__order-block-payments-upload">
                      {isPaymentNotificationOn && (
                        <div className="shopping-cart__order-block-payments-upload-notification">
                          <div className="shopping-cart__order-block-payments-upload-notification-top">
                            <InfoSVG className="shopping-cart__order-block-payments-upload-notification-top-info" />
                            <Close
                              onClick={() => {
                                setIsPaymentNotificationOn(false);
                              }}
                              className="shopping-cart__order-block-payments-upload-notification-top-close"
                            />
                          </div>

                          <p className="shopping-cart__order-block-payments-upload-notification-content">
                            &nbsp;Для підтвердження платежу, будь ласка, додайте
                            скріншот квитанції. <br /> &nbsp;Це допоможе нам
                            швидше розпочати обробку замовлення — без очікування
                            підтвердження з боку банку.
                          </p>
                        </div>
                      )}

                      <div className="shopping-cart__order-block-payments-upload-title">
                        <p className="shopping-cart__order-block-payments-upload-title-text">
                          Скрін оплати
                        </p>
                        <InfoSVG
                          onClick={() => {
                            setIsPaymentNotificationOn(true);
                          }}
                          onMouseEnter={() => {
                            setIsPaymentNotificationOn(true);
                          }}
                          className="shopping-cart__order-block-payments-upload-title-info"
                        />
                      </div>

                      <FilesInput
                        files={files}
                        setFiles={setFiles}
                        PHOTO_AMOUNT={PHOTO_AMOUNT}
                        customClassName="shopping-cart__order-block-payments-upload-input"
                        customContent={() => (
                          <>
                            <p className="shopping-cart__order-block-payments-upload-input-text">
                              Виберіть файл
                            </p>
                            <AddPhotoAlternateSVG />
                          </>
                        )}
                      />
                      {files.length > 0 && (
                        <PhotosList
                          files={files}
                          setFiles={setFiles}
                        />
                      )}

                      <p className="shopping-cart__order-block-payments-upload-formats">
                        Приймаються формати: JPG, PNG, PDF
                      </p>
                    </div>

                    <p className="shopping-cart__order-block-receiving-notification">
                      Послуга доставки оплачується окремо,
                      <br /> за тарифами перевізника
                    </p>
                  </>
                )}
                isAfterTitleOn={false}
              />

              <Dropdown
                onClick={() => {
                  if (cart.payment.method !== 'internal') {
                    setFiles([]);
                  }

                  dispatch(updatePaymentMethod('internal'));
                }}
                customIsVisible={cart.payment.method === 'internal'}
                buttonArea="all"
                buttonIcon={() => (
                  <CheckboxRound
                    isActive={cart.payment.method === 'internal'}
                  />
                )}
                customClassName="shopping-cart__order-block-radio-dropdown"
                buttonTitle={() => (
                  <h4 className="shopping-cart__order-block-radio-dropdown-title">
                    Переказ на картковий рахунок компанії
                  </h4>
                )}
                subtitle="Послуга доставки оплачується окремо,<br/>
              за тарифами перевізника"
                renderContent={() => (
                  <>
                    <div className="shopping-cart__order-block-payments-info">
                      <div className="shopping-cart__order-block-payments-info-block">
                        <div className="shopping-cart__order-block-payments-info-unit">
                          <p className="shopping-cart__order-block-payments-info-label">
                            Номер карти:
                          </p>
                          <div className="shopping-cart__order-block-payments-info-copy">
                            <p className="shopping-cart__order-block-payments-info-value">
                              1234 3456 5245 6785
                            </p>
                            <CopySVG
                              className="shopping-cart__order-block-payments-info-copy-icon"
                              onClick={() => {
                                navigator.clipboard.writeText(
                                  '1234345652456785',
                                );
                              }}
                            />
                          </div>
                        </div>

                        <div className="shopping-cart__order-block-payments-info-unit">
                          <p className="shopping-cart__order-block-payments-info-label">
                            Сума:
                          </p>
                          <p className="shopping-cart__order-block-payments-info-value">
                            {totalPrice} грн
                          </p>
                        </div>
                      </div>

                      <div className="shopping-cart__order-block-payments-info-block">
                        <div className="shopping-cart__order-block-payments-info-unit">
                          <p className="shopping-cart__order-block-payments-info-label">
                            Назва банку:
                          </p>
                          <p className="shopping-cart__order-block-payments-info-value">
                            Приват банк
                          </p>
                        </div>

                        <div
                          className="shopping-cart__order-block-payments-info-unit 
                      shopping-cart__order-block-payments-info-unit--last"
                        >
                          <p className="shopping-cart__order-block-payments-info-label">
                            Ім’я власника картки:
                          </p>
                          <p className="shopping-cart__order-block-payments-info-value">
                            Віктор Вікторович Бабкан
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="shopping-cart__order-block-payments-upload">
                      {isPaymentNotificationOn && (
                        <div className="shopping-cart__order-block-payments-upload-notification">
                          <div className="shopping-cart__order-block-payments-upload-notification-top">
                            <InfoSVG className="shopping-cart__order-block-payments-upload-notification-top-info" />
                            <Close
                              onClick={() => {
                                setIsPaymentNotificationOn(false);
                              }}
                              className="shopping-cart__order-block-payments-upload-notification-top-close"
                            />
                          </div>

                          <p className="shopping-cart__order-block-payments-upload-notification-content">
                            &nbsp;Для підтвердження платежу, будь ласка, додайте
                            скріншот квитанції. <br /> &nbsp;Це допоможе нам
                            швидше розпочати обробку замовлення — без очікування
                            підтвердження з боку банку.
                          </p>
                        </div>
                      )}

                      <div className="shopping-cart__order-block-payments-upload-title">
                        <p className="shopping-cart__order-block-payments-upload-title-text">
                          Скрін оплати
                        </p>
                        <InfoSVG
                          onClick={() => {
                            setIsPaymentNotificationOn(true);
                          }}
                          onMouseEnter={() => {
                            setIsPaymentNotificationOn(true);
                          }}
                          className="shopping-cart__order-block-payments-upload-title-info"
                        />
                      </div>

                      <FilesInput
                        files={files}
                        setFiles={setFiles}
                        PHOTO_AMOUNT={PHOTO_AMOUNT}
                        customClassName="shopping-cart__order-block-payments-upload-input"
                        customContent={() => (
                          <>
                            <p className="shopping-cart__order-block-payments-upload-input-text">
                              Виберіть файл
                            </p>
                            <AddPhotoAlternateSVG />
                          </>
                        )}
                      />
                      {files.length > 0 && (
                        <PhotosList
                          files={files}
                          setFiles={setFiles}
                        />
                      )}

                      <p className="shopping-cart__order-block-payments-upload-formats">
                        Приймаються формати: JPG, PNG, PDF
                      </p>
                    </div>

                    <p className="shopping-cart__order-block-receiving-notification">
                      Послуга доставки оплачується окремо,
                      <br /> за тарифами перевізника
                    </p>
                  </>
                )}
                isAfterTitleOn={false}
              />

              <Dropdown
                onClick={() => {
                  if (cart.payment.method !== 'cash') {
                    setFiles([]);
                  }

                  dispatch(updatePaymentMethod('cash'));
                }}
                customIsVisible={cart.payment.method === 'cash'}
                buttonArea="all"
                buttonIcon={() => (
                  <CheckboxRound isActive={cart.payment.method === 'cash'} />
                )}
                customClassName="shopping-cart__order-block-radio-dropdown"
                buttonTitle={() => (
                  <h4 className="shopping-cart__order-block-radio-dropdown-title">
                    Готівка
                  </h4>
                )}
                subtitle="Оплата готівкою здійснюється при самовивозі зі складу"
                renderContent={() => (
                  <>
                    <div className="shopping-cart__order-block-payments-info">
                      <div className="shopping-cart__order-block-payments-info-block">
                        <div
                          className="shopping-cart__order-block-payments-info-unit 
                      shopping-cart__order-block-payments-info-unit--last"
                        >
                          <p className="shopping-cart__order-block-payments-info-label">
                            Адреса складу:
                          </p>
                          <Link
                            to={'https://maps.app.goo.gl/wAdeT2GGibefrzub9'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shopping-cart__order-block-payments-info-link"
                          >
                            м. Житомир, пл. Перемоги, 9
                          </Link>
                        </div>
                      </div>

                      <div className="shopping-cart__order-block-payments-info-block">
                        <div className="shopping-cart__order-block-payments-info-unit">
                          <p className="shopping-cart__order-block-payments-info-label">
                            Сума:
                          </p>
                          <p className="shopping-cart__order-block-payments-info-value">
                            {totalPrice} грн
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="shopping-cart__order-block-receiving-notification">
                      Оплата готівкою здійснюється при самовивозі зі складу
                    </p>
                  </>
                )}
                isAfterTitleOn={false}
              />
            </div>
          )}
          {
            // #endregion
          }
          {
            // #region conclusion
          }
          {(!isPhone || (isPhone && orderStep === 5)) && (
            <div className="shopping-cart__order-block">
              <div className="shopping-cart__order-block-top">
                {isPhone ?
                  <div className="shopping-cart__order-block-heading">
                    <ArrowBackSVG
                      onClick={() => setOrderStep(4)}
                      className="shopping-cart__order-block-back-button"
                    />
                    <h3 className="shopping-cart__order-block-title">
                      Підсумок замовлення
                    </h3>
                  </div>
                : <h3 className="shopping-cart__order-block-title">
                    Підсумок замовлення
                  </h3>
                }
                <p className="shopping-cart__order-block-step">
                  5<span className="shopping-cart__order-block-steps">/5</span>
                </p>
              </div>
              <div className="shopping-cart__order-conclusion">
                <div className="shopping-cart__order-conclusion-top">
                  <h4 className="shopping-cart__order-conclusion-top-title">
                    До сплати
                  </h4>

                  <div className="shopping-cart__order-conclusion-top-amount">
                    <p className="shopping-cart__order-conclusion-top-amount-label">
                      {cart.items.length} товари на суму:{' '}
                    </p>

                    <p className="shopping-cart__order-conclusion-top-amount-value">
                      {totalPrice} грн
                    </p>
                  </div>
                </div>

                <div className="shopping-cart__order-conclusion-delivery">
                  <h4 className="shopping-cart__order-conclusion-delivery-title">
                    Оплата за доставку
                  </h4>

                  <p className="shopping-cart__order-conclusion-delivery-text">
                    сплачуються за тарифами перевізника
                  </p>
                </div>

                <div className="shopping-cart__order-conclusion-line"></div>

                <div className="shopping-cart__order-conclusion-terms">
                  <div className="shopping-cart__order-conclusion-terms-block">
                    <h4 className="shopping-cart__order-conclusion-terms-block-title">
                      Умови:
                    </h4>

                    <p className="shopping-cart__order-conclusion-terms-block-text">
                      Отримання замовлення від 5 000 ₴ - 30 000 ₴ за наявності
                      документів. При оплаті готівкою від 30 000 ₴ необхідно
                      надати документи для верифікації згідно вимог Закону
                      України від 06.12.2019 №361-IX
                    </p>
                  </div>

                  <div className="shopping-cart__order-conclusion-terms-block">
                    <h4 className="shopping-cart__order-conclusion-terms-block-title">
                      Підтверджуючи замовлення, я приймаю умови:
                    </h4>
                    <ul className="shopping-cart__order-conclusion-terms-block-links">
                      <li className="shopping-cart__order-conclusion-terms-block-link">
                        угоди користувача
                      </li>
                      <li className="shopping-cart__order-conclusion-terms-block-link">
                        положення про обробку і захист персональних даних
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
          {
            // #endregion
          }

          {isPhone && orderStep === 1 && (
            <div className="shopping-cart__order-button-block">
              <button
                onClick={() => {
                  setOrderStep(2);
                }}
                disabled={!isUserDataChecked}
                type="button"
                className="shopping-cart__cta"
              >
                <span className="shopping-cart__cta-text">Далі</span>
                <VerifiedSVG />
              </button>
            </div>
          )}

          {isPhone && orderStep === 2 && (
            <div className="shopping-cart__order-button-block">
              <button
                onClick={() => {
                  setOrderStep(3);
                }}
                type="button"
                className="shopping-cart__cta"
              >
                <span className="shopping-cart__cta-text">Далі</span>
                <VerifiedSVG />
              </button>
            </div>
          )}

          {isPhone && orderStep === 3 && (
            <div className="shopping-cart__order-button-block">
              <button
                onClick={() => {
                  setOrderStep(4);
                }}
                disabled={!isDeliveryChecked}
                type="button"
                className="shopping-cart__cta"
              >
                <span className="shopping-cart__cta-text">Далі</span>
                <VerifiedSVG />
              </button>
            </div>
          )}

          {isPhone && orderStep === 4 && (
            <div className="shopping-cart__order-button-block">
              <button
                onClick={() => {
                  setOrderStep(5);
                }}
                disabled={!isPaymentsChecked}
                type="button"
                className="shopping-cart__cta"
              >
                <span className="shopping-cart__cta-text">Далі</span>
                <VerifiedSVG />
              </button>
            </div>
          )}

          {((!isPhone && canSubmit) || (orderStep === 5 && canSubmit)) && (
            <div className="shopping-cart__order-button-block">
              <button
                type="submit"
                disabled={!canSubmit}
                className="shopping-cart__cta shopping-cart__cta--submit"
              >
                <span className="shopping-cart__cta-text">
                  Замовлення підтверджую
                </span>
              </button>
            </div>
          )}

          {((!isPhone && !canSubmit) || (orderStep === 5 && !canSubmit)) && (
            <Tooltip
              onMouseEnter={() => {
                if (!canSubmit) {
                  setAreErrorsOn(true);
                }
              }}
              customTooltipClassName="shopping-cart__order-button-block"
              customContentClassName="shopping-cart__cta-info"
              renderButton={() => (
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="shopping-cart__cta shopping-cart__cta--submit"
                >
                  <span className="shopping-cart__cta-text">
                    Замовлення підтверджую
                  </span>
                </button>
              )}
              renderContent={() => (
                <>
                  <p className="shopping-cart__cta-info-text">
                    Треба заповнити усі розділи, щоб підтвердити замовлення.
                  </p>
                </>
              )}
            />
          )}
        </form>
      )}
      {step === 3 && (
        <div className="shopping-cart__end-message">
          <div className="shopping-cart__end-message-icon-wrapper">
            <InfoSVG className="shopping-cart__end-message-icon" />
          </div>
          <p className="shopping-cart__end-message-text">
            Слідкуйте за вашим замовленням у вашому кабінеті у розділі{' '}
            <Link
              className="shopping-cart__end-message-link"
              to={'/me/orders'}
            >
              “Мої&nbsp;покупки”
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};
