import { useSearchParams } from 'react-router-dom';
import { Pagination } from '../../components/Pagination/Pagination';
import { useIsTablet } from '../../hooks/useMediaQuery';
import articles from '../../data/articles.json';
import { Crumbs } from '../../components/Crumbs/Crumbs';

export const ArticlesPage = () => {
  const isTablet = useIsTablet();
  const itemsPerPage = isTablet ? 3 : 6;
  const totalPages = Math.ceil(articles.length / itemsPerPage);

  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const currentItems = articles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="articles">
      <div className="articles__nav-bar">
        <Crumbs links={['/club', '/club/articles']} />

        <div className="articles__heading">
          <h1 className="articles__title">Статті</h1>
        </div>
      </div>
      <div className="articles__articles-block">
        <div className="articles__articles">
          {currentItems.map((exh, index) => (
            <article
              key={`${exh.title}-${index}`}
              className="articles__article"
            >
              <div
                style={{ backgroundImage: `url(${exh.image})` }}
                className="articles__article-img"
              >
                <p className="articles__article-tag">Новий</p>
              </div>
              <div className="articles__article-text">
                <div className="articles__article-title">{exh.title}</div>
                <div className="articles__article-icon">
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
            </article>
          ))}
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
};
