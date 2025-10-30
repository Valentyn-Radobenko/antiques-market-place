import { useOutletContext } from 'react-router-dom';
import { OutletContextType } from '../../../types/openMenuOtlet';
import { ArrowTale } from '../../../components/Imgs/ArrowTale';
import { Bin } from '../../../components/Imgs/Bin';
import { OrdersSVG } from '../../../components/Imgs/OrdersSVG';
import { CheckboxSquareSVG } from '../../../components/Imgs/СheckboxSquareSVG';
import { useSelector } from 'react-redux';
import { SavingState } from '../../../store/store';
import { useTranslation } from 'react-i18next';
import { useCurrency } from '../../../hooks/useCurrency';

const testItems = [
  {
    id: 1,
    checked: false,
    img: 'images/expertise/exp1.webp',
    name: { ua: 'Талер. 1643.', en: 'Thaler. 1643.' },
    price: '4000',
  },
  {
    id: 2,
    checked: false,
    img: 'images/expertise/exp1.webp',
    name: { ua: 'Талер. 1643.', en: 'Thaler. 1643.' },
    price: '4000',
  },
];

export const Cart = () => {
  const [setOpenMenu] = useOutletContext<OutletContextType>();

  const lang = useSelector((state: SavingState) => state.language.language);
  const { t } = useTranslation();

  const { formatPrice } = useCurrency();

  return (
    <div className="profile-page__section">
      <div className="profile-page__section-title">
        <ArrowTale
          onClick={() => {
            setOpenMenu(false);
          }}
          className="profile-page__section-arrow"
        />
        <h2 className="profile-page__section-h2">{t('cart')}</h2>
      </div>

      <div className="cart">
        <div className="cart__top-bar">
          <div className="cart__top-bar-left">
            <CheckboxSquareSVG
              value="checked"
              className="cart__checked-global"
            />
            <p className="cart__top-bar-text">
              {t('shopping-cart__selected-text')} 2
              <span className="gray">/2</span>{' '}
              {t('shopping-cart__selected-text2')}
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
              <div className="cart__item-info">
                <img
                  className="cart__item-img"
                  src={a.img}
                  alt="#"
                />
                <div className="cart__item-text">
                  <p className="cart__item-name">{a.name[lang]}</p>
                  <p className="cart__item-price">{formatPrice(+a.price)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cart__bottom-bar">
          <p className="cart__bottom-bar-text">
            {t('shopping-cart__price-label')}{' '}
          </p>
          <p className="cart__bottom-bar-price">8 000 грн</p>
          <button className="cart__button">
            <p>{t('shopping-cart__cta-text')}</p>
            <OrdersSVG />
          </button>
        </div>
      </div>

      <button className="cart__button on-mob">
        <p>{t('shopping-cart__cta-text')} - 8000 грн</p>
        <OrdersSVG />
      </button>
    </div>
  );
};
