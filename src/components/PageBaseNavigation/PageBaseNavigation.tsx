import classNames from 'classnames';
import SimpleBar from 'simplebar-react';

type Props = {
  pageNavigation: string[];
};

export const PageBaseNavigation: React.FC<Props> = ({ pageNavigation }) => {
  return (
    <SimpleBar className="page-base-navigation">
      <div className="page-base-navigation__filters">
        {pageNavigation.map((a, i) => (
          <p
            key={i}
            className={classNames('page-base-navigation__filter', {
              isActive: i === 0, //доробити
            })}
          >
            {a}
          </p>
        ))}
      </div>
    </SimpleBar>
  );
};
