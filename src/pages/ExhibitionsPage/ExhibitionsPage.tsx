import { NavLink, Outlet } from 'react-router-dom';
import classNames from 'classnames';
import { Crumbs } from '../../components/Crumbs/Crumbs';
import { useTranslation } from 'react-i18next';

export const ExhibitionsPage = () => {
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    classNames('exhibitions__sections-link', {
      'exhibitions__sections-link--active': isActive,
    });

  const { t } = useTranslation();

  return (
    <div className="exhibitions">
      <div className="exhibitions__nav-bar">
        <Crumbs
          links={['/club', '/club/exhibitions']}
          titles={[`${t('club')}`, `${t('exhibitions')}`]}
        />

        <div className="exhibitions__heading">
          <h1 className="exhibitions__title reveal hidden">
            {t('exhibitions')}
          </h1>
          <nav className="exhibitions__sections reveal hidden">
            <NavLink
              to={'all'}
              className={getLinkClass}
            >
              {t('exhibitions__sections-link')}
            </NavLink>
            <NavLink
              to={'ongoing'}
              className={getLinkClass}
            >
              {t('exhibitions__sections-link2')}
            </NavLink>
            <NavLink
              to={'completed'}
              className={getLinkClass}
            >
              {t('exhibitions__sections-link3')}
            </NavLink>
            <NavLink
              to={'planned'}
              className={getLinkClass}
            >
              {t('exhibitions__sections-link4')}
            </NavLink>
          </nav>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
