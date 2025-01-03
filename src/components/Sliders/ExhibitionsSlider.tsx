import { exhibitionsSlides } from '../../data/exhibitionsSlides';
import { Slider } from './Slider';

interface ExhibitionSlide {
  id: number;
  title: string;
  status: string;
  imageUrl: string;
}

export const ExhibitionsSlider: React.FC = () => {
  return (
    <Slider<ExhibitionSlide>
      sliderTitle="Виставки"
      renderSliderLink={() => (
        <a href="#" className="slider__header-link">
          Дізнатися більше
        </a>
      )}
      slides={exhibitionsSlides}
      slidesPerView={1}
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
              <p className="slider__caption-status">{slide.status}</p>
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
