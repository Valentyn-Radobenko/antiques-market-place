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

type Props = {
  areErrorsOn: boolean;
};

export const UserDataStep: React.FC<Props> = ({ areErrorsOn }) => {
  const isPhone = useIsMobile();
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state: SavingState) => state.shoppingCart);
  return (
    <div className="shopping-cart__order-block">
      <div className="shopping-cart__order-block-top">
        {isPhone ?
          <h3 className="shopping-cart__order-block-title">&nbsp;Ваші дані</h3>
        : <h3 className="shopping-cart__order-block-title">Ваші дані</h3>}
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
                  className={classNames('shopping-cart__order-block-input', {
                    'shopping-cart__order-block-input--error':
                      areErrorsOn && !cart.user.firstName,
                  })}
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
                  className={classNames('shopping-cart__order-block-input', {
                    'shopping-cart__order-block-input--error':
                      areErrorsOn && !cart.user.lastName,
                  })}
                  type="text"
                  placeholder="Містеряков"
                  onChange={(e) => dispatch(updateUserLastName(e.target.value))}
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
                  className={classNames('shopping-cart__order-block-input', {
                    'shopping-cart__order-block-input--error':
                      areErrorsOn && !cart.user.phone,
                  })}
                  type="tel"
                  placeholder="+38 093 674 34 67"
                  onChange={(e) => dispatch(updateUserPhone(e.target.value))}
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
                  className={classNames('shopping-cart__order-block-input', {
                    'shopping-cart__order-block-input--error':
                      areErrorsOn && !cart.user.email,
                  })}
                  type="email"
                  placeholder="artemmisti@gmail.com"
                  onChange={(e) => dispatch(updateUserEmail(e.target.value))}
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
                  className={classNames('shopping-cart__order-block-input', {
                    'shopping-cart__order-block-input--error':
                      areErrorsOn && !cart.user.country,
                  })}
                  type="text"
                  placeholder="Україна"
                  onChange={(e) => dispatch(updateUserCountry(e.target.value))}
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
                  className={classNames('shopping-cart__order-block-input', {
                    'shopping-cart__order-block-input--error':
                      areErrorsOn && !cart.user.city,
                  })}
                  type="text"
                  placeholder="Київ"
                  onChange={(e) => dispatch(updateUserCity(e.target.value))}
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
  );
};
