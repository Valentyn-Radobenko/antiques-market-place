import React, { useState } from 'react';
import { Close } from '../Imgs/Close';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, SavingState } from '../../store/store';
import {
  removeItem,
  setIsOpen,
  addSelectedItem,
  removeSelectedItem,
} from '../../store/slices/shoppingCartSlice';
import { DeleteSVG } from '../Imgs/DeleteSVG';
import products from '../../data/products.json';
import { LocalMallSVG } from '../Imgs/LocalMallSVG';
import { Link, useParams } from 'react-router-dom';
import { Info } from '../Imgs/Info';
import { CheckBoxSquare } from '../Imgs/CheckBoxSquare/CheckBoxSquare';

export const ShoppingCart: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { slug } = useParams();
  const cart = useSelector((state: SavingState) => state.shoppingCart);
  const currentProduct = products.find((p) => p.slug === slug);
  const lang = useSelector((state: SavingState) => state.language.language);
  const [showAll, setShowAll] = useState(false);

  const deleteSelectedItems = () =>
    cart.items.forEach((i) => {
      cart.selectedItems.forEach((si) => {
        if (i.id === si.id) {
          dispatch(removeSelectedItem(si.id));
          dispatch(removeItem(i.id));
        }
      });
    });

  if (cart.selectedItems.length > cart.items.length) {
    cart.selectedItems.forEach((si) => dispatch(removeSelectedItem(si.id)));
  }
  const toggleAll = () => {
    if (cart.selectedItems.length === cart.items.length) {
      cart.items.forEach((i) => {
        dispatch(removeSelectedItem(i.id));
      });
    } else {
      cart.items.forEach((i) => {
        if (!cart.selectedItems.find((si) => si.id === i.id)) {
          dispatch(addSelectedItem(i));
        }
      });
    }
  };

  return (
    <div className="shopping-cart">
      <div className="shopping-cart__header">
        <h2 className="shopping-cart__title">
          {!currentProduct || cart.items.length === 0 ?
            'Кошик пустий'
          : 'Кошик'}
        </h2>
        <button
          className="shopping-cart__close"
          onClick={() => dispatch(setIsOpen(false))}
        >
          <Close />
        </button>
      </div>
      <div className="shopping-cart__content">
        {!currentProduct || cart.items.length === 0 ?
          <div className="shopping-cart__no-content">
            <div className="shopping-cart__no-content-info-icon">
              <Info />
            </div>
            <p className="shopping-cart__no-content-text">
              Знайдіть цікаві товари у розділі{' '}
              <Link
                to={'/market'}
                onClick={() => dispatch(setIsOpen(false))}
                className="shopping-cart__no-content-link"
              >
                “Маркет”
              </Link>
            </p>
          </div>
        : <>
            <div className="shopping-cart__content-top">
              <div className="shopping-cart__selected">
                <button
                  onClick={toggleAll}
                  className="shopping-cart__selected-checkbox"
                >
                  <CheckBoxSquare
                    isActive={
                      cart.selectedItems.length > 0 &&
                      cart.selectedItems.length === cart.items.length
                    }
                  />
                </button>
                <p className="shopping-cart__selected-text">
                  Обрано {cart.selectedItems.length}
                  <span className="shopping-cart__selected-text-minor">
                    /{cart.items.length}
                  </span>{' '}
                  товари
                </p>
              </div>
              <button
                onClick={deleteSelectedItems}
                className="shopping-cart__delete"
              >
                <DeleteSVG />
              </button>
            </div>
            <div className="shopping-cart__content-middle">
              {showAll ?
                <div className="shopping-cart__products">
                  {cart.items.map((item) => {
                    return (
                      <div className="shopping-cart__product">
                        <button
                          onClick={() => {
                            if (
                              !cart.selectedItems.find((p) => p.id === item.id)
                            ) {
                              dispatch(addSelectedItem(item));
                            } else {
                              dispatch(removeSelectedItem(item.id));
                            }
                          }}
                          className="shopping-cart__product-checkbox"
                        >
                          <CheckBoxSquare
                            isActive={cart.selectedItems.find(
                              (p) => p.id === item.id,
                            )}
                          />
                        </button>
                        <img
                          className="shopping-cart__product-img"
                          src={item.imgs[0]}
                          alt={item.name[lang]}
                        />
                        <div className="shopping-cart__product-data">
                          <p className="shopping-cart__product-title">
                            {item.name[lang]}
                          </p>
                          <p className="shopping-cart__product-price">
                            {item.price} грн
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              : <div className="shopping-cart__product">
                  <button
                    onClick={() => {
                      if (
                        !cart.selectedItems.find(
                          (p) => p.id === currentProduct.id,
                        )
                      ) {
                        dispatch(addSelectedItem(currentProduct));
                      } else {
                        dispatch(removeSelectedItem(currentProduct.id));
                      }
                    }}
                    className="shopping-cart__product-checkbox"
                  >
                    <CheckBoxSquare
                      isActive={cart.selectedItems.find(
                        (p) => p.id === currentProduct.id,
                      )}
                    />
                  </button>
                  <img
                    className="shopping-cart__product-img"
                    src={currentProduct.imgs[0]}
                    alt={currentProduct.name[lang]}
                  />
                  <div className="shopping-cart__product-data">
                    <p className="shopping-cart__product-title">
                      {currentProduct.name[lang]}
                    </p>
                    <p className="shopping-cart__product-price">
                      {currentProduct.price} грн
                    </p>
                  </div>
                </div>
              }
              {cart.items.length > 1 && !showAll && (
                <button
                  onClick={() => setShowAll(true)}
                  className="shopping-cart__show-all"
                >
                  Показати всі товари ({cart.items.length - 1})
                </button>
              )}
            </div>
            <div className="shopping-cart__content-bottom">
              <div className="shopping-cart__price">
                <p className="shopping-cart__price-label">Загальна сума</p>
                <p className="shopping-cart__price-value">
                  {cart.items.reduce((acc, item) => acc + item.price, 0)} грн
                </p>
              </div>

              <button className="shopping-cart__cta">
                <span className="shopping-cart__cta-text">
                  Оформити замовлення
                </span>
                <div className="shopping-cart__cta-button">
                  <LocalMallSVG />
                </div>
              </button>
            </div>
          </>
        }
      </div>
    </div>
  );
};
