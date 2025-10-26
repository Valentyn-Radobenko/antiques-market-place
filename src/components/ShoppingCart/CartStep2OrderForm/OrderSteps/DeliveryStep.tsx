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
import { useTranslation } from 'react-i18next';

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

  const { t } = useTranslation();

  return (
    <div className="shopping-cart__order-block">
      <div className="shopping-cart__order-block-top">
        {isPhone ?
          <div className="shopping-cart__order-block-heading">
            <ArrowBackSVG
              onClick={() => setOrderStep(2)}
              className="shopping-cart__order-block-back-button"
            />
            <h3 className="shopping-cart__order-block-title">
              {t('shopping-cart__order-block-title')}
            </h3>
          </div>
        : <h3 className="shopping-cart__order-block-title">
            {t('shopping-cart__order-block-title')}
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
          {t('shopping-cart__order-block-receiving-nav-section')}
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
          {t('shopping-cart__order-block-receiving-nav-section2')}
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
                {t('shopping-cart__order-block-radio-dropdown-title')}
              </h4>
            )}
            renderContent={() => (
              <>
                <div className="shopping-cart__order-block-radio-dropdown-inputs">
                  <label className="shopping-cart__order-block-radio-dropdown-label">
                    {t('shopping-cart__order-block-radio-dropdown-label')}
                    <input
                      type="text"
                      className={classNames(
                        'shopping-cart__order-block-radio-dropdown-input',
                        {
                          'shopping-cart__order-block-radio-dropdown-input--error':
                            areErrorsOn && !cart.delivery.service,
                        },
                      )}
                      placeholder={t(
                        'shopping-cart__order-block-radio-dropdown-input-placeholder',
                      )}
                      onChange={(e) =>
                        dispatch(updateDeliveryService(e.target.value))
                      }
                      value={cart.delivery.service}
                    />
                    {areErrorsOn && !cart.delivery.service && (
                      <p className="shopping-cart__order-block-error">
                        {t('shopping-cart__order-block-error')}
                      </p>
                    )}
                  </label>

                  <label className="shopping-cart__order-block-radio-dropdown-label">
                    {t('shopping-cart__order-block-radio-dropdown-label2')}
                    <input
                      type="text"
                      className={classNames(
                        'shopping-cart__order-block-radio-dropdown-input',
                        {
                          'shopping-cart__order-block-radio-dropdown-input--error':
                            areErrorsOn && !cart.delivery.branch,
                        },
                      )}
                      placeholder={t(
                        'shopping-cart__order-block-radio-dropdown-input-placeholder2',
                      )}
                      onChange={(e) =>
                        dispatch(updateDeliveryBranch(e.target.value))
                      }
                      value={cart.delivery.branch}
                    />
                    {areErrorsOn && !cart.delivery.branch && (
                      <p className="shopping-cart__order-block-error">
                        {t('shopping-cart__order-block-error2')}
                      </p>
                    )}
                  </label>
                </div>

                <p className="shopping-cart__order-block-receiving-notification">
                  {t('shopping-cart__order-block-receiving-notification')}
                  <br />{' '}
                  {t('shopping-cart__order-block-receiving-notification2')}
                </p>
              </>
            )}
            customAfterTitle={() => {
              return isPhone ? '' : (
                  `${t('shopping-cart__order-block-receiving-notification2')}`
                );
            }}
            subtitle={
              isPhone ?
                `${t('shopping-cart__order-block-receiving-notification2')}`
              : ''
            }
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
                {t('shopping-cart__order-block-radio-dropdown-title2')}
              </h4>
            )}
            renderContent={() => (
              <>
                <div className="shopping-cart__order-block-radio-dropdown-inputs">
                  <label className="shopping-cart__order-block-radio-dropdown-label">
                    {t('shopping-cart__order-block-radio-dropdown-label3')}
                    <input
                      type="text"
                      className={classNames(
                        'shopping-cart__order-block-radio-dropdown-input',
                        {
                          'shopping-cart__order-block-radio-dropdown-input--error':
                            areErrorsOn && !cart.delivery.service,
                        },
                      )}
                      placeholder={t(
                        'shopping-cart__order-block-radio-dropdown-input-placeholder',
                      )}
                      onChange={(e) =>
                        dispatch(updateDeliveryService(e.target.value))
                      }
                      value={cart.delivery.service}
                    />
                    {areErrorsOn && !cart.delivery.service && (
                      <p className="shopping-cart__order-block-error">
                        {t('shopping-cart__order-block-error')}
                      </p>
                    )}
                  </label>

                  <label className="shopping-cart__order-block-radio-dropdown-label">
                    {t('shopping-cart__order-block-radio-dropdown-label4')}
                    <input
                      type="text"
                      className={classNames(
                        'shopping-cart__order-block-radio-dropdown-input',
                        {
                          'shopping-cart__order-block-radio-dropdown-input--error':
                            areErrorsOn && !cart.delivery.street,
                        },
                      )}
                      placeholder={t(
                        'shopping-cart__order-block-radio-dropdown-input-placeholder3',
                      )}
                      onChange={(e) =>
                        dispatch(updateDeliveryStreet(e.target.value))
                      }
                      value={cart.delivery.street}
                    />
                    {areErrorsOn && !cart.delivery.street && (
                      <p className="shopping-cart__order-block-error">
                        {t('shopping-cart__order-block-error3')}
                      </p>
                    )}
                  </label>

                  <label className="shopping-cart__order-block-radio-dropdown-label">
                    {t('shopping-cart__order-block-radio-dropdown-label5')}
                    <input
                      type="text"
                      className={classNames(
                        'shopping-cart__order-block-radio-dropdown-input',
                        {
                          'shopping-cart__order-block-radio-dropdown-input--error':
                            areErrorsOn && !cart.delivery.house,
                        },
                      )}
                      placeholder={t(
                        'shopping-cart__order-block-radio-dropdown-input-placeholder4',
                      )}
                      onChange={(e) =>
                        dispatch(updateDeliveryHouse(e.target.value))
                      }
                      value={cart.delivery.house}
                    />
                    {areErrorsOn && !cart.delivery.house && (
                      <p className="shopping-cart__order-block-error">
                        {t('shopping-cart__order-block-error4')}
                      </p>
                    )}
                  </label>

                  <label className="shopping-cart__order-block-radio-dropdown-label">
                    {t('shopping-cart__order-block-radio-dropdown-label6')}
                    <input
                      type="text"
                      className={classNames(
                        'shopping-cart__order-block-radio-dropdown-input',
                        {
                          'shopping-cart__order-block-radio-dropdown-input--error':
                            areErrorsOn && !cart.delivery.apartment,
                        },
                      )}
                      placeholder={t(
                        'shopping-cart__order-block-radio-dropdown-input-placeholder5',
                      )}
                      onChange={(e) =>
                        dispatch(updateDeliveryApartment(e.target.value))
                      }
                      value={cart.delivery.apartment}
                    />
                    {areErrorsOn && !cart.delivery.apartment && (
                      <p className="shopping-cart__order-block-error">
                        {t('shopping-cart__order-block-error5')}
                      </p>
                    )}
                  </label>
                </div>

                <p className="shopping-cart__order-block-receiving-notification">
                  {t('shopping-cart__order-block-receiving-notification')}
                  <br />{' '}
                  {t('shopping-cart__order-block-receiving-notification2')}
                </p>
              </>
            )}
            customAfterTitle={() => {
              return isPhone ? '' : (
                  t('shopping-cart__order-block-receiving-notification2')
                );
            }}
            subtitle={
              isPhone ?
                t('shopping-cart__order-block-receiving-notification2')
              : ''
            }
          />

          <div className="shopping-cart__order-block-receiving-receiver">
            <h4 className="shopping-cart__order-block-receiving-receiver-title">
              {t('shopping-cart__order-block-receiving-receiver-title')}
            </h4>

            <Dropdown
              customClassName="shopping-cart__order-block-dropdown"
              buttonArea="all"
              buttonTitle={() => (
                <p className="shopping-cart__order-block-dropdown-option">
                  {cart.delivery.receiver.firstName ?
                    cart.delivery.receiver.firstName
                  : t('shopping-cart__order-block-placeholder-firstname')}{' '}
                  {cart.delivery.receiver.middleName ?
                    cart.delivery.receiver.middleName
                  : t('shopping-cart__order-block-placeholder-middlename')}{' '}
                  {cart.delivery.receiver.lastName ?
                    cart.delivery.receiver.lastName
                  : t('shopping-cart__order-block-placeholder-lastname')}
                </p>
              )}
              renderContent={() => (
                <div className="shopping-cart__order-block-inputs">
                  <label className="shopping-cart__order-block-label">
                    {t('shopping-cart__order-block-label1')}
                    <input
                      className={classNames(
                        'shopping-cart__order-block-input',
                        {
                          'shopping-cart__order-block-input--error':
                            areErrorsOn && !cart.delivery.receiver.firstName,
                        },
                      )}
                      type="text"
                      placeholder={t(
                        'shopping-cart__order-block-input-placeholder1',
                      )}
                      onChange={(e) =>
                        dispatch(updateReceiverFirstName(e.target.value))
                      }
                      value={cart.delivery.receiver.firstName}
                    />
                    {areErrorsOn && !cart.delivery.receiver.firstName && (
                      <p className="shopping-cart__order-block-error">
                        {t('shopping-cart__order-block-error6')}
                      </p>
                    )}
                  </label>

                  <label className="shopping-cart__order-block-label">
                    {t('shopping-cart__order-block-label2')}
                    <input
                      className={classNames(
                        'shopping-cart__order-block-input',
                        {
                          'shopping-cart__order-block-input--error':
                            areErrorsOn && !cart.delivery.receiver.lastName,
                        },
                      )}
                      type="text"
                      placeholder={t(
                        'shopping-cart__order-block-input-placeholder2',
                      )}
                      onChange={(e) =>
                        dispatch(updateReceiverLastName(e.target.value))
                      }
                      value={cart.delivery.receiver.lastName}
                    />
                    {areErrorsOn && !cart.delivery.receiver.lastName && (
                      <p className="shopping-cart__order-block-error">
                        {t('shopping-cart__order-block-error7')}
                      </p>
                    )}
                  </label>

                  <label className="shopping-cart__order-block-label">
                    {t('shopping-cart__order-block-label3')}
                    <input
                      className={classNames(
                        'shopping-cart__order-block-input',
                        {
                          'shopping-cart__order-block-input--error':
                            areErrorsOn && !cart.delivery.receiver.phone,
                        },
                      )}
                      type="tel"
                      placeholder={t(
                        'shopping-cart__order-block-input-placeholder3',
                      )}
                      onChange={(e) =>
                        dispatch(updateReceiverPhone(e.target.value))
                      }
                      value={cart.delivery.receiver.phone}
                    />
                    {areErrorsOn && !cart.delivery.receiver.phone && (
                      <p className="shopping-cart__order-block-error">
                        {t('shopping-cart__order-block-error8')}
                      </p>
                    )}
                  </label>

                  <label className="shopping-cart__order-block-label">
                    {t('shopping-cart__order-block-label4')}
                    <input
                      className={classNames(
                        'shopping-cart__order-block-input',
                        {
                          'shopping-cart__order-block-input--error':
                            areErrorsOn && !cart.delivery.receiver.middleName,
                        },
                      )}
                      type="text"
                      placeholder={t(
                        'shopping-cart__order-block-input-placeholder4',
                      )}
                      onChange={(e) =>
                        dispatch(updateReceiverMiddleName(e.target.value))
                      }
                      value={cart.delivery.receiver.middleName}
                      required
                    />
                    {areErrorsOn && !cart.delivery.receiver.middleName && (
                      <p className="shopping-cart__order-block-error">
                        {t('shopping-cart__order-block-error9')}
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
              {t('shopping-cart__order-block-contact-label')}
            </h5>
            <Dropdown
              customClassName="shopping-cart__order-block-dropdown"
              buttonArea="all"
              buttonTitle={() => (
                <p className="shopping-cart__order-block-dropdown-option">
                  {cart.user.firstName ?
                    cart.user.firstName
                  : t('shopping-cart__order-block-placeholder-firstname')}{' '}
                  {cart.user.lastName ?
                    cart.user.lastName
                  : t('shopping-cart__order-block-placeholder-lastname')}
                </p>
              )}
              renderContent={() => (
                <div className="shopping-cart__order-block-inputs">
                  <label className="shopping-cart__order-block-label">
                    {t('shopping-cart__order-block-label1')}
                    <input
                      className={classNames(
                        'shopping-cart__order-block-input',
                        {
                          'shopping-cart__order-block-input--error':
                            areErrorsOn && !cart.user.firstName,
                        },
                      )}
                      type="text"
                      placeholder={t(
                        'shopping-cart__order-block-input-placeholder1',
                      )}
                      onChange={(e) =>
                        dispatch(updateUserFirstName(e.target.value))
                      }
                      value={cart.user.firstName}
                      required
                    />
                    {areErrorsOn && !cart.user.firstName && (
                      <p className="shopping-cart__order-block-error">
                        {t('shopping-cart__order-block-error6')}
                      </p>
                    )}
                  </label>

                  <label className="shopping-cart__order-block-label">
                    {t('shopping-cart__order-block-label2')}
                    <input
                      className={classNames(
                        'shopping-cart__order-block-input',
                        {
                          'shopping-cart__order-block-input--error':
                            areErrorsOn && !cart.user.lastName,
                        },
                      )}
                      type="text"
                      placeholder={t(
                        'shopping-cart__order-block-input-placeholder2',
                      )}
                      onChange={(e) =>
                        dispatch(updateUserLastName(e.target.value))
                      }
                      value={cart.user.lastName}
                      required
                    />
                    {areErrorsOn && !cart.user.lastName && (
                      <p className="shopping-cart__order-block-error">
                        {t('shopping-cart__order-block-error7')}
                      </p>
                    )}
                  </label>

                  <label className="shopping-cart__order-block-label">
                    {t('shopping-cart__order-block-label3')}
                    <input
                      className={classNames(
                        'shopping-cart__order-block-input',
                        {
                          'shopping-cart__order-block-input--error':
                            areErrorsOn && !cart.user.phone,
                        },
                      )}
                      type="tel"
                      placeholder={t(
                        'shopping-cart__order-block-input-placeholder3',
                      )}
                      onChange={(e) =>
                        dispatch(updateUserPhone(e.target.value))
                      }
                      value={cart.user.phone}
                      required
                    />
                    {areErrorsOn && !cart.user.phone && (
                      <p className="shopping-cart__order-block-error">
                        {t('shopping-cart__order-block-error8')}
                      </p>
                    )}
                  </label>

                  <label className="shopping-cart__order-block-label">
                    {t('shopping-cart__order-block-label5')}
                    <input
                      className={classNames(
                        'shopping-cart__order-block-input',
                        {
                          'shopping-cart__order-block-input--error':
                            areErrorsOn && !cart.user.email,
                        },
                      )}
                      type="email"
                      placeholder={t(
                        'shopping-cart__order-block-input-placeholder5',
                      )}
                      onChange={(e) =>
                        dispatch(updateUserEmail(e.target.value))
                      }
                      value={cart.user.email}
                      required
                    />
                    {areErrorsOn && !cart.user.email && (
                      <p className="shopping-cart__order-block-error">
                        {t('shopping-cart__order-block-error10')}
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
                {t('shopping-cart__order-block-storage-location-label')}
              </p>
              <Link
                to={'https://maps.app.goo.gl/wAdeT2GGibefrzub9'}
                target="_blank"
                rel="noopener noreferrer"
                className="shopping-cart__order-block-storage-location-link"
              >
                <LocationSVG />
                <span className="shopping-cart__order-block-storage-location-link-text">
                  {t('shopping-cart__order-block-storage-location-link-text')}
                </span>
                <MapSearchSVG />
              </Link>
            </div>

            <div className="shopping-cart__order-block-storage-schedule">
              <p className="shopping-cart__order-block-storage-schedule-label">
                {t('shopping-cart__order-block-storage-schedule-label')}
              </p>
              <div className="shopping-cart__order-block-storage-schedule-info">
                <div className="shopping-cart__order-block-storage-schedule-info-block">
                  <NestClockSVG />
                  <p className="shopping-cart__order-block-storage-schedule-info-text">
                    {t(
                      'shopping-cart__order-block-storage-schedule-info-text1',
                    )}
                  </p>
                </div>
                <div className="shopping-cart__order-block-storage-schedule-info-block">
                  <p
                    className="shopping-cart__order-block-storage-schedule-info-text"
                    dangerouslySetInnerHTML={{
                      __html: t(
                        'shopping-cart__order-block-storage-schedule-info-text2',
                      ),
                    }}
                  ></p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
