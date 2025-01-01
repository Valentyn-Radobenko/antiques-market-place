import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  classNames('nav__link', { 'nav__link--is-active': isActive });

export const Navigation: React.FC = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to={'./market'} className={getLinkClass}>
            Маркет
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to={'./'} className={getLinkClass}>
            Клуб колекціонерів
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to={'./expertise'} className={getLinkClass}>
            Експертиза
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
