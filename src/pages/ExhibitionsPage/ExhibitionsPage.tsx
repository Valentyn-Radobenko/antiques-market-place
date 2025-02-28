import { Link, NavLink } from 'react-router-dom';

export const ExhibitionsPage = () => {
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
            <ul className="exhibitions__sections-list">
              <li className="exhibitions__sections-item">
                <NavLink
                  to={'all'}
                  className="exhibitions__sections-link"
                >
                  Всі виставки
                </NavLink>
              </li>
              <li className="exhibitions__sections-item">
                <NavLink
                  to={'pending'}
                  className="exhibitions__sections-link"
                >
                  Досі тривають
                </NavLink>
              </li>
              <li className="exhibitions__sections-item">
                <NavLink
                  to={'completed'}
                  className="exhibitions__sections-link"
                >
                  Завершені
                </NavLink>
              </li>
              <li className="exhibitions__sections-item">
                <NavLink
                  to={'planned'}
                  className="exhibitions__sections-link"
                >
                  Заплановані
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
