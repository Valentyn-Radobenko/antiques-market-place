import { useLocation } from 'react-router-dom';
import { ShoppingCartSVG } from '../Imgs/ShoppingCartSVG';
import { useIsTablet } from '../../hooks/useMediaQuery';

export const ProductStickyCTA = () => {
  const { pathname } = useLocation();

  const isProductPage = pathname.startsWith('/product');
  const isTablet = useIsTablet();

  if (!isProductPage || !isTablet) return null;

  return (
    <div className="product__cta-wrapper">
      <button className="product__cta">
        <span className="product__cta-text">Купити за 4000 грн</span>
        <ShoppingCartSVG className="product__cta-icon" />
      </button>
    </div>
  );
};
