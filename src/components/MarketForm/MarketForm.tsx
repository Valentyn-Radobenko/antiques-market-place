import classNames from 'classnames';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchSVG } from '../Imgs/SearchSVG';
import { getSearchWith } from '../../utils/SearchHelper';

type Props = {
  searchQuery: string | null;
};

export const MarketForm: React.FC<Props> = ({ searchQuery }) => {
  const [focus, setFocus] = useState(true);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchPrams] = useSearchParams();

  return (
    <div className="market-search">
      {/* <form
        className={classNames('market-search', {
          isActive: focus,
        })}
        onSubmit={() => setSearchPrams({ query })}
      >
        <SearchSVG
          className={classNames('market-search__search-icon', {
            isActive: focus,
          })}
        />
        <input
          value={query}
          placeholder="Я шукаю..."
          className="market-search__input"
          type="text"
          onFocus={() => setFocus(true)}
          onChange={(e) => setQuery(e.target.value)}
          onBlur={() => setFocus(false)}
        />
        <button className="market-search__button">Знайти</button>
      </form> */}
      <form
        tabIndex={-1}
        onBlur={(e) => {
          if (e.currentTarget.contains(e.relatedTarget as Node)) {
            return;
          }
          setFocus(false);
        }}
        onFocus={() => setFocus(true)}
        className={classNames('market-search__form', {
          isActive: focus,
        })}
        onSubmit={(e) => {
          e.preventDefault();
          setSearchPrams(
            getSearchWith(searchParams, { query: query ? query : null }),
          );
          setFocus(false);
        }}
      >
        <div
          className={classNames('market-search__search', {
            isActive: focus,
          })}
        >
          <SearchSVG
            className={classNames('market-search__search-svg', {
              isActive: focus,
            })}
          />
          <input
            autoFocus={focus}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Пошук товару"
            type="text"
            className="market-search__input"
            value={query}
          />
        </div>
        <button
          type="submit"
          className={classNames('market-search__search-button', {
            isActive: focus,
          })}
          onClick={() => console.log('clisk')}
        >
          Знайти
        </button>
      </form>
      {searchQuery && (
        <h2 className="market-search__h3">
          Результати пошуку“
          <span className="market-search__green-word">{searchQuery}</span>”
        </h2>
      )}
    </div>
  );
};
