import classNames from 'classnames';
import { FilterType } from '../../../types/filters';
import { SearchLink } from '../../../utils/SearchLink';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SavingState } from '../../../store/store';

type Props = {
  filterItem: FilterType;
  filterParam: string;
};

export const FilterItem: React.FC<Props> = ({ filterItem, filterParam }) => {
  const [searchParams] = useSearchParams();
  const currentFilters = searchParams.getAll(filterParam) || [];

  const lang = useSelector((state: SavingState) => state.language.language);

  function toggleFilters(param: string) {
    return currentFilters.includes(param) ?
        currentFilters.filter((singleFilter) => singleFilter !== param)
      : [...currentFilters, param];
  }

  return (
    <SearchLink
      className={classNames('setting-item filter-item', {
        isActive: currentFilters.includes(filterItem.slug),
      })}
      params={{
        [filterParam]: toggleFilters(filterItem.slug),
      }}
    >
      {lang === 'ua' && filterItem.nameUa}
      {lang === 'en' && filterItem.nameEng}
    </SearchLink>
  );
};
