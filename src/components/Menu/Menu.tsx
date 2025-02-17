import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, SavingState } from '../../store/store';
// import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { Navigation } from '../Navigation/Navigation';
import { Auth } from '../Auth/Auth';
import { setLanguage } from '../../store/slices/languageSlice';
import i18n from '../../i18n/i18n';
import { setIsMenuOn } from '../../store/slices/menuSlice';

export const Menu = () => {
  // const { t } = useTranslation();
  const language = useSelector((state: SavingState) => state.language.language);
  const dispatch = useDispatch<AppDispatch>();
  const handleLanguageChange = (lang: 'ua' | 'en') => {
    dispatch(setLanguage(lang));
    i18n.changeLanguage(lang);
  };
  const authMode = useSelector((state: SavingState) => state.authMode.authMode);
  const currency = useSelector((state: SavingState) => state.currency.currency);
  const isAuthenticated = useSelector(
    (state: SavingState) => state.auth.isAuthenticated,
  );
  const isMenuOn = useSelector((state: SavingState) => state.menu.isMenuOn);

  return (
    <>
      {authMode && <Auth />}
      <aside className={classNames('menu')}>
        <div className="menu__top-bar">
          <Link
            onClick={() => dispatch(setIsMenuOn(!isMenuOn))}
            to={'./'}
          >
            <div className="menu__logo">
              <p className="menu__logo-title-main">DIKO</p>
              <img
                className="menu__logo-rectangle"
                src="images/header/Rectangle-91.png"
                alt="rectangle"
              />
              <p className="menu__logo-title-minor">антикварна платформа </p>
            </div>
          </Link>
          <button
            onClick={() => dispatch(setIsMenuOn(!isMenuOn))}
            className={classNames('menu__icon menu__icon--close')}
          ></button>
        </div>

        <div className="menu__content">
          <Navigation
            customClassName="nav--menu"
            mode="menu"
          />
          <div className="menu__rectangle"></div>
          <ul className="menu__actions">
            <li>
              <div className="menu__actions-languages">
                <button
                  onClick={() => handleLanguageChange('ua')}
                  disabled={language === 'ua'}
                  className={classNames('menu__actions-language', {
                    'menu__actions-language--active': language === 'ua',
                    'menu__actions-language--inactive': language === 'en',
                  })}
                >
                  UA
                </button>
                <button
                  onClick={() => handleLanguageChange('en')}
                  disabled={language === 'en'}
                  className={classNames('menu__actions-language', {
                    'menu__actions-language--active': language === 'en',
                    'menu__actions-language--inactive': language === 'ua',
                  })}
                >
                  EN
                </button>
              </div>
            </li>
            <li>
              <div className="menu__dropdown">
                <div className="menu__icon menu__icon--questions"></div>
                <p className="menu__dropdown-text">Питання</p>
                <button className={classNames('nav__club-button')}></button>
              </div>
            </li>

            <li>
              <div className="menu__dropdown">
                <div className="menu__icon menu__icon--currency--inactive"></div>
                <p className="menu__dropdown-text">{`Валюта (${currency})`}</p>
                <button className={classNames('nav__club-button')}></button>
              </div>
            </li>
            <li>
              {isAuthenticated ?
                <div className="menu__icon-wrapper">
                  <Link
                    to={'./me'}
                    className={classNames(
                      'menu__icon menu__icon--account menu__icon--account--inactive',
                    )}
                    onMouseEnter={(e) =>
                      e.currentTarget.classList.add(
                        'menu__icon--account--active',
                      )
                    }
                    onMouseLeave={(e) =>
                      e.currentTarget.classList.remove(
                        'menu__icon--account--active',
                      )
                    }
                  ></Link>
                </div>
              : <div className="menu__dropdown">
                  <div className="menu__icon menu__icon--account--inactive"></div>
                  <p className="menu__dropdown-text">Акаунт</p>
                </div>
              }
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};
