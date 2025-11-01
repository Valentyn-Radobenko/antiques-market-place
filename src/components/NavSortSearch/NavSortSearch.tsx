import classNames from 'classnames';
import { SearchSVG } from '../Imgs/SearchSVG';
import { useState } from 'react';
import { PageBaseNavigation } from '../PageBaseNavigation/PageBaseNavigation';
import { DropdownOptions } from '../DropdownOptions/DropdownOptions';
import { BaseNavSort, BaseNavigation } from '../../types/baseNavigation';
import { ArrowTale } from '../Imgs/ArrowTale';
import { useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../../utils/SearchHelper';

type Props = {
  sortings: BaseNavSort[];
  pageNavigation: BaseNavigation[];
};

export const NavSortSearch: React.FC<Props> = ({
  pageNavigation,
  sortings,
}) => {
  const [activeInput, setActiveInput] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [searchParams, setSearchParams] = useSearchParams();
  searchParams.get('query');

  return (
    <div className="nav-sort-serach">
      <PageBaseNavigation pageNavigation={pageNavigation} />
      <div
        className={classNames('nav-sort-serach__search-sorting', {
          isActive: activeInput,
        })}
        onBlur={(e) => {
          if (e.currentTarget.contains(e.relatedTarget as Node)) {
            return;
          }
          setActiveInput(false);
        }}
      >
        <div
          onClick={() => {
            setQuery('');
            setSearchParams(getSearchWith(searchParams, { query: null }));
          }}
          className="nav-sort-serach__arrow-wrapper"
        >
          <ArrowTale />
        </div>

        <div
          className={classNames('nav-sort-serach__search', {
            isActive: activeInput,
          })}
        >
          <SearchSVG className="nav-sort-serach__search-svg" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setActiveInput(true)}
            placeholder="Пошук товару"
            type="text"
            className="nav-sort-serach__input"
          />
        </div>
        <button
          className={classNames('nav-sort-serach__search-button', {
            isActive: activeInput,
          })}
          onClick={() => {
            setSearchParams({ query: query });
            setActiveInput(false);
          }}
        >
          Знайти
        </button>
        <button
          onClick={() => {
            setQuery('');
            setSearchParams(getSearchWith(searchParams, { query: null }));
          }}
          className="nav-sort-serach__decline"
        >
          скасувати
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
