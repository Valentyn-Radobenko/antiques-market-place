// import { useSelector } from 'react-redux';
// import { SavingState } from '../../store/store';
import Slider from './Slider';
import { useTranslation } from 'react-i18next';

interface Props {
  imgs: string[];
}

export const ProductSlider: React.FC<Props> = ({ imgs }) => {
  const { t } = useTranslation();
  // const language = useSelector((state: SavingState) => state.language.language);
  return (
    <Slider<string>
      sliderTitle={t('exhibitionsSlider.title')}
      slides={imgs}
      slidesPerView={1}
      renderSlide={(img) => (
        <div
          key={img}
          className="slider__slide"
        >
          <div className="slider__slide-icon"></div>
          <img
            className="slider__slide-img"
            src={img}
            alt={img}
          />
        </div>
      )}
    />
  );
};
