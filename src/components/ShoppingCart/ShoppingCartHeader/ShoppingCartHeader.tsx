import React from 'react';
import { Close } from '../../Imgs/Close';
import classNames from 'classnames';
import { setIsCartOpen } from '../../../store/slices/shoppingCartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, SavingState } from '../../../store/store';
import { useIsMobile } from '../../../hooks/useMediaQuery';

type Props = {
  step: number;
};

export const ShoppingCartHeader: React.FC<Props> = ({ step }) => {
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state: SavingState) => state.shoppingCart);

  const isPhone = useIsMobile();

  return (
    <div className="shopping-cart__header">
      {step === 1 && (
        <h2 className="shopping-cart__title">
          {cart.items.length === 0 ? 'Кошик пустий' : 'Кошик'}
        </h2>
      )}
      {step === 2 && (
        <h2 className="shopping-cart__title">Оформити замовлення</h2>
      )}
      {step === 3 && (
        <div className="shopping-cart__end-top">
          <h2 className="shopping-cart__title shopping-cart__title--end">
            <span className="shopping-cart__title shopping-cart__title--end shopping-cart__title--green">
              Дякуємо,
            </span>{' '}
            замовлення оформлено!
          </h2>
          <p className="shopping-cart__end-subtitle">
            Чекайте на зміну статусу замовлення
          </p>
        </div>
      )}
      <button
        className={classNames('shopping-cart__close', {
          'shopping-cart__close--end': step === 3 && isPhone,
        })}
        onClick={() => dispatch(setIsCartOpen(false))}
      >
        <Close />
      </button>
    </div>
  );
};
