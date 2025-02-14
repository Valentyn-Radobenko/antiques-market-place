import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { HeaderTooltip } from '../Tooltip/HeaderTooltip';
import { ExpClub } from '../Header/Expanded/ExpClub/ExpClub';
import { useSelector } from 'react-redux';
import { SavingState } from '../../store/store';

type Props = {
  customClassName?: string;
};

const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  classNames('nav__link', { 'nav__link--is-active': isActive });

export const Navigation: React.FC<Props> = ({ customClassName }) => {
  const { t } = useTranslation();
  const expHeader = useSelector(
    (state: SavingState) => state.expHeader.expHeader,
  );

  return (
    <nav className={`nav ${customClassName}`}>
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
                <div
                  className={classNames('nav__club-wrapper', {
                    'nav__club-wrapper--active': expHeader === 'club',
                  })}
                >
                  <NavLink
                    to={'./'}
                    className={getLinkClass}
                  >
                    {t('navigation.collectors_club')}
                  </NavLink>
                  <button className="nav__club-button"></button>
                </div>
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
