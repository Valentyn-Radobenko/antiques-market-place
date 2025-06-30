// import { useSelector } from 'react-redux';
// import { SavingState } from '../../store/store';
import Slider from './Slider';
// import { useTranslation } from 'react-i18next';

interface ProductSlide {
  image: string;
}

interface Props {
  title: { ua: string; eng: string };
  imgs: ProductSlide[];
}

export const ProductSlider: React.FC<Props> = ({ title, imgs }) => {
  // const { t } = useTranslation();
  // const language = useSelector((state: SavingState) => state.language.language);
  return (
    <Slider<ProductSlide>
      sliderTitle={title.ua}
      slides={imgs}
      slidesPerView={1}
      customClassName="product-slider"
      renderSlide={(slide) => (
        <div
          key={slide.image}
          className="product-slider__slide"
        >
          <div className="product-slider__slide-icon"></div>
          <img
            className="product-slider__slide-img"
            src={slide.image}
            alt={slide.image}
          />
        </div>
      )}
    />
  );
};
