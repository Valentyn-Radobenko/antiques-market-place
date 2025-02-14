import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, SavingState } from '../../store/store';
// import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { Navigation } from '../Navigation/Navigation';
import { Auth } from '../Auth/Auth';
import { HeaderTooltip } from '../Tooltip/HeaderTooltip';
import { ExpQuestions } from './Expanded/ExpQuestions/ExpQuestions';
import { ExpCurrency } from './Expanded/ExpCurrency/ExpCurrency';
import { ExpAccount } from './Expanded/ExpAccount/ExpAccount';
import { setLanguage } from '../../store/slices/languageSlice';
import i18n from '../../i18n/i18n';

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
  const isAuthenticated = useSelector(
    (state: SavingState) => state.auth.isAuthenticated,
  );
  const expSearch = useSelector(
    (state: SavingState) => state.expSearch.expSearch,
  );

  return (
    <>
      {authMode && <Auth />}
      <header
        className={classNames('header page__header', {
          'header--expanded': expHeader,
        })}
      >
        <div className="header__container">
          <Link to={'./'}>
            <div className="header__logo">
              <p className="header__logo-title-main">DIKO</p>
              <img
                className="header__logo-rectangle"
                src="images/header/Rectangle-91.png"
                alt="rectangle"
              />
              <p className="header__logo-title-minor">антикварна платформа </p>
            </div>
          </Link>

          <Navigation customClassName="header__nav" />
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
                className={classNames(
                  'header__actions-item header__actions-item-search',
                  {
                    'header__actions-item-search--active': expSearch,
                    'header__actions-item-search--inactive': !expSearch,
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
                          'header__actions-item-questions--inactive':
                            expHeader !== 'questions',
                          'header__actions-item-questions--active':
                            expHeader === 'questions',
                        },
                      )}
                    ></button>
                  </div>
                )}
                renderContent={() => <ExpQuestions />}
                mode={'questions'}
                customContentClassName="exp-questions"
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
                          'header__actions-item-currency--inactive':
                            expHeader !== 'currency',
                          'header__actions-item-currency--active':
                            expHeader === 'currency',
                        },
                      )}
                    ></button>
                  </div>
                )}
                renderContent={() => <ExpCurrency />}
                mode={'currency'}
                customContentClassName="exp-currency"
                customTooltipClassName="exp-currency__tooltip"
              />
            </li>
            <li>
              {isAuthenticated ?
                <div className="header__actions-item-wrapper">
                  <Link
                    to={'./me'}
                    className={classNames(
                      'header__actions-item header__actions-item-account header__actions-item-account--inactive',
                    )}
                    onMouseEnter={(e) =>
                      e.currentTarget.classList.add(
                        'header__actions-item-account--active',
                      )
                    }
                    onMouseLeave={(e) =>
                      e.currentTarget.classList.remove(
                        'header__actions-item-account--active',
                      )
                    }
                  ></Link>
                </div>
              : <HeaderTooltip
                  renderButton={() => (
                    <div className="header__actions-item-wrapper">
                      <button
                        className={classNames(
                          'header__actions-item header__actions-item-account',
                          {
                            'header__actions-item-account--inactive':
                              expHeader !== 'account',
                            'header__actions-item-account--active':
                              expHeader === 'account',
                          },
                        )}
                      ></button>
                    </div>
                  )}
                  renderContent={() => <ExpAccount />}
                  mode={'account'}
                  customContentClassName="exp-account"
                  customTooltipClassName="exp-account__tooltip"
                />
              }
            </li>
            <li>
              <button
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
