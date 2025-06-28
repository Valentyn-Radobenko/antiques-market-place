import classNames from 'classnames';
import { Link } from 'react-router-dom';

interface Props {
  links: string[];
}

export const Crumbs: React.FC<Props> = ({ links }) => {
  return (
    <div className="crumbs">
      <Link
        to={links[0]}
        className="crumbs__link crumbs__link--inactive"
      >
        Клуб колекціонерів
      </Link>

      {links.map((link, ind) => {
        return (
          <>
            <div className="crumbs__chevron"></div>
            <Link
              to={link}
              className={classNames('crumbs__link', {
                'crumbs__link--active': ind === links.length - 1,
                'crumbs__link--inactive': ind !== links.length - 1,
              })}
            >
              Виставки
            </Link>
          </>
        );
      })}
    </div>
  );
};
