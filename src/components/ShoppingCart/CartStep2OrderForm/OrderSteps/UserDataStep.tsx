import { useDispatch, useSelector } from 'react-redux';
import { useIsMobile } from '../../../../hooks/useMediaQuery';
import { Dropdown } from '../../../Dropdown/Dropdown';
import { AppDispatch, SavingState } from '../../../../store/store';
import classNames from 'classnames';
import React from 'react';
import {
  updateUserCity,
  updateUserCountry,
  updateUserEmail,
  updateUserFirstName,
  updateUserLastName,
  updateUserPhone,
} from '../../../../store/slices/shoppingCartSlice';
import { InkHighlighterSVG } from '../../../Imgs/InkHighlighterSVG';
import { useTranslation } from 'react-i18next';

type Props = {
  areErrorsOn: boolean;
};

export const UserDataStep: React.FC<Props> = ({ areErrorsOn }) => {
  const isPhone = useIsMobile();
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state: SavingState) => state.shoppingCart);
  const { t } = useTranslation();

  return (
    <div className="shopping-cart__order-block">
      <div className="shopping-cart__order-block-top">
        {isPhone ?
          <h3 className="shopping-cart__order-block-title">
            &nbsp;{t('shopping-cart__order-block-title5')}
          </h3>
        : <h3 className="shopping-cart__order-block-title">
            {t('shopping-cart__order-block-title5')}
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
                  className={classNames('shopping-cart__order-block-input', {
                    'shopping-cart__order-block-input--error':
                      areErrorsOn && !cart.user.firstName,
                  })}
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
                  className={classNames('shopping-cart__order-block-input', {
                    'shopping-cart__order-block-input--error':
                      areErrorsOn && !cart.user.lastName,
                  })}
                  type="text"
                  placeholder={t(
                    'shopping-cart__order-block-input-placeholder2',
                  )}
                  onChange={(e) => dispatch(updateUserLastName(e.target.value))}
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
                  className={classNames('shopping-cart__order-block-input', {
                    'shopping-cart__order-block-input--error':
                      areErrorsOn && !cart.user.phone,
                  })}
                  type="tel"
                  placeholder={t(
                    'shopping-cart__order-block-input-placeholder3',
                  )}
                  onChange={(e) => dispatch(updateUserPhone(e.target.value))}
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
                  className={classNames('shopping-cart__order-block-input', {
                    'shopping-cart__order-block-input--error':
                      areErrorsOn && !cart.user.email,
                  })}
                  type="email"
                  placeholder={t(
                    'shopping-cart__order-block-input-placeholder5',
                  )}
                  onChange={(e) => dispatch(updateUserEmail(e.target.value))}
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

        <Dropdown
          customClassName="shopping-cart__order-block-dropdown"
          buttonArea="all"
          buttonTitle={() => (
            <p className="shopping-cart__order-block-dropdown-option">
              {cart.user.country ?
                cart.user.country
              : t('shopping-cart__order-block-placeholder-country')}
              ,{' '}
              {cart.user.city ?
                cart.user.city
              : t('shopping-cart__order-block-placeholder-city')}
            </p>
          )}
          renderContent={() => (
            <div className="shopping-cart__order-block-inputs">
              <label className="shopping-cart__order-block-label">
                {t('shopping-cart__order-block-placeholder-country')}
                <input
                  className={classNames('shopping-cart__order-block-input', {
                    'shopping-cart__order-block-input--error':
                      areErrorsOn && !cart.user.country,
                  })}
                  type="text"
                  placeholder={t(
                    'shopping-cart__order-block-input-placeholder6',
                  )}
                  onChange={(e) => dispatch(updateUserCountry(e.target.value))}
                  value={cart.user.country}
                  required
                />
                {areErrorsOn && !cart.user.country && (
                  <p className="shopping-cart__order-block-error">
                    {t('shopping-cart__order-block-error12')}
                  </p>
                )}
              </label>

              <label className="shopping-cart__order-block-label">
                {t('shopping-cart__order-block-placeholder-city')}
                <input
                  className={classNames('shopping-cart__order-block-input', {
                    'shopping-cart__order-block-input--error':
                      areErrorsOn && !cart.user.city,
                  })}
                  type="text"
                  placeholder={t(
                    'shopping-cart__order-block-input-placeholder7',
                  )}
                  onChange={(e) => dispatch(updateUserCity(e.target.value))}
                  value={cart.user.city}
                  required
                />
                {areErrorsOn && !cart.user.city && (
                  <p className="shopping-cart__order-block-error">
                    {t('shopping-cart__order-block-error13')}
                  </p>
                )}
              </label>
            </div>
          )}
          customAfterTitle={() => <InkHighlighterSVG />}
        />
      </div>
    </div>
  );
};
