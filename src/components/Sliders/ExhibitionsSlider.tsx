import { exhibitionsSlides } from '../../data/exhibitionsSlides';
import Slider from './Slider';

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
        <a
          href="#"
          className="slider__header-link"
        >
          Дізнатися більше
        </a>
      )}
      slides={exhibitionsSlides}
      slidesPerView={1}
      renderSlide={(slide) => (
        <div
          key={slide.id}
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
              <p className="slider__slide-status">{slide.status}</p>
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
