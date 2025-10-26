import { useLocation, useParams } from 'react-router-dom';
import { ShoppingCartSVG } from '../Imgs/ShoppingCartSVG';
import { useIsTablet } from '../../hooks/useMediaQuery';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, SavingState } from '../../store/store';
import {
  addItem,
  addSelectedItem,
  setIsCartOpen,
} from '../../store/slices/shoppingCartSlice';
import products from '../../data/products.json';
import { useTranslation } from 'react-i18next';

export const ProductStickyCTA = () => {
  const { pathname } = useLocation();
  const { slug } = useParams();

  const { t } = useTranslation();

  const isProductPage = pathname.startsWith('/market/product');
  const isTablet = useIsTablet();
  const dispatch = useDispatch<AppDispatch>();

  const product = products.find((p) => p.slug === slug);
  const items = useSelector((state: SavingState) => state.shoppingCart.items);
  const selectedItems = useSelector(
    (state: SavingState) => state.shoppingCart.selectedItems,
  );

  if (!isProductPage || !isTablet) return null;

  return (
    <div className="product__cta-wrapper">
      <button
        className="product__cta product__cta--in-wrapper"
        onClick={() => {
          dispatch(setIsCartOpen(true));
          if (product && !items.find((p) => p.id === product.id)) {
            dispatch(addItem(product));
          }

          if (product && !selectedItems.find((si) => si.id === product.id)) {
            dispatch(addSelectedItem(product));
          }
        }}
      >
        <span className="product__cta-text">
          {t('product__cta-text')} {product?.price} грн
        </span>
        <ShoppingCartSVG className="product__cta-icon" />
      </button>
    </div>
  );
};
