// import { useSelector } from 'react-redux';
// import { SavingState } from '../../store/store';
import exhibitions from '../../data/exhibitions.json';
import Slider from './Slider';
import { useTranslation } from 'react-i18next';
import { useIsMobile, useIsTablet } from '../../hooks/useMediaQuery';
import { Link } from 'react-router-dom';
import { Exhibition } from '../../types/exhibition';
import { useSelector } from 'react-redux';
import { SavingState } from '../../store/store';

export const ExhibitionsSlider: React.FC = () => {
  const { t } = useTranslation();
  // const language = useSelector((state: SavingState) => state.language.language);

  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  const lang = useSelector((state: SavingState) => state.language.language);

  const exhibitionLink = (exhibition: Exhibition) => {
    if (exhibition.content[lang]) {
      return `/club/exhibition/${exhibition.slug}`;
    } else {
      return '/club/exhibitions/no-content';
    }
  };

  const exhibitionsSlides = exhibitions.slice(0, 6);
  return (
    <Slider<Exhibition>
      sliderTitle={t('exhibitions')}
      renderSliderLink={() => (
        <Link
          to="exhibitions"
          className="slider__header-link"
        >
          {isMobile ?
            `${t('slider__header-link')}`
          : `${t('slider__header-link2')}`}
        </Link>
      )}
      slides={exhibitionsSlides}
      slidesPerView={isTablet ? 1 : 2}
      renderSlide={(slide) => (
        <Link
          to={exhibitionLink(slide)}
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
              <p className="slider__slide-status">{slide.status[lang]}</p>
              <p className="slider__slide-date">{slide.date[lang]}</p>
              <div className="slider__slide-icon"></div>
            </div>
          </div>
        </Link>
      )}
    />
  );
};
