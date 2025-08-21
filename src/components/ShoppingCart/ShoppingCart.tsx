import React from 'react';
import { Close } from '../Imgs/Close';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { setIsOpen } from '../../store/slices/shoppingCartSlice';

export const ShoppingCart: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="shopping-cart">
      <button
        className="shopping-cart-close"
        onClick={() => dispatch(setIsOpen(false))}
      >
        <Close />
      </button>
    </div>
  );
};
