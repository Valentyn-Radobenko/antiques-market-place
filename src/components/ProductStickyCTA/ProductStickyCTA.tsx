import { useLocation, useParams } from 'react-router-dom';
import { ShoppingCartSVG } from '../Imgs/ShoppingCartSVG';
import { useIsTablet } from '../../hooks/useMediaQuery';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { setIsOpen } from '../../store/slices/shoppingCartSlice';
import products from '../../data/products.json';

export const ProductStickyCTA = () => {
  const { pathname } = useLocation();
  const { slug } = useParams();

  const isProductPage = pathname.startsWith('/market/product');
  const isTablet = useIsTablet();
  const dispatch = useDispatch<AppDispatch>();

  if (!isProductPage || !isTablet) return null;

  const product = products.find((p) => p.slug === slug);

  return (
    <div className="product__cta-wrapper">
      <button
        className="product__cta"
        onClick={() => {
          dispatch(setIsOpen(true));
        }}
      >
        <span className="product__cta-text">
          Купити за {product?.price} грн
        </span>
        <ShoppingCartSVG className="product__cta-icon" />
      </button>
    </div>
  );
};
