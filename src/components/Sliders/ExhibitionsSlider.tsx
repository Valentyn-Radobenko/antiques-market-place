import { useSelector } from 'react-redux';
import { SavingState } from '../../store/store';
import { exhibitionsSlides } from '../../data/exhibitionsSlides';
import Slider from './Slider';
import { useTranslation } from 'react-i18next';
import { useIsTablet } from '../../hooks/useMediaQuery';
import { Link } from 'react-router-dom';

interface ExhibitionSlide {
  id: number;
  title: {
    ua: string;
    en: string;
  };
  status: {
    ua: string;
    en: string;
  };
  imageUrl: string;
}

export const ExhibitionsSlider: React.FC = () => {
  const { t } = useTranslation();
  const language = useSelector((state: SavingState) => state.language.language);

  const isTablet = useIsTablet();
  return (
    <Slider<ExhibitionSlide>
      sliderTitle={t('exhibitionsSlider.title')}
      renderSliderLink={() => (
        <a
          href="#"
          className="slider__header-link"
        >
          переглянути більше
        </a>
      )}
      slides={exhibitionsSlides}
      slidesPerView={isTablet ? 1 : 2}
      renderSlide={(slide) => (
        <div
          key={slide.id}
          className="slider__slide"
        >
          <p className="slider__slide-new">Новий</p>
          <img
            className="slider__slide-img"
            src={slide.imageUrl}
            alt={slide.title[language]}
          />
          <div className="slider__slide-content">
            <h3 className="slider__slide-title">{slide.title[language]}</h3>
            <div className="slider__slide-info">
              <p className="slider__slide-status">{slide.status[language]}</p>
              <p className="slider__slide-date">{slide.status[language]}</p>
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
