import { Link, NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { HeaderTooltip } from '../Tooltip/HeaderTooltip';
import { ExpClub } from '../Header/Expanded/ExpClub/ExpClub';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, SavingState } from '../../store/store';
import { setIsMenuOn } from '../../store/slices/menuSlice';
import { Dropdown } from '../Dropdown/Dropdown';
import { Arrow } from '../Imgs/Arrow';

type Props = {
  customClassName?: string;
  mode: 'header' | 'menu';
};

export const Navigation: React.FC<Props> = ({ customClassName, mode }) => {
  const { t } = useTranslation();
  const expHeader = useSelector(
    (state: SavingState) => state.expHeader.expHeader,
  );
  const dispatch = useDispatch<AppDispatch>();

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    classNames('nav__link', {
      'nav__link--is-active': isActive,
      'nav--menu__link': mode === 'menu',
    });

  const location = useLocation();
  const isClubActive = location.pathname.includes('/club');

  return (
    <nav className={`nav ${customClassName}`}>
      <ul
        className={classNames('nav__list', {
          [`${customClassName}__list`]: customClassName,
        })}
      >
        <li
          className={classNames('nav__item', {
            [`${customClassName}__item`]: customClassName,
          })}
        >
          <NavLink
            onClick={() => dispatch(setIsMenuOn(false))}
            to={'market'}
            className={getLinkClass}
          >
            {t('navigation.market')}
          </NavLink>
        </li>
        <li
          className={classNames('nav__item', {
            [`${customClassName}__item`]: customClassName,
          })}
        >
          {mode === 'header' ?
            <HeaderTooltip
              renderButton={() => (
                <div
                  className={classNames('nav__club-big-button', {
                    [`${customClassName}__club-big-button`]: customClassName,
                  })}
                >
                  <div
                    className={classNames('nav__club-wrapper', {
                      'nav__club-wrapper--active':
                        expHeader === 'club' && mode === 'header',
                      [`${customClassName}__club-wrapper`]: customClassName,
                    })}
                  >
                    <NavLink
                      to={'club'}
                      onClick={() => dispatch(setIsMenuOn(false))}
                      className={getLinkClass}
                    >
                      {t('navigation.collectors_club')}
                    </NavLink>
                    <Arrow
                      className={classNames('nav__club-button', {
                        [`${customClassName}__club-button`]: customClassName,
                        'nav__club-button--active': isClubActive,
                      })}
                    />
                  </div>
                </div>
              )}
              renderContent={() => <ExpClub />}
              mode="club"
              customContentClassName="exp-club"
              customTooltipClassName="exp-club__tooltip"
            />
          : <Dropdown
              buttonArea="arrow"
              buttonTitle={() => (
                <NavLink
                  to={'club'}
                  onClick={() => dispatch(setIsMenuOn(false))}
                  className={getLinkClass}
                >
                  {t('navigation.collectors_club')}
                </NavLink>
              )}
              renderContent={() => (
                <div
                  className={classNames('menu__options menu__options--club')}
                >
                  <Link
                    onClick={() => dispatch(setIsMenuOn(false))}
                    to={'club/exhibitions'}
                    className="menu__option"
                  >
                    {t('exhibitions')}
                  </Link>
                  <Link
                    onClick={() => dispatch(setIsMenuOn(false))}
                    to={'club/articles'}
                    className="menu__option"
                  >
                    {t('articles')}
                  </Link>
                  <Link
                    onClick={() => dispatch(setIsMenuOn(false))}
                    to={'club/discussions'}
                    className="menu__option"
                  >
                    {t('discussions')}
                  </Link>
                </div>
              )}
              customClassName="menu__dropdown"
            />
          }
        </li>
        <li
          className={classNames('nav__item', {
            [`${customClassName}__item`]: customClassName,
          })}
        >
          <NavLink
            onClick={() => dispatch(setIsMenuOn(false))}
            to={'expertise'}
            className={getLinkClass}
          >
            {t('navigation.expertise')}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
