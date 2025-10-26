import articles from '../../data/articles.json';
import { useTranslation } from 'react-i18next';
import Slider from './Slider';
import { useIsMobile, useIsTablet } from '../../hooks/useMediaQuery';
import { Link } from 'react-router-dom';
import { Article } from '../../types/article';
import { useSelector } from 'react-redux';
import { SavingState } from '../../store/store';

export const ArticlesSlider: React.FC = () => {
  const { t } = useTranslation();
  const lang = useSelector((state: SavingState) => state.language.language);
  const articlesSlides = articles.slice(0, 6);

  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  const ArticleLink = (article: Article) => {
    if (article.content[lang]) {
      return `/club/article/${article.slug}`;
    } else {
      return `/club/articles/no-content/${article.slug}`;
    }
  };

  return (
    <Slider<Article>
      sliderTitle={t('articles')}
      renderSliderLink={() => (
        <Link
          to="articles"
          className="slider__header-link"
        >
          {isMobile ?
            `${t('slider__header-link')}`
          : `${t('slider__header-link2')}`}
        </Link>
      )}
      slides={articlesSlides}
      slidesPerView={
        isMobile ? 1
        : isTablet ?
          2
        : 3
      }
      renderSlide={(slide) => (
        <Link
          to={ArticleLink(slide)}
          key={slide.id}
          className="slider__slide"
        >
          <p className="slider__slide-new">{t('market-item__new')}</p>
          <img
            className="slider__slide-img"
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
