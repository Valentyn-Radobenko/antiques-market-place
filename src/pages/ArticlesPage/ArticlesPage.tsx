import { Outlet, useParams } from 'react-router-dom';
import { Crumbs } from '../../components/Crumbs/Crumbs';
import articles from '../../data/articles.json';
import { useSelector } from 'react-redux';
import { SavingState } from '../../store/store';
import { useTranslation } from 'react-i18next';

export const ArticlesPage = () => {
  const { slug } = useParams();
  const article = articles.find((p) => p.slug === slug);

  const { t } = useTranslation();
  const lang = useSelector((state: SavingState) => state.language.language);

  return (
    <div className="articles">
      <div className="articles__nav-bar">
        {article ?
          <Crumbs
            links={['/club', '/club/articles', `/club/no-content/${slug}`]}
            titles={[
              `${t('club')}`,
              `${t('articles')}`,
              `${article.title[lang]}`,
            ]}
          />
        : <Crumbs
            links={['/club', '/club/articles']}
            titles={[`${t('club')}`, `${t('articles')}`]}
          />
        }

        <div className="articles__heading hidden reveal">
          {article && article.content[lang] && (
            <h1 className="articles__title">{article.title[lang]}</h1>
          )}

          {article && !article.content[lang] && (
            <h1 className="articles__title articles__title--no-content">
              {article.title[lang]}
            </h1>
          )}

          {!article && <h1 className="articles__title">{t('articles')}</h1>}
        </div>
      </div>
      <Outlet />
    </div>
  );
};
