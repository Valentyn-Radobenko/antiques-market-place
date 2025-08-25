import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { exhibition } from '../../../types/exhibition';
import { useIsMobile, useIsTablet } from '../../../hooks/useMediaQuery';
import { Pagination } from '../../../components/Pagination/Pagination';

type Props = {
  exhibitions: exhibition[];
};

export const Exhibitions: React.FC<Props> = ({ exhibitions }) => {
  const isTablet = useIsTablet();
  const itemsPerPage = isTablet ? 3 : 6;
  const totalPages = Math.ceil(exhibitions.length / itemsPerPage);

  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      // Можна реалізувати редірект або оновлення параметрів
    }
  }, [currentPage, totalPages]);

  const isMobile = useIsMobile();

  const currentItems = exhibitions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <>
      <div className="exhibitions__articles-block">
        {isMobile ?
          <button className="exhibitions__offer-button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 20C11.858 20 11.739 19.952 11.643 19.856C11.547 19.76 11.4993 19.6413 11.5 19.5V12.5H4.50001C4.35801 12.5 4.23934 12.452 4.14401 12.356C4.04867 12.26 4.00067 12.141 4.00001 11.999C3.99934 11.857 4.04734 11.7383 4.14401 11.643C4.24067 11.5477 4.35934 11.5 4.50001 11.5H11.5V4.50001C11.5 4.35801 11.548 4.23934 11.644 4.14401C11.74 4.04867 11.859 4.00067 12.001 4.00001C12.143 3.99934 12.2617 4.04734 12.357 4.14401C12.4523 4.24067 12.5 4.35934 12.5 4.50001V11.5H19.5C19.642 11.5 19.7607 11.548 19.856 11.644C19.9513 11.74 19.9993 11.859 20 12.001C20.0007 12.143 19.9527 12.2617 19.856 12.357C19.7593 12.4523 19.6407 12.5 19.5 12.5H12.5V19.5C12.5 19.642 12.452 19.7607 12.356 19.856C12.26 19.9513 12.141 19.9993 11.999 20"
                fill="#F7FFFD"
              />
            </svg>
          </button>
        : <div className="exhibitions__offer">
            <div className="exhibitions__offer-heading">
              <h3 className="exhibitions__offer-title">
                Запропонувати виставку
              </h3>
              <div className="exhibitions__offer-icon"></div>
            </div>
            <button className="exhibitions__offer-button">
              Додати виставку
            </button>
          </div>
        }
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

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </>
  );
};
