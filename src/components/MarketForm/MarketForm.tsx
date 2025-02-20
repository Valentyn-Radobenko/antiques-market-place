import classNames from 'classnames';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

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
      <svg
        className={classNames('market-search__search-icon', {
          isActive: focus,
        })}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.5391 15.23C7.94044 15.23 6.58544 14.6747 5.47411 13.564C4.36344 12.454 3.80811 11.0994 3.80811 9.50002C3.80811 7.90069 4.36344 6.54569 5.47411 5.43502C6.58477 4.32435 7.93977 3.76935 9.5391 3.77002C11.1384 3.77069 12.4931 4.32602 13.6031 5.43602C14.7131 6.54602 15.2684 7.90069 15.2691 9.50002C15.2691 10.1947 15.1461 10.867 14.9001 11.517C14.6541 12.167 14.3308 12.723 13.9301 13.185L19.8391 19.092C19.9324 19.1854 19.9824 19.3004 19.9891 19.437C19.9951 19.5724 19.9451 19.6934 19.8391 19.8C19.7324 19.9067 19.6144 19.96 19.4851 19.96C19.3558 19.96 19.2378 19.9067 19.1311 19.8L13.2231 13.892C12.7231 14.318 12.1481 14.6477 11.4981 14.881C10.8481 15.1144 10.1948 15.231 9.53811 15.231M9.53811 14.231C10.8648 14.231 11.9851 13.7744 12.8991 12.861C13.8124 11.9477 14.2691 10.8274 14.2691 9.50002C14.2691 8.17269 13.8128 7.05269 12.9001 6.14002C11.9874 5.22735 10.8674 4.77069 9.54011 4.77002C8.21277 4.77002 7.09244 5.22669 6.17911 6.14002C5.26577 7.05335 4.80877 8.17335 4.80811 9.50002C4.80744 10.8267 5.26411 11.9467 6.17811 12.86C7.09211 13.7734 8.21211 14.23 9.53811 14.23" />
      </svg>
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
