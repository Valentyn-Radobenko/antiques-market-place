import classNames from 'classnames';
import { SearchSVG } from '../Imgs/SearchSVG';
import { useState } from 'react';
import { PageBaseNavigation } from '../PageBaseNavigation/PageBaseNavigation';
import { DropdownOptions } from '../DropdownOptions/DropdownOptions';
import { useTranslation } from 'react-i18next';

type Sortings = {
  id: number;
  name: string;
  types: string[];
};

type Props = {
  sortings: Sortings[];
  pageNavigation: string[];
};

export const NavSortSearch: React.FC<Props> = ({
  pageNavigation,
  sortings,
}) => {
  const [activeInput, setActiveInput] = useState<boolean>(false);
  const { t } = useTranslation();

  return (
    <div className="nav-sort-serach">
      <PageBaseNavigation pageNavigation={pageNavigation} />
      <div
        className={classNames('nav-sort-serach__search-sorting', {
          isActive: activeInput,
        })}
      >
        <div
          className={classNames('nav-sort-serach__search', {
            isActive: activeInput,
          })}
        >
          <SearchSVG className="nav-sort-serach__search-svg" />
          <input
            onBlur={() => setActiveInput(false)}
            onFocus={() => setActiveInput(true)}
            placeholder={t('market-search__input-placeholder')}
            type="text"
            className="nav-sort-serach__input"
          />
        </div>
        <button
          className={classNames('nav-sort-serach__search-button', {
            isActive: activeInput,
          })}
        >
          Знайти
        </button>
        <div
          className={classNames('nav-sort-serach__sorting', {
            isActive: !activeInput,
          })}
        >
          <DropdownOptions sortings={sortings} />
        </div>
      </div>
    </div>
  );
};
