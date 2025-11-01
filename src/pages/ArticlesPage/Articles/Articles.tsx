import { useIsTablet } from '../../../hooks/useMediaQuery';
import { Article } from '../../../types/article';
import articles from '../../../data/articles.json';
import { Link, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SavingState } from '../../../store/store';
import { Pagination } from '../../../components/Pagination/Pagination';

export const Articles = () => {
  const isTablet = useIsTablet();
  const itemsPerPage = isTablet ? 3 : 6;
  const totalPages = Math.ceil(articles.length / itemsPerPage);

  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const currentItems = articles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const lang = useSelector((state: SavingState) => state.language.language);

  const ArticleLink = (article: Article) => {
    if (article.content[lang]) {
      return `/club/article/${article.slug}`;
    } else {
      return `/club/articles/no-content/${article.slug}`;
    }
  };
  return (
    <>
      <div className="articles__articles-block">
        <div className="articles__articles">
          {currentItems.map((article) => (
            <Link
              to={ArticleLink(article)}
              key={article.id}
              className="articles__article hidden reveal"
            >
              <div
                style={{ backgroundImage: `url(${article.image})` }}
                className="articles__article-img"
              >
                <p className="articles__article-tag">Новий</p>
              </div>
              <div className="articles__article-text">
                <div className="articles__article-title">
                  {article.title[lang]}
                </div>
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
            </Link>
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
