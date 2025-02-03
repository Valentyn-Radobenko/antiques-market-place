import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { HeaderTooltip } from '../Tooltip/HeaderTooltip';
import { ExpClub } from '../Header/Expanded/ExpClub/ExpClub';

const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  classNames('nav__link', { 'nav__link--is-active': isActive });

export const Navigation: React.FC = () => {
  const { t } = useTranslation();

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink
            to={'./market'}
            className={getLinkClass}
          >
            {t('navigation.market')}
          </NavLink>
        </li>
        <li className="nav__item">
          <HeaderTooltip
            renderButton={() => (
              <div className="nav__club-big-button">
                <NavLink
                  to={'./'}
                  className={getLinkClass}
                >
                  {t('navigation.collectors_club')}
                </NavLink>
                <button className="nav__club-button"></button>
              </div>
            )}
            renderContent={() => <ExpClub />}
            mode="club"
            customContentClassName="exp-club"
            customTooltipClassName="exp-club__tooltip"
          />
        </li>
        <li className="nav__item">
          <NavLink
            to={'./expertise'}
            className={getLinkClass}
          >
            {t('navigation.expertise')}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
