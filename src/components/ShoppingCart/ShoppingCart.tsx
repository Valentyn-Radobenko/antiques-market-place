import React from 'react';
import { Close } from '../Imgs/Close';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { setIsOpen } from '../../store/slices/shoppingCartSlice';
import { CheckBoxInteractive } from '../Imgs/CheckBoxInteractive/CheckBoxInteractive';
import { DeleteSVG } from '../Imgs/DeleteSVG';
import products from '../../data/products.json';
import { LocalMallSVG } from '../Imgs/LocalMallSVG';

export const ShoppingCart: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentProduct = products[0];

  return (
    <div className="shopping-cart">
      <div className="shopping-cart__header">
        <h2 className="shopping-cart__title">Кошик</h2>
        <button
          className="shopping-cart__close"
          onClick={() => dispatch(setIsOpen(false))}
        >
          <Close />
        </button>
      </div>
      <div className="shopping-cart__content">
        <div className="shopping-cart__content-top">
          <div className="shopping-cart__selected">
            <button className="shopping-cart__selected-checkbox">
              <CheckBoxInteractive />
            </button>
            <p className="shopping-cart__selected-text">
              Обрано 2
              <span className="shopping-cart__selected-text-minor">/2</span>{' '}
              товари
            </p>
          </div>
          <button className="shopping-cart__delete">
            <DeleteSVG />
          </button>
        </div>
        <div className="shopping-cart__content-middle">
          <div className="shopping-cart__product">
            <button className="shopping-cart__product-checkbox">
              <CheckBoxInteractive />
            </button>
            <img
              className="shopping-cart__product-img"
              src={currentProduct.imgs[0]}
              alt={currentProduct.name.ua}
            />
            <div className="shopping-cart__product-data">
              <p className="shopping-cart__product-title">
                {currentProduct.name.ua}
              </p>
              <p className="shopping-cart__product-price">
                {currentProduct.price} грн
              </p>
            </div>
          </div>
          <button className="shopping-cart__show-all">
            Показати всі товари (1)
          </button>
        </div>
        <div className="shopping-cart__content-bottom">
          <div className="shopping-cart__price">
            <p className="shopping-cart__price-label">Загальна сума</p>
            <p className="shopping-cart__price-value">8000 грн</p>
          </div>

          <button className="shopping-cart__cta">
            <span className="shopping-cart__cta-text">Оформити замовлення</span>
            <div className="shopping-cart__cta-button">
              <LocalMallSVG />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
