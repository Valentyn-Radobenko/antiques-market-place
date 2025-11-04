import classNames from 'classnames';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchSVG } from '../Imgs/SearchSVG';
import { getSearchWith } from '../../utils/SearchHelper';
import { ArrowTale } from '../Imgs/ArrowTale';
import { useTranslation } from 'react-i18next';

type Props = {
  searchQuery: string | null;
};

export const MarketForm: React.FC<Props> = ({ searchQuery }) => {
  const [focus, setFocus] = useState(true);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const { t } = useTranslation();

  return (
    <div className="market-search">
      <div className="market-search__wrapper">
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
            setSearchParams(
              getSearchWith(searchParams, { query: query ? query : null }),
            );
            setFocus(false);
          }}
        >
          <div
            onClick={() => {
              setQuery('');
              setSearchParams(getSearchWith(searchParams, { query: null }));
            }}
            className="market-search__arrow-wrapper"
          >
            <ArrowTale />
          </div>

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
              placeholder={t('market-search__input-placeholder')}
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
          >
            {t('market-search__search-button')}
          </button>
          <button
            onClick={() => {
              setQuery('');
              setSearchParams(getSearchWith(searchParams, { query: null }));
            }}
            className="market-search__decline"
          >
            {t('market-search__decline')}
          </button>
        </form>
        {searchQuery && (
          <h2 className="market-search__h3">
            {t('market-search__h3')} “
            <span className="market-search__green-word">{searchQuery}</span>”
          </h2>
        )}
      </div>
    </div>
  );
};
