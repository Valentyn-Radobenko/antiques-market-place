import classNames from 'classnames';
import { SortType } from '../../../types/sorting';
import { SearchLink } from '../../../utils/SearchLink';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SavingState } from '../../../store/store';

type Props = {
  sortType: SortType;
};

export const SortingItem: React.FC<Props> = ({ sortType }) => {
  const [searchParams] = useSearchParams();
  const sort = searchParams.get('sort') || '';

  const lang = useSelector((state: SavingState) => state.language.language);

  return (
    <SearchLink
      params={{ sort: sortType.slug }}
      className={classNames('setting-item sorting-item', {
        isActive: sort === sortType.slug,
      })}
    >
      {lang === 'ua' && sortType.nameUa}
      {lang === 'en' && sortType.nameEng}
    </SearchLink>
  );
};
