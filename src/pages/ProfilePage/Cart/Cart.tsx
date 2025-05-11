import { useOutletContext } from 'react-router-dom';
import { OutletContextType } from '../../../types/openMenuOtlet';
import { ArrowTale } from '../../../components/Imgs/ArrowTale';
import { Bin } from '../../../components/Imgs/Bin';
import { OrdersSVG } from '../../../components/Imgs/OrdersSVG';
import { CheckboxSquareSVG } from '../../../components/Imgs/CheckboxSquareSVG';

const testItems = [
  {
    id: 1,
    checked: false,
    img: 'public/images/expertise/exp1.webp',
    name: 'Талер. 1643.',
    price: '4000',
  },
  {
    id: 2,
    checked: false,
    img: 'public/images/expertise/exp1.webp',
    name: 'Талер. 1643.',
    price: '4000',
  },
];

export const Cart = () => {
  const [setOpenMenu] = useOutletContext<OutletContextType>();

  return (
    <div className="profile-page__section">
      <div className="profile-page__section-title">
        <ArrowTale
          onClick={() => {
            setOpenMenu(false);
          }}
          className="profile-page__section-arrow"
        />
        <h2 className="profile-page__section-h2">Корзина</h2>
      </div>

      <div className="cart">
        <div className="cart__top-bar">
          <div className="cart__top-bar-left">
            <CheckboxSquareSVG
              value="checked"
              className="cart__checked-global"
            />
            <p className="cart__top-bar-text">
              Обрано 2<span className="gray">/2</span> товари
            </p>
          </div>
          <Bin className="cart__bin" />
        </div>
        <div className="cart__list">
          {testItems.map((a) => (
            <div className="cart__item">
              <CheckboxSquareSVG
                value="checked"
                className="cart__checked-single"
              />
              <img
                className="cart__item-img"
                src={a.img}
                alt="#"
              />
              <div className="cart__item-text">
                <p className="cart__item-name">{a.name}</p>
                <p className="cart__item-price">{a.price} грн</p>
              </div>
            </div>
          ))}
        </div>
        <div className="cart__bottom-bar">
          <p className="cart__bottom-bar-text">
            Загальна сума{' '}
            <span className="cart__bottom-bar-price">8 000 грн</span>
          </p>
          <button className="cart__button">
            <p>Оформити замовлення</p>
            <OrdersSVG />
          </button>
        </div>
      </div>

      <button className="cart__button on-mob">
        <p>Оформити замовлення - 8000 грн</p>
        <OrdersSVG />
      </button>
    </div>
  );
};
