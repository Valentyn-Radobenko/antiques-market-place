import { articlesSlides } from '../../data/articlesSlides';
import { Slider } from './Slider';

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
        <a href="#" className="slider__header-link">
          Дізнатися більше
        </a>
      )}
      slides={articlesSlides}
      slidesPerView={2}
      renderSlide={(slide, _, { stopAutoSlide, startAutoSlide }) => (
        <figure className="slider__figure">
          <img
            src={slide.imageUrl}
            alt={slide.title}
            className="slider__image"
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
          />
          <figcaption className="slider__caption">
            <div className="slider__caption-info">
              <h3 className="slider__caption-title">{slide.title}</h3>
              <div className="slider__caption-tags">
                <p className="slider__caption-status">{slide.status}</p>
                <p className="slider__caption-category">{slide.category}</p>
              </div>
            </div>
            <a href="#" className="slider__caption-link">
              Переглянути
            </a>
          </figcaption>
        </figure>
      )}
    />
  );
};
