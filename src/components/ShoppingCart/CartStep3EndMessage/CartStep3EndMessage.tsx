import { setIsCartOpen } from '../../../store/slices/shoppingCartSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import { InfoSVG } from '../../Imgs/InfoSVG';
import { Link } from 'react-router-dom';

export const CartStep3EndMessage = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="shopping-cart__end-message">
      <div className="shopping-cart__end-message-icon-wrapper">
        <InfoSVG className="shopping-cart__end-message-icon" />
      </div>
      <p className="shopping-cart__end-message-text">
        Слідкуйте за вашим замовленням у вашому кабінеті у розділі{' '}
        <Link
          className="shopping-cart__end-message-link"
          to={'/me/orders'}
          onClick={() => dispatch(setIsCartOpen(false))}
        >
          “Мої&nbsp;замовлення”
        </Link>
      </p>
    </div>
  );
};
