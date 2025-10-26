import { useTranslation } from 'react-i18next';
import Slider from './Slider';
import { useIsTablet } from '../../hooks/useMediaQuery';
import { Link, useParams } from 'react-router-dom';
import articles from '../../data/articles.json';
import { useSelector } from 'react-redux';
import { SavingState } from '../../store/store';
import { Article } from '../../types/article';

export const OtherArticlesSlider: React.FC = () => {
  const { t } = useTranslation();

  const isTablet = useIsTablet();
  const { slug } = useParams();
  const currentArticle = articles.find((exh) => exh.slug === slug);
  const filteredArticles =
    currentArticle ?
      articles.filter((p) => p.id !== currentArticle.id)
    : articles;
  const lang = useSelector((state: SavingState) => state.language.language);

  const ArticleLink = (article: Article) => {
    if (article.content[lang]) {
      return `/club/article/${article.slug}`;
    } else {
      return `/club/articles/no-content/${article.slug}`;
    }
  };

  return (
    <Slider<Article>
      sliderTitle={t('other-items-slider-title')}
      customClassName="other-items-slider--articles"
      slides={filteredArticles}
      slidesPerView={isTablet ? 1 : 3}
      renderSlide={(slide) => (
        <Link
          to={ArticleLink(slide)}
          key={slide.id}
          className="slider__slide other-items-slider__slide--articles"
        >
          <p className="slider__slide-new">{t('market-item__new')}</p>
          <img
            className="slider__slide-img other-items-slider__slide-img--articles"
            src={slide.image}
            alt={slide.title[lang]}
          />
          <div className="slider__slide-content">
            <h3 className="slider__slide-title">{slide.title[lang]}</h3>
            <div className="slider__slide-info">
              <div className="slider__slide-info-block"></div>
              <div className="slider__slide-icon"></div>
            </div>
          </div>
        </Link>
      )}
    />
  );
};
