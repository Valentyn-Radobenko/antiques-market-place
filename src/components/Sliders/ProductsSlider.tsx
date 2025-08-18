// import { useSelector } from 'react-redux';
// import { SavingState } from '../../store/store';
import productsSlides from '../../data/productsSlides.json';
// import { useTranslation } from 'react-i18next';
import Slider from './Slider';
import { useIsMobile, useIsTablet } from '../../hooks/useMediaQuery';
import { Link } from 'react-router-dom';

interface ProductsSlide {
  image: string;
  title: string;
  price: string;
}

export const ProductsSlider: React.FC = () => {
  // const { t } = useTranslation();
  // const language = useSelector((state: SavingState) => state.language.language);

  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  return (
    <Slider<ProductsSlide>
      sliderTitle={'Також вас може зацікавити'}
      customClassName="products-slider"
      slides={productsSlides}
      slidesPerView={
        isMobile ? 2
        : isTablet ?
          3
        : 4
      }
      renderSlide={(slide) => (
        <div
          key={slide.title + slide.image}
          className="slider__slide products-slider__slide"
        >
          <p className="slider__slide-new products-slider__slide-new">Новий</p>
          <img
            className="slider__slide-img products-slider__slide-img"
            src={slide.image}
            alt={slide.title}
          />
          <div className="slider__slide-content products-slider__slide-content">
            <h3 className="slider__slide-title products-slider__slide-title">
              {slide.title}
            </h3>
            <div className="slider__slide-info products-slider__slide-info">
              <p className="slider__slide-price products-slider__slide-price">
                {slide.price}
              </p>
              <Link
                to="/product"
                className="slider__slide-link products-slider__slide-link"
              ></Link>
            </div>
          </div>
        </div>
      )}
    />
  );
};
