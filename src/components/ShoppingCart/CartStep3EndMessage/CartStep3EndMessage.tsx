import { setIsCartOpen } from '../../../store/slices/shoppingCartSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import { InfoSVG } from '../../Imgs/InfoSVG';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const CartStep3EndMessage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();

  return (
    <div className="shopping-cart__end-message">
      <div className="shopping-cart__end-message-icon-wrapper">
        <InfoSVG className="shopping-cart__end-message-icon" />
      </div>
      <p className="shopping-cart__end-message-text">
        {t('shopping-cart__end-message-text')}{' '}
        <Link
          className="shopping-cart__end-message-link"
          to={'/me/orders'}
          onClick={() => dispatch(setIsCartOpen(false))}
          dangerouslySetInnerHTML={{
            __html: t('shopping-cart__end-message-link'),
          }}
        ></Link>
      </p>
    </div>
  );
};
