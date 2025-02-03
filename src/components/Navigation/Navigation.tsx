import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Tooltip } from '../Tooltip/Tooltip';
import { expandedModeType } from '../../types/expandedModeType';

type Props = {
  expandedMode: expandedModeType;
  setExpandedMode: (mode: expandedModeType) => void;
};

const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  classNames('nav__link', { 'nav__link--is-active': isActive });

export const Navigation: React.FC<Props> = ({
  expandedMode,
  setExpandedMode,
}) => {
  const { t } = useTranslation();

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          {expandedMode && <></>}
          <NavLink
            to={'./market'}
            className={getLinkClass}
          >
            {t('navigation.market')}
          </NavLink>
        </li>
        <li className="nav__item">
          <Tooltip
            renderButton={() => (
              <div
                onClick={() => {
                  if (expandedMode === null) {
                    return setExpandedMode('club');
                  }

                  if (expandedMode === 'club') {
                    return setExpandedMode(null);
                  }
                }}
                className="nav__club-big-button"
              >
                <NavLink
                  to={'./'}
                  className={getLinkClass}
                >
                  {t('navigation.collectors_club')}
                </NavLink>
                <button className="nav__club-button"></button>
              </div>
            )}
            renderContent={() => (
              <>
                <button className="nav__club-tooltip-content-but">
                  Виставки
                </button>
                <button className="nav__club-tooltip-content-but">
                  Статті
                </button>
                <button className="nav__club-tooltip-content-but">
                  Обговорення
                </button>
              </>
            )}
            customTooltipClassName="nav__club-tooltip"
            customContentClassName="nav__club-tooltip-content"
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
