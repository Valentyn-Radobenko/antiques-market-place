import { useLocation, useParams } from 'react-router-dom';
import { ShoppingCartSVG } from '../Imgs/ShoppingCartSVG';
import { useIsTablet } from '../../hooks/useMediaQuery';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, SavingState } from '../../store/store';
import { addItem, setIsCartOpen } from '../../store/slices/shoppingCartSlice';
import products from '../../data/products.json';

export const ProductStickyCTA = () => {
  const { pathname } = useLocation();
  const { slug } = useParams();

  const isProductPage = pathname.startsWith('/market/product');
  const isTablet = useIsTablet();
  const dispatch = useDispatch<AppDispatch>();

  const product = products.find((p) => p.slug === slug);
  const items = useSelector((state: SavingState) => state.shoppingCart.items);

  if (!isProductPage || !isTablet) return null;

  return (
    <div className="product__cta-wrapper">
      <button
        className="product__cta"
        onClick={() => {
          dispatch(setIsCartOpen(true));
          if (product && !items.find((p) => p.id === product.id))
            dispatch(addItem(product));
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
