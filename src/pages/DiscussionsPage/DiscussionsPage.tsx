import { Link, NavLink, Outlet } from 'react-router-dom';
import classNames from 'classnames';

export const ExhibitionsPage = () => {
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    classNames('exhibitions__sections-link', {
      'exhibitions__sections-link--active': isActive,
    });

  return (
    <div className="exhibitions">
      <div className="exhibitions__nav-bar">
        <div className="exhibitions__crumbs">
          <Link
            to={'/club'}
            className="exhibitions__crumbs-link exhibitions__crumbs-link--inactive"
          >
            Клуб колекціонерів
          </Link>
          <div className="exhibitions__crumbs-chevron"></div>
          <Link
            to={'/club/exhibitions'}
            className="exhibitions__crumbs-link exhibitions__crumbs-link--active"
          >
            Виставки
          </Link>
        </div>

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
