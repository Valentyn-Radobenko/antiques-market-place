// import { useTranslation } from 'react-i18next';
import Slider from './Slider';
import { useIsTablet } from '../../hooks/useMediaQuery';
import { Link, useParams } from 'react-router-dom';
import exhibitions from '../../data/exhibitions.json';
import { Exhibition } from '../../types/exhibition';
import { useSelector } from 'react-redux';
import { SavingState } from '../../store/store';

export const OtherExhibitionsSlider: React.FC = () => {
  // const { t } = useTranslation();

  const isTablet = useIsTablet();
  const { slug } = useParams();
  const currentExhibition = exhibitions.find((exh) => exh.slug === slug);
  const filteredExhibitions =
    currentExhibition ?
      exhibitions.filter((p) => p.id !== currentExhibition.id)
    : exhibitions;
  const lang = useSelector((state: SavingState) => state.language.language);

  const exhibitionLink = (exhibition: Exhibition) => {
    if (exhibition.content[lang]) {
      return `/club/exhibition/${exhibition.slug}`;
    } else {
      return '/club/exhibitions/no-content';
    }
  };

  return (
    <Slider<Exhibition>
      sliderTitle={'Також вас може зацікавити'}
      customClassName="other-items-slider--exhibitions"
      slides={filteredExhibitions}
      slidesPerView={isTablet ? 1 : 3}
      renderSlide={(slide) => (
        <Link
          to={exhibitionLink(slide)}
          key={slide.id}
          className="slider__slide other-items-slider__slide--exhibitions"
        >
          <p className="slider__slide-new">Новий</p>
          <img
            className="slider__slide-img other-items-slider__slide-img--exhibitions"
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
