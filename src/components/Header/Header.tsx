import { Dropdown } from '../Dropdown/Dropdown';
import { availableCurrencies } from '../../data/availableCurrencies';
import { Navigation } from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header page__header">
      <div className="header__container">
        <Link to={'./'} className="header__logo">
          D&KO
        </Link>
        <Navigation />
        <label className="header__search" htmlFor="search-input">
          <div className="header__search-bar">
            {''}
            <input
              id="search-input"
              type="text"
              className="header__search-input"
            />
            <button className="header__search-button">Пошук</button>
          </div>
        </label>
        <ul className="header__actions">
          <li>
            <div
              className="header__actions-item 
            header__actions-item-languages"
              aria-label="Перемикач мови"
            >
              <p
                className="header__actions-item 
            header__actions-item-language--active"
              >
                UA
              </p>
              <p
                className="header__actions-item 
            header__actions-item-language--active"
              >
                |
              </p>
              <p
                className="header__actions-item 
            header__actions-item-language"
              >
                EN
              </p>
            </div>
          </li>
          <li>
            <Dropdown
              renderContent={() => (
                <>
                  <button className="header__dropdown-question">
                    Чи є сертифікат експертизи?
                  </button>
                  <button className="header__dropdown-question">
                    Чи можна продати через платформу?
                  </button>
                  <button className="header__dropdown-question">
                    Як купити?
                  </button>
                  <button className="header__dropdown-question">
                    Правила сайту
                  </button>
                  <button className="header__dropdown-question">
                    Залишити питання
                  </button>
                </>
              )}
              customDropdownClassName="header__dropdown-questions"
              customContentClassName="header__dropdown-questions-content"
              customButtonClassName="header__actions-item
              header__actions-item-questions
              header__actions-item-questions--inactive"
            />
          </li>
          <li>
            <Dropdown
              customButtonClassName="header__actions-item 
              header__actions-item-currency"
              button={
                <>
                  <p className="header__actions-item-currency-text">USD</p>
                  <div className="header__actions-item-currency-button"></div>
                </>
              }
              renderContent={() => (
                <>
                  {availableCurrencies.map(currency => (
                    <button
                      key={currency}
                      className="header__dropdown-currency-button"
                    >
                      {currency}
                    </button>
                  ))}
                </>
              )}
              customDropdownClassName="header__dropdown-currency"
              customContentClassName="header__dropdown-currency-content"
            />
          </li>
          <li>
            <Dropdown
              customButtonClassName="header__actions-item 
              header__actions-item-user"
              renderContent={() => (
                <>
                  <button className="header__dropdown-user-button">
                    Увійти в аккаунт
                  </button>
                  <button className="header__dropdown-user-button">
                    Зареєструватись
                  </button>
                </>
              )}
              customDropdownClassName="header__dropdown-user"
              customContentClassName="header__dropdown-user-content"
            />
          </li>
        </ul>
      </div>
    </header>
  );
};
