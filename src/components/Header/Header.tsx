import { Dropdown } from '../Dropdown/Dropdown';
import { availableCurrencies } from '../../data/availableCurrencies';
import { Navigation } from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import i18n from '../../i18n/i18n';
import { useTranslation } from 'react-i18next';
import { setLanguage } from '../../store/slices/languageSlice';

export const Header = () => {
  const language = useSelector((state: RootState) => state.language.language);
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();

  const handleLanguageChange = (lang: 'ua' | 'en') => {
    i18n.changeLanguage(lang);
    dispatch(setLanguage(lang));
  };

  return (
    <header className="header page__header">
      <div className="header__container">
        <Link
          to={'./'}
          className="header__logo"
        >
          D&KO
        </Link>
        <Navigation />
        <label
          className="header__search"
          htmlFor="search-input"
        >
          <div className="header__search-bar">
            {''}
            <input
              id="search-input"
              type="text"
              className="header__search-input"
            />
            <button className="header__search-button">
              {t('header.search.button')}
            </button>
          </div>
        </label>
        <ul className="header__actions">
          <li>
            <div
              className="header__actions-item 
            header__actions-item-languages"
              aria-label={t('header.languageSwitcher.ariaLabel')}
            >
              <button
                onClick={() => handleLanguageChange('ua')}
                disabled={language === 'ua'}
                className={`header__actions-item 
            ${language === 'ua' ? 'header__actions-item-language-active' : 'header__actions-item-language'}`}
              >
                UA
              </button>
              <p
                className="header__actions-item 
            header__actions-item-language-active"
              >
                |
              </p>
              <button
                onClick={() => handleLanguageChange('en')}
                disabled={language === 'en'}
                className={`header__actions-item 
                ${language === 'en' ? 'header__actions-item-language-active' : 'header__actions-item-language'}`}
              >
                EN
              </button>
            </div>
          </li>
          <li>
            <Dropdown
              renderContent={() => (
                <>
                  <button className="header__dropdown-question">
                    {t('header.dropdownQuestions.certificate')}
                  </button>
                  <button className="header__dropdown-question">
                    {t('header.dropdownQuestions.sell')}
                  </button>
                  <button className="header__dropdown-question">
                    {t('header.dropdownQuestions.buy')}
                  </button>
                  <button className="header__dropdown-question">
                    {t('header.dropdownQuestions.rules')}
                  </button>
                  <button className="header__dropdown-question">
                    {t('header.dropdownQuestions.leaveQuestion')}
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
                  {availableCurrencies.map((currency) => (
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
                    {t('header.user.login')}
                  </button>
                  <button className="header__dropdown-user-button">
                    {t('header.user.register')}
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
