import React from 'react';
import { Close } from '../../Imgs/Close';
import classNames from 'classnames';
import { setIsCartOpen } from '../../../store/slices/shoppingCartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, SavingState } from '../../../store/store';
import { useIsMobile } from '../../../hooks/useMediaQuery';
import { useTranslation } from 'react-i18next';

type Props = {
  step: number;
};

export const ShoppingCartHeader: React.FC<Props> = ({ step }) => {
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state: SavingState) => state.shoppingCart);

  const { t } = useTranslation();

  const isPhone = useIsMobile();

  return (
    <div className="shopping-cart__header">
      {step === 1 && (
        <h2
          className="shopping-cart__title"
          dangerouslySetInnerHTML={{
            __html:
              cart.items.length === 0 ?
                `${t('shopping-cart__title')}`
              : `${t('shopping-cart__title2')}`,
          }}
        ></h2>
      )}
      {step === 2 && (
        <h2 className="shopping-cart__title">{t('shopping-cart__cta-text')}</h2>
      )}
      {step === 3 && (
        <div className="shopping-cart__end-top">
          <h2 className="shopping-cart__title shopping-cart__title--end">
            <span className="shopping-cart__title shopping-cart__title--end shopping-cart__title--green">
              {t('shopping-cart__title--green')}
            </span>{' '}
            {t('shopping-cart__title3')}
          </h2>
          <p className="shopping-cart__end-subtitle">
            {t('shopping-cart__end-subtitle')}
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
