import { useTranslation } from 'react-i18next';
import Slider from './Slider';
import { useIsMobile, useIsTablet } from '../../hooks/useMediaQuery';
import { Link, useParams } from 'react-router-dom';
import products from '../../data/products.json';
import { Product } from '../../types/Product';
import { useSelector } from 'react-redux';
import { SavingState } from '../../store/store';
import { useCurrency } from '../../hooks/useCurrency';

export const ProductsSlider: React.FC = () => {
  const { t } = useTranslation();

  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  const { slug } = useParams();
  const currentProduct = products.find((p) => p.slug === slug);
  const filteredProducts =
    currentProduct ?
      products.filter((p) => p.id !== currentProduct.id)
    : products;
  const lang = useSelector((state: SavingState) => state.language.language);

  const { formatPrice } = useCurrency();

  return (
    <Slider<Product>
      sliderTitle={t('other-items-slider-title')}
      customClassName="other-items-slider"
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
          className="slider__slide other-items-slider__slide"
        >
          <p className="slider__slide-new other-items-slider__slide-new">
            {t('market-item__new')}
          </p>
          <img
            className="slider__slide-img other-items-slider__slide-img"
            src={slide.imgs[0]}
            alt={slide.name[lang]}
          />
          <div className="slider__slide-content other-items-slider__slide-content">
            <h3 className="slider__slide-title other-items-slider__slide-title">
              {slide.name[lang]}
            </h3>
            <div className="slider__slide-info other-items-slider__slide-info">
              <p className="slider__slide-price other-items-slider__slide-price">
                {formatPrice(slide.price)}
              </p>
              <div className="slider__slide-icon other-items-slider__slide-icon"></div>
            </div>
          </div>
        </Link>
      )}
    />
  );
};
