// import { useSelector } from 'react-redux';
// import { SavingState } from '../../store/store';
import exhibitions from '../../data/exhibitions.json';
import Slider from './Slider';
import { useTranslation } from 'react-i18next';
import { useIsMobile, useIsTablet } from '../../hooks/useMediaQuery';
import { Link } from 'react-router-dom';

interface ExhibitionSlide {
  title: string;
  status: string;
  date: string;
  image: string;
  content: string;
}

export const ExhibitionsSlider: React.FC = () => {
  const { t } = useTranslation();
  // const language = useSelector((state: SavingState) => state.language.language);

  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  const exhibitionsSlides = exhibitions.slice(0, 6);
  return (
    <Slider<ExhibitionSlide>
      sliderTitle={t('exhibitionsSlider.title')}
      renderSliderLink={() => (
        <a
          href="#"
          className="slider__header-link"
        >
          {isMobile ? 'більше' : 'переглянути більше'}
        </a>
      )}
      slides={exhibitionsSlides}
      slidesPerView={isTablet ? 1 : 2}
      renderSlide={(slide) => (
        <div
          key={slide.title + slide.date + slide.image}
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
              <p className="slider__slide-status">{slide.status}</p>
              <p className="slider__slide-date">{slide.date}</p>
              <Link
                to="exhibitions"
                className="slider__slide-link"
              ></Link>
            </div>
          </div>
        </div>
      )}
    />
  );
};
