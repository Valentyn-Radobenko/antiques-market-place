import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, SavingState } from '../../store/store';
// import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { Navigation } from '../Navigation/Navigation';
import { Auth } from '../Auth/Auth';
import { HeaderTooltip } from '../Tooltip/HeaderTooltip';
import { ExpQuestions } from './Expanded/ExpQuestions/ExpQuestions';
import { ExpCurrency } from './Expanded/ExpCurrency/ExpCurrency';
import { setLanguage } from '../../store/slices/languageSlice';
import i18n from '../../i18n/i18n';
import { Menu } from '../Menu/Menu';
import { setIsMenuOn } from '../../store/slices/menuSlice';
// import { setAuthMode } from '../../store/slices/authModeSlice';
import { setExpHeader } from '../../store/slices/expHeaderSlice';
import { setExpSearch } from '../../store/slices/expSearchSlice';

export const Header = () => {
  // const { t } = useTranslation();
  const language = useSelector((state: SavingState) => state.language.language);
  const dispatch = useDispatch<AppDispatch>();
  const handleLanguageChange = (lang: 'ua' | 'en') => {
    dispatch(setLanguage(lang));
    i18n.changeLanguage(lang);
  };
  const authMode = useSelector((state: SavingState) => state.authMode.authMode);
  const expHeader = useSelector(
    (state: SavingState) => state.expHeader.expHeader,
  );
  // const isAuthenticated = useSelector(
  //   (state: SavingState) => state.auth.isAuthenticated,
  // );
  const expSearch = useSelector(
    (state: SavingState) => state.expSearch.expSearch,
  );
  const isMenuOn = useSelector((state: SavingState) => state.menu.isMenuOn);

  const getAccountLinkClass = ({ isActive }: { isActive: boolean }) =>
    classNames('header__actions-item header__actions-item-account', {
      'header__actions-item-account--default':
        !expHeader || expHeader === 'club' || expHeader === 'account',
      'header__actions-item-account--inactive':
        expHeader !== 'account' && expHeader && expHeader !== 'club',
      'header__actions-item-account--active': isActive,
    });

  return (
    <>
      {authMode && <Auth />}
      {isMenuOn && <Menu />}
      <header
        className={classNames('header page__header', {
          'header--expanded':
            expHeader && expHeader !== 'search' && expHeader !== 'account',
        })}
      >
        <div className="header__container">
          <Link to={'market'}>
            <div className="header__logo">
              <img
                className="header__logo-icon"
                src="images/header/logo.svg"
                alt="DIKO logo"
              />
              <p className="header__logo-title-main">DIKO</p>
              <img
                className="header__logo-rectangle"
                src="images/header/Rectangle-91.png"
                alt="rectangle"
              />
              <p className="header__logo-title-minor">антикварна платформа </p>
            </div>
          </Link>

          <Navigation
            customClassName="nav--header"
            mode="header"
          />
          <ul className="header__actions">
            <li>
              <div className="header__actions-languages">
                <button
                  onClick={() => handleLanguageChange('ua')}
                  disabled={language === 'ua'}
                  className={classNames('header__actions-language', {
                    'header__actions-language--active': language === 'ua',
                    'header__actions-language--inactive': language === 'en',
                  })}
                >
                  UA
                </button>
                <button
                  onClick={() => handleLanguageChange('en')}
                  disabled={language === 'en'}
                  className={classNames('header__actions-language', {
                    'header__actions-language--active': language === 'en',
                    'header__actions-language--inactive': language === 'ua',
                  })}
                >
                  EN
                </button>
              </div>
            </li>
            <li>
              <button
                onMouseEnter={() => {
                  dispatch(setExpHeader('search'));
                }}
                onMouseLeave={() => {
                  dispatch(setExpHeader(null));
                }}
                onClick={() => dispatch(setExpSearch(!expSearch))}
                className={classNames(
                  'header__actions-item header__actions-item-search',
                  {
                    'header__actions-item-search--active': expSearch,
                    'header__actions-item-search--inactive':
                      !expSearch &&
                      expHeader &&
                      expHeader !== 'club' &&
                      expHeader !== 'search',
                    'header__actions-item-search--default':
                      !expSearch &&
                      (!expHeader ||
                        expHeader === 'club' ||
                        expHeader === 'search'),
                  },
                )}
              ></button>
            </li>
            <li>
              <button
                onMouseEnter={() => {
                  dispatch(setExpHeader('shopping-card'));
                }}
                onMouseLeave={() => {
                  dispatch(setExpHeader(null));
                }}
                className={classNames(
                  'header__actions-item header__actions-item-shopping-card',
                  {
                    'header__actions-item-shopping-card--active': expSearch,
                    'header__actions-item-shopping-card--inactive':
                      !expSearch &&
                      expHeader &&
                      expHeader !== 'club' &&
                      expHeader !== 'shopping-card',
                    'header__actions-item-shopping-card--default':
                      !expSearch &&
                      (!expHeader ||
                        expHeader === 'club' ||
                        expHeader === 'shopping-card'),
                  },
                )}
              ></button>
            </li>
            <li>
              <HeaderTooltip
                renderButton={() => (
                  <div className="header__actions-item-wrapper">
                    <button
                      className={classNames(
                        'header__actions-item header__actions-item-questions',
                        {
                          'header__actions-item-questions--default':
                            !expHeader || expHeader === 'club',
                          'header__actions-item-questions--inactive':
                            expHeader &&
                            expHeader !== 'questions' &&
                            expHeader !== 'club',
                          'header__actions-item-questions--active':
                            expHeader === 'questions',
                        },
                      )}
                    ></button>
                  </div>
                )}
                renderContent={() => <ExpQuestions />}
                mode={'questions'}
                customContentClassName={classNames(
                  {
                    'exp-questions--not-auth': false,
                  },
                  'exp-questions',
                )}
                customTooltipClassName="exp-questions__tooltip"
              />
            </li>
            <li>
              <HeaderTooltip
                renderButton={() => (
                  <div className="header__actions-item-wrapper">
                    <button
                      className={classNames(
                        'header__actions-item header__actions-item-currency',
                        {
                          'header__actions-item-currency--default':
                            !expHeader || expHeader === 'club',
                          'header__actions-item-currency--inactive':
                            expHeader !== 'currency' &&
                            expHeader &&
                            expHeader !== 'club',
                          'header__actions-item-currency--active':
                            expHeader === 'currency',
                        },
                      )}
                    ></button>
                  </div>
                )}
                renderContent={() => <ExpCurrency />}
                mode={'currency'}
                customContentClassName={classNames(
                  {
                    'exp-currency--not-auth': false,
                  },
                  'exp-currency',
                )}
                customTooltipClassName="exp-currency__tooltip"
              />
            </li>
            (
            <li>
              <div className="header__actions-item-wrapper">
                <NavLink
                  onMouseEnter={() => {
                    dispatch(setExpHeader('account'));
                  }}
                  onMouseLeave={() => {
                    dispatch(setExpHeader(null));
                  }}
                  to={'me'}
                  className={getAccountLinkClass}
                ></NavLink>
              </div>
            </li>
            )
            {/* {false && (
              <li>
                <div className="header__auth-buttons">
                  <button
                    onClick={() => dispatch(setAuthMode('login'))}
                    className="header__auth-button header__auth-button--login"
                  >
                    Увійти
                  </button>
                  <button
                    onClick={() => dispatch(setAuthMode('registration'))}
                    className="header__auth-button header__auth-button--reg"
                  >
                    Зареєструватись
                  </button>
                </div>
              </li>
            )} */}
            <li>
              <button
                onClick={() => dispatch(setIsMenuOn(!isMenuOn))}
                className={classNames(
                  'header__actions-item header__actions-item-menu',
                )}
              ></button>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};
