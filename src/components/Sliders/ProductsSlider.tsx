// import { useTranslation } from 'react-i18next';
import Slider from './Slider';
import { useIsMobile, useIsTablet } from '../../hooks/useMediaQuery';
import { Link, useParams } from 'react-router-dom';
import products from '../../data/products.json';
import { Product } from '../../types/product';
import { useSelector } from 'react-redux';
import { SavingState } from '../../store/store';

export const ProductsSlider: React.FC = () => {
  // const { t } = useTranslation();

  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  const { slug } = useParams();
  const currentProduct = products.find((p) => p.slug === slug);
  const filteredProducts =
    currentProduct ?
      products.filter((p) => p.id !== currentProduct.id)
    : products;
  const lang = useSelector((state: SavingState) => state.language.language);

  return (
    <Slider<Product>
      sliderTitle={'Також вас може зацікавити'}
      customClassName="products-slider"
      slides={filteredProducts}
      slidesPerView={
        isMobile ? 2
        : isTablet ?
          3
        : 4
      }
      renderSlide={(slide) => (
        <Link
          to={`/market/product/${slide.slug}`}
          key={slide.id}
          className="slider__slide products-slider__slide"
        >
          <p className="slider__slide-new products-slider__slide-new">Новий</p>
          <img
            className="slider__slide-img products-slider__slide-img"
            src={slide.imgs[0]}
            alt={slide.name[lang]}
          />
          <div className="slider__slide-content products-slider__slide-content">
            <h3 className="slider__slide-title products-slider__slide-title">
              {slide.name[lang]}
            </h3>
            <div className="slider__slide-info products-slider__slide-info">
              <p className="slider__slide-price products-slider__slide-price">
                {slide.price}
              </p>
              <div className="slider__slide-link products-slider__slide-link"></div>
            </div>
          </div>
        </Link>
      )}
    />
  );
};
