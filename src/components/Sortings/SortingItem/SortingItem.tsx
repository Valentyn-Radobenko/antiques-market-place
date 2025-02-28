import { SortType } from '../../../types/sorting';
import { SearchLink } from '../../../utils/SearchLink';

type Props = {
  sortType: SortType;
};

export const SortingItem: React.FC<Props> = ({ sortType }) => {
  return (
    <div className="sortingitem">
      <div className="sortingitem__title">
        <SearchLink
          className="sortingitem__link"
          params={{}}
        >
          {sortType.nameUa}
        </SearchLink>
      </div>
    </div>
  );
};
