import { NavLink, Outlet } from 'react-router-dom';
import classNames from 'classnames';
import { Crumbs } from '../../components/Crumbs/Crumbs';

export const ExhibitionsPage = () => {
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    classNames('exhibitions__sections-link', {
      'exhibitions__sections-link--active': isActive,
    });

  return (
    <div className="exhibitions">
      <div className="exhibitions__nav-bar">
        <Crumbs links={['/club', '/club/exhibitions']} />

        <div className="exhibitions__heading">
          <h1 className="exhibitions__title">Виставки</h1>
          <nav className="exhibitions__sections">
            <NavLink
              to={'all'}
              className={getLinkClass}
            >
              Всі виставки
            </NavLink>
            <NavLink
              to={'ongoing'}
              className={getLinkClass}
            >
              Досі тривають
            </NavLink>
            <NavLink
              to={'completed'}
              className={getLinkClass}
            >
              Завершені
            </NavLink>
            <NavLink
              to={'planned'}
              className={getLinkClass}
            >
              Заплановані
            </NavLink>
          </nav>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
