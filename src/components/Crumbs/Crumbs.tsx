import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  links: string[];
  titles: string[];
  customClassName?: string;
}

export const Crumbs: React.FC<Props> = ({
  links,
  titles,
  customClassName = '',
}) => {
  return (
    <div className={`crumbs ${customClassName} hidden reveal`}>
      {links.map((link, ind) => {
        return ind === 0 ?
            <Link
              key={ind + link}
              to={link}
              className={`crumbs__link crumbs__link--inactive ${customClassName}__link`}
            >
              {titles[ind]}
            </Link>
          : <React.Fragment key={ind + link}>
              <div className="crumbs__chevron"></div>
              <Link
                to={link}
                className={classNames(
                  'crumbs__link',
                  `${customClassName}__link`,
                  {
                    'crumbs__link--active': ind === links.length - 1,
                    'crumbs__link--inactive': ind !== links.length - 1,
                  },
                )}
              >
                {titles[ind]}
              </Link>
            </React.Fragment>;
      })}
    </div>
  );
};
