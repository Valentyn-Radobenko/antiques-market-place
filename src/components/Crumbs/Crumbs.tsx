import classNames from 'classnames';
import { Link } from 'react-router-dom';

interface Props {
  links: string[];
  titles: string[];
}

export const Crumbs: React.FC<Props> = ({ links, titles }) => {
  return (
    <div className="crumbs">
      {links.map((link, ind) => {
        return ind === 0 ?
            <Link
              to={link}
              className="crumbs__link crumbs__link--inactive"
            >
              {titles[ind]}
            </Link>
          : <>
              <div className="crumbs__chevron"></div>
              <Link
                to={link}
                className={classNames('crumbs__link', {
                  'crumbs__link--active': ind === links.length - 1,
                  'crumbs__link--inactive': ind !== links.length - 1,
                })}
              >
                {titles[ind]}
              </Link>
            </>;
      })}
    </div>
  );
};
