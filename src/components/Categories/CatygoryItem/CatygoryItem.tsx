import { Subcategory } from '../../../types/categories';
import { SearchLink } from '../../../utils/SearchLink';

type Props = {
  subcategory: Subcategory;
};

export const CatygoryItem: React.FC<Props> = ({ subcategory }) => {
  return (
    <SearchLink
      className="setting-item"
      params={{}}
    >
      {subcategory.nameUa}
    </SearchLink>
  );
};
