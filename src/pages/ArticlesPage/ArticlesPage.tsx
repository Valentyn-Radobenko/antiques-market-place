import { Outlet, useParams } from 'react-router-dom';
import { Crumbs } from '../../components/Crumbs/Crumbs';
import articles from '../../data/articles.json';
import { useSelector } from 'react-redux';
import { SavingState } from '../../store/store';

export const ArticlesPage = () => {
  const { slug } = useParams();
  const article = articles.find((p) => p.slug === slug);
  const lang = useSelector((state: SavingState) => state.language.language);

  return (
    <div className="articles">
      <div className="articles__nav-bar">
        {article ?
          <Crumbs
            links={['/club', '/club/articles', `/club/no-content/${slug}`]}
            titles={['Клуб колекціонерів', 'Статті', `${article.title[lang]}`]}
          />
        : <Crumbs
            links={['/club', '/club/articles']}
            titles={['Клуб колекціонерів', 'Статті']}
          />
        }

        <div className="articles__heading">
          {article && article.content[lang] && (
            <h1 className="articles__title">{article.title[lang]}</h1>
          )}

          {article && !article.content[lang] && (
            <h1 className="articles__title articles__title--no-content">
              {article.title[lang]}
            </h1>
          )}

          {!article && <h1 className="articles__title">Статті</h1>}
        </div>
      </div>
      <Outlet />
    </div>
  );
};
