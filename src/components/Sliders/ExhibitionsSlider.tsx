import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { exhibitionsSlides } from '../../data/exhibitionsSlides';
import Slider from './Slider';
import { useTranslation } from 'react-i18next';

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
  const language = useSelector((state: RootState) => state.language.language);
  return (
    <Slider<ExhibitionSlide>
      sliderTitle={t('exhibitionsSlider.title')}
      renderSliderLink={() => (
        <a
          href="#"
          className="slider__header-link"
        >
          {t('exhibitionsSlider.headerLink')}
        </a>
      )}
      slides={exhibitionsSlides}
      slidesPerView={2}
      renderSlide={(slide) => (
        <div
          key={slide.id}
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
              <p className="slider__slide-status">{slide.status[language]}</p>
              <a
                href="#"
                className="slider__slide-link"
              >
                {t('exhibitionsSlider.slideLink')}
              </a>
            </div>
          </div>
        </div>
      )}
    />
  );
};
