import { articlesSlides } from '../../data/articlesSlides';
import Slider from './Slider';

interface ArticleSlide {
  title: string;
  status: string;
  category: string;
  imageUrl: string;
}

export const ArticlesSlider: React.FC = () => {
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
            alt={slide.title}
          />
          <div className="slider__slide-content">
            <h3 className="slider__slide-title">{slide.title}</h3>
            <div className="slider__slide-info">
              <div className="slider__slide-info-block">
                <p className="slider__slide-status">{slide.status}</p>
                <p className="slider__slide-status">{slide.category}</p>
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
