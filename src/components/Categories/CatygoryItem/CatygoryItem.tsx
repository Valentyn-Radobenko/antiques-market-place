import { useSelector } from 'react-redux';
import { Subcategory } from '../../../types/categories';
import { SearchLink } from '../../../utils/SearchLink';
import { SavingState } from '../../../store/store';

type Props = {
  subcategory: Subcategory;
};

export const CatygoryItem: React.FC<Props> = ({ subcategory }) => {
  const lang = useSelector((state: SavingState) => state.language.language);
  return (
    <SearchLink
      className="setting-item"
      params={{}}
    >
      {lang === 'ua' && subcategory.nameUa}
      {lang === 'en' && subcategory.nameEng}
    </SearchLink>
  );
};
