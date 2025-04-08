import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import classNames from 'classnames';
import { exhibition } from '../../../types/exhibition';
import { SearchLink } from '../../../utils/SearchLink';

type Props = {
  exhibitions: exhibition[];
};

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = React.useState(
    window.matchMedia(query).matches,
  );

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
};

export const Exhibitions: React.FC<Props> = ({ exhibitions }) => {
  const isTablet = useMediaQuery('(max-width: 1439px)');
  const itemsPerPage = isTablet ? 3 : 6;
  const totalPages = Math.ceil(exhibitions.length / itemsPerPage);

  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      // Можна реалізувати редірект або оновлення параметрів
    }
  }, [currentPage, totalPages]);

  const currentItems = exhibitions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const getDisplayedPages = (
    currentPage: number,
    totalPages: number,
  ): (number | string)[] => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (currentPage <= 3) {
      return [1, 2, 3, 4, '...', totalPages];
    }
    if (currentPage >= totalPages - 2) {
      return [
        1,
        '...',
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }
    return [
      1,
      '...',
      currentPage - 1,
      currentPage,
      currentPage + 1,
      '...',
      totalPages,
    ];
  };

  return (
    <>
      <div className="exhibitions__articles-block">
        <div className="exhibitions__offer">
          <div className="exhibitions__offer-heading">
            <h3 className="exhibitions__offer-title">Запропонувати виставку</h3>
            <div className="exhibitions__offer-icon"></div>
          </div>
          <button className="exhibitions__offer-button">Додати виставку</button>
        </div>
        <div className="exhibitions__articles">
          {currentItems.map((exh, index) => (
            <article
              key={`${exh.title}-${index}`}
              className="exhibitions__article"
            >
              <div
                style={{ backgroundImage: `url(${exh.image})` }}
                className="exhibitions__article-img"
              >
                <p className="exhibitions__article-tag">Новий</p>
              </div>
              <div className="exhibitions__article-text">
                <div className="exhibitions__article-title">{exh.title}</div>
                <div className="exhibitions__article-buttons">
                  <div className="exhibitions__article-data">
                    <div className="exhibitions__article-status">
                      {exh.status}
                    </div>
                    <div className="exhibitions__article-date">{exh.date}</div>
                  </div>
                  <div className="exhibitions__article-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M17.079 12.5H5V11.5H17.079L11.287 5.708L12 5L19 12L12 19L11.287 18.292L17.079 12.5Z"
                        fill="#1B4332"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {totalPages > 1 && (
        <div className="exhibitions__pg">
          {/* Стрілка "Назад" */}
          {currentPage === 1 ?
            <div
              className={classNames(
                'exhibitions__pg-arrow',
                'exhibitions__pg-arrow--back',
                'exhibitions__pg-arrow--back--disabled',
              )}
              style={{ cursor: 'not-allowed' }}
            />
          : <SearchLink
              className={classNames(
                'exhibitions__pg-arrow',
                'exhibitions__pg-arrow--back',
              )}
              params={{ page: String(currentPage - 1) }}
              style={{ cursor: 'pointer' }}
            />
          }

          {/* Список сторінок */}
          <div className="exhibitions__pg-pages">
            {getDisplayedPages(currentPage, totalPages).map((page, index) => {
              if (page === '...') {
                return (
                  <div
                    key={`ellipsis-${index}`}
                    className="exhibitions__pg-page"
                  >
                    ...
                  </div>
                );
              }
              return (
                <SearchLink
                  key={`page-${page}`}
                  className={classNames('exhibitions__pg-page', {
                    'exhibitions__pg-page--active': currentPage === page,
                  })}
                  params={{ page: page === 1 ? null : String(page) }}
                  style={{ cursor: 'pointer' }}
                >
                  {page}
                </SearchLink>
              );
            })}
          </div>

          {/* Стрілка "Вперед" */}
          {currentPage === totalPages ?
            <div
              className={classNames(
                'exhibitions__pg-arrow',
                'exhibitions__pg-arrow--forward',
                'exhibitions__pg-arrow--forward--disabled',
              )}
              style={{ cursor: 'not-allowed' }}
            />
          : <SearchLink
              className={classNames(
                'exhibitions__pg-arrow',
                'exhibitions__pg-arrow--forward',
              )}
              params={{ page: String(currentPage + 1) }}
              style={{ cursor: 'pointer' }}
            />
          }
        </div>
      )}
    </>
  );
};
