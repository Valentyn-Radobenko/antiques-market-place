// import { useSelector } from 'react-redux';
// import { SavingState } from '../../store/store';
import articles from '../../data/articles.json';
import { useTranslation } from 'react-i18next';
import Slider from './Slider';
import { useIsMobile, useIsTablet } from '../../hooks/useMediaQuery';
import { Link } from 'react-router-dom';

interface ArticleSlide {
  title: string;
  image: string;
  content: string;
}

export const ArticlesSlider: React.FC = () => {
  const { t } = useTranslation();
  // const language = useSelector((state: SavingState) => state.language.language);
  const articlesSlides = articles.slice(0, 6);

  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  return (
    <Slider<ArticleSlide>
      sliderTitle={t('articlesSlider.title')}
      renderSliderLink={() => (
        <Link
          to="articles"
          className="slider__header-link"
        >
          {isMobile ? 'більше' : 'переглянути більше'}
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
        <div
          key={slide.title + slide.image}
          className="slider__slide"
        >
          <p className="slider__slide-new">Новий</p>
          <img
            className="slider__slide-img"
            src={slide.image}
            alt={slide.title}
          />
          <div className="slider__slide-content">
            <h3 className="slider__slide-title">{slide.title}</h3>
            <div className="slider__slide-info">
              <div className="slider__slide-info-block"></div>
              <Link
                to="articles"
                className="slider__slide-icon"
              ></Link>
            </div>
          </div>
        </div>
      )}
    />
  );
};
