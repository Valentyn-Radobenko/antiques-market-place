import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { articlesSlides } from '../../data/articlesSlides';
import Slider from './Slider';

interface ArticleSlide {
  title: {
    ua: string;
    en: string;
  };
  status: {
    ua: string;
    en: string;
  };
  category: {
    ua: string;
    en: string;
  };
  imageUrl: string;
}

export const ArticlesSlider: React.FC = () => {
  const language = useSelector((state: RootState) => state.language.language);
  return (
    <Slider<ArticleSlide>
      sliderTitle="Статті"
      renderSliderLink={() => (
        <a
          href="#"
          className="slider__header-link"
        >
          Дізнатися більше
        </a>
      )}
      slides={articlesSlides}
      slidesPerView={2}
      renderSlide={(slide) => (
        <div
          key={slide.title}
          className="slider__slide"
        >
          <img
            className="slider__slide-img"
            src={slide.imageUrl}
            alt={slide.title[language]}
          />
          <div className="slider__slide-content">
            <h3 className="slider__slide-title">{slide.title[language]}</h3>
            <div className="slider__slide-info">
              <div className="slider__slide-info-block">
                <p className="slider__slide-status">{slide.status[language]}</p>
                <p className="slider__slide-status">
                  {slide.category[language]}
                </p>
              </div>
              <a
                href="#"
                className="slider__slide-link"
              >
                Переглянути
              </a>
            </div>
          </div>
        </div>
      )}
    />
  );
};
