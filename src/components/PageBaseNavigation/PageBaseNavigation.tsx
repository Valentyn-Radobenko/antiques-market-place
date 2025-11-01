import classNames from 'classnames';
import SimpleBar from 'simplebar-react';
import { SearchLink } from '../../utils/SearchLink';
import { BaseNavigation } from '../../types/baseNavigation';
import { useSearchParams } from 'react-router-dom';

type Props = {
  pageNavigation: BaseNavigation[];
};

export const PageBaseNavigation: React.FC<Props> = ({ pageNavigation }) => {
  const [searchPatams] = useSearchParams();
  const filterBy = searchPatams.get('filterBy');
  return (
    <SimpleBar className="page-base-navigation">
      <div className="page-base-navigation__filters">
        {pageNavigation.map((a) => (
          <SearchLink
            params={{ filterBy: a.mainOption ? null : a.slug }}
            key={a.slug}
            className={classNames('page-base-navigation__filter', {
              isActive: filterBy === a.slug,
            })}
          >
            {a.ua}
          </SearchLink>
        ))}
      </div>
    </SimpleBar>
  );
};
