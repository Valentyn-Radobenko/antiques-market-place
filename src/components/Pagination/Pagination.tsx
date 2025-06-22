import React from 'react';
import classNames from 'classnames';
import { SearchLink } from '../../utils/SearchLink';

type Props = {
  currentPage: number;
  totalPages: number;
};

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

export const Pagination: React.FC<Props> = ({ currentPage, totalPages }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="pagination">
      {/* Back arrow */}
      {currentPage === 1 ?
        <div
          className={classNames(
            'pagination__arrow',
            'pagination__arrow--back',
            'pagination__arrow--back--dis',
          )}
          style={{ cursor: 'not-allowed' }}
        />
      : <SearchLink
          className={classNames('pagination__arrow', 'pagination__arrow--back')}
          params={{ page: String(currentPage - 1) }}
          style={{ cursor: 'pointer' }}
        />
      }

      {/* Pages */}
      <div className="pagination__pages">
        {getDisplayedPages(currentPage, totalPages).map((page, index) => {
          if (page === '...') {
            return (
              <div
                key={`ellipsis-${index}`}
                className="pagination__page"
              >
                ...
              </div>
            );
          }

          return (
            <SearchLink
              key={`page-${page}`}
              className={classNames('pagination__page', {
                'pagination__page--active': currentPage === page,
              })}
              params={{ page: page === 1 ? null : String(page) }}
              style={{ cursor: 'pointer' }}
            >
              {page}
            </SearchLink>
          );
        })}
      </div>

      {/* Forward arrow */}
      {currentPage === totalPages ?
        <div
          className={classNames(
            'pagination__arrow',
            'pagination__arrow--forward',
            'pagination__arrow--forward--dis',
          )}
          style={{ cursor: 'not-allowed' }}
        />
      : <SearchLink
          className={classNames(
            'pagination__arrow',
            'pagination__arrow--forward',
          )}
          params={{ page: String(currentPage + 1) }}
          style={{ cursor: 'pointer' }}
        />
      }
    </div>
  );
};
