import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SavingState } from '../../store/store';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { Navigation } from '../Navigation/Navigation';
import { Auth } from '../Auth/Auth';
import { HeaderTooltip } from '../Tooltip/HeaderTooltip';
import { ExpQuestions } from './Expanded/ExpQuestions/ExpQuestions';
import { ExpLanguage } from './Expanded/ExpLanguage/ExpLanguage';
import { ExpCurrency } from './Expanded/ExpCurrency/ExpCurrency';
import { ExpAccount } from './Expanded/ExpAccount/ExpAccount';

export const Header = () => {
  const { t } = useTranslation();
  const authMode = useSelector((state: SavingState) => state.authMode.authMode);
  const expHeader = useSelector(
    (state: SavingState) => state.expHeader.expHeader,
  );
  const token = useSelector((state: SavingState) => state.auth.token);

  return (
    <>
      {authMode && <Auth />}
      <header
        className={classNames('header page__header', {
          'header--expanded': expHeader,
        })}
      >
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
                placeholder="Пошук товару"
              />
              <button className="header__search-button">
                {t('header.search.button')}
              </button>
            </div>
          </label>

          <ul className="header__actions">
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
                        'header__actions-item header__actions-item-language',
                        {
                          'header__actions-item-language--inactive':
                            expHeader !== 'language',
                          'header__actions-item-language--active':
                            expHeader === 'language',
                        },
                      )}
                    ></button>
                  </div>
                )}
                renderContent={() => <ExpLanguage />}
                mode={'language'}
                customContentClassName="exp-language"
                customTooltipClassName="exp-language__tooltip"
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
              {token ?
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
          </ul>
        </div>
      </header>
      {/* {expandedMode === 'club' && <ExpClub />}
      {expandedMode === 'questions' && <ExpQuestions />}
      {expandedMode === 'language' && <ExpLanguage />}
      {expandedMode === 'currency' && <ExpCurrency />}
      {expandedMode === 'account' && <ExpAccount />} */}
    </>
  );
};
