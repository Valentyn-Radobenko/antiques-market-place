import classNames from 'classnames';
import { SortType } from '../../../types/sorting';
import { SearchLink } from '../../../utils/SearchLink';
import { useSearchParams } from 'react-router-dom';

type Props = {
  sortType: SortType;
};

export const SortingItem: React.FC<Props> = ({ sortType }) => {
  const [searchParams] = useSearchParams();
  const sort = searchParams.get('sort') || '';

  return (
    <SearchLink
      params={{ sort: sortType.slug }}
      className={classNames('setting-item sorting-item', {
        isActive: sort === sortType.slug,
      })}
    >
      {sortType.nameUa}
    </SearchLink>
  );
};
