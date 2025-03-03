import classNames from 'classnames';
import { SortType } from '../../../types/sorting';
import { SearchLink } from '../../../utils/SearchLink';

type Props = {
  sortType: SortType;
};

export const SortingItem: React.FC<Props> = ({ sortType }) => {
  return (
    <SearchLink
      params={{ sort: sortType.slug }}
      className={classNames('setting-item sorting-item', {
        isActive: false,
      })}
    >
      {sortType.nameUa}
    </SearchLink>
  );
};
