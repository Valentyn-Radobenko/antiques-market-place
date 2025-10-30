import { useDispatch, useSelector } from 'react-redux';
import { useIsMobile } from '../../../../hooks/useMediaQuery';
import { AppDispatch, SavingState } from '../../../../store/store';
import { ArrowBackSVG } from '../../../Imgs/ArrowBackSVG';
import React from 'react';
import { DeleteSVG } from '../../../Imgs/DeleteSVG';
import {
  removeItem,
  removeSelectedItem,
} from '../../../../store/slices/shoppingCartSlice';
import { useTranslation } from 'react-i18next';
import { useCurrency } from '../../../../hooks/useCurrency';

type Props = {
  setOrderStep: React.Dispatch<React.SetStateAction<number>>;
};

export const OrdersStep: React.FC<Props> = ({ setOrderStep }) => {
  const isPhone = useIsMobile();
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state: SavingState) => state.shoppingCart);

  const { t } = useTranslation();
  const lang = useSelector((state: SavingState) => state.language.language);

  const { formatPrice } = useCurrency();

  return (
    <div className="shopping-cart__order-block">
      <div className="shopping-cart__order-block-top">
        {isPhone ?
          <div className="shopping-cart__order-block-heading">
            <ArrowBackSVG
              onClick={() => setOrderStep(1)}
              className="shopping-cart__order-block-back-button"
            />
            <h3 className="shopping-cart__order-block-title">
              {t('shopping-cart__order-block-title2')}
            </h3>
          </div>
        : <h3 className="shopping-cart__order-block-title">
            {t('shopping-cart__order-block-title2')}
          </h3>
        }
        <p className="shopping-cart__order-block-step">
          2<span className="shopping-cart__order-block-steps">/5</span>
        </p>
      </div>
      <div className="shopping-cart__order-block-products">
        {cart.selectedItems.map((p, ind) => {
          return (
            <div
              key={ind + p.id}
              className="shopping-cart__order-block-product"
            >
              <div className="shopping-cart__order-block-product-top">
                <h4 className="shopping-cart__order-block-product-number">
                  {t('shopping-cart__order-block-product-number')} №{ind + 1}
                </h4>
                <DeleteSVG
                  className="shopping-cart__order-block-product-delete"
                  onClick={() => {
                    if (cart.selectedItems.find((si) => si.id === p.id)) {
                      dispatch(removeSelectedItem(p.id));
                    }

                    dispatch(removeItem(p.id));
                  }}
                />
              </div>

              <div className="shopping-cart__order-block-product-content">
                <img
                  className="shopping-cart__order-block-product-img"
                  src={p.imgs[0]}
                  alt={p.name[lang]}
                />
                <div className="shopping-cart__order-block-product-data">
                  <p className="shopping-cart__order-block-product-name">
                    {p.name[lang]}
                  </p>
                  <p className="shopping-cart__order-block-product-price">
                    {formatPrice(p.price)}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
