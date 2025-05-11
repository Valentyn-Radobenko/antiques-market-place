import classNames from 'classnames';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchSVG } from '../Imgs/SearchSVG';

export const MarketForm = () => {
  const [focus, setFocus] = useState(false);
  const [query, setQuery] = useState('');
  const [, setSearchPrams] = useSearchParams();

  return (
    <form
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
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      <button className="market-search__button">Знайти</button>
    </form>
  );
};
