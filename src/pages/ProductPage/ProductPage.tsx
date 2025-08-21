import { Crumbs } from '../../components/Crumbs/Crumbs';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import { ShoppingCartSVG } from '../../components/Imgs/ShoppingCartSVG';
import { DocsSVG } from '../../components/Imgs/DocsSVG';
import { HourglassEmptySVG } from '../../components/Imgs/HourglassEmptySVG';
import { LandslideSVG } from '../../components/Imgs/LandslideSVG';
import { MapSearchSVG } from '../../components/Imgs/MapSearchSVG';
import { ViewComfySVG } from '../../components/Imgs/ViewComfySVG';
import { AccountBalanceSVG } from '../../components/Imgs/AccountBalanceSVG';
import { CreditCardSVG } from '../../components/Imgs/CreditCardSVG';
import { PaymentsSVG } from '../../components/Imgs/PaymentsSVG';
import { BoxSVG } from '../../components/Imgs/BoxSVG';
import { WarehouseSVG } from '../../components/Imgs/WarehouseSVG';
import { ProductSlider } from '../../components/Sliders/ProductSlider';
import { ProductsSlider } from '../../components/Sliders/ProductsSlider';
import { useIsTablet } from '../../hooks/useMediaQuery';
import { ModalWindow } from '../../components/ModalWindow/ModalWindow';
import { ShoppingCart } from '../../components/ShoppingCart/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, SavingState } from '../../store/store';
import { setIsOpen } from '../../store/slices/shoppingCartSlice';

export const ProductPage = () => {
  const isTablet = useIsTablet();
  const dispatch = useDispatch<AppDispatch>();
  const isModalOpen = useSelector(
    (state: SavingState) => state.shoppingCart.isOpen,
  );

  return (
    <>
      <Crumbs
        links={['/product', '/product', '/product', '/product']}
        titles={['Маркет', 'Нумізматика', 'Монети Європи', 'Талер 1641']}
        customClassName="product__crumbs"
      />

      <div className="product page__product">
        {isTablet && (
          <h2 className="product-slider__header-title">{'Талер 1641'}</h2>
        )}
        <ProductSlider
          title={{ ua: 'Талер 1641', eng: 'Taler 1641' }}
          imgs={[
            'images/product/product-1-img-1.png',
            'images/product/product-1-img-2.png',
          ]}
        />
        <div className="product__info">
          <div className="product__top">
            <div className="product__chars">
              <div className="product__char">
                <MapSearchSVG className="product__char-icon" />
                <span className="product__char-label">Країни:</span>
                <span className="product__char-value">
                  Нідерланди, Гелдерланд
                </span>
              </div>
              <div className="product__char">
                <DocsSVG className="product__char-icon" />
                <span className="product__char-label">Опис:</span>
                <span className="product__char-value">
                  Талер. 27,6 грам. Дельмонте 825.
                </span>
              </div>
              <div className="product__char">
                <HourglassEmptySVG className="product__char-icon" />
                <span className="product__char-label">Рік:</span>
                <span className="product__char-value">1641</span>
              </div>
              <div className="product__char">
                <LandslideSVG className="product__char-icon" />
                <span className="product__char-label">Матеріал:</span>
                <span className="product__char-value">Срібло</span>
              </div>
              <div className="product__char">
                <ViewComfySVG className="product__char-icon" />
                <span className="product__char-label">Категорія:</span>
                <span className="product__char-value">Монети Європи</span>
              </div>
            </div>
            <Dropdown
              buttonArea="all"
              buttonTitle={() => (
                <p className="product__dropdown-text">Детальна інформація</p>
              )}
              renderContent={() => (
                <p className="product__dropdown-option">Не вказана</p>
              )}
              customClassName="product__dropdown"
            />
          </div>
          <div className="product__middle">
            <div className="product__price">
              <span className="product__price-label">Ціна:</span>
              <span className="product__price-value">4000 грн</span>
            </div>
            <button
              onClick={() => {
                dispatch(setIsOpen(true));
              }}
              className="product__cta"
            >
              <span className="product__cta-text">Купити</span>
              <ShoppingCartSVG className="product__cta-icon" />
            </button>
          </div>
          <div className="product__bottom">
            <div className="product__bottom-block">
              <div className="product__bottom-block-title">Оплата</div>
              <div className="product__bottom-block-options">
                <div className="product__bottom-block-option">
                  <AccountBalanceSVG className="product__bottom-block-option-icon" />
                  <div className="product__bottom-block-option-description">
                    На особистий рахунок платформи
                  </div>
                </div>
                <div className="product__bottom-block-option">
                  <PaymentsSVG className="product__bottom-block-option-icon" />
                  <div className="product__bottom-block-option-description">
                    Готівка при самовивозі
                  </div>
                </div>
                <div className="product__bottom-block-option">
                  <CreditCardSVG className="product__bottom-block-option-icon" />
                  <div className="product__bottom-block-option-description">
                    Переказ на карту
                  </div>
                </div>
              </div>
            </div>
            <div className="product__bottom-block">
              <div className="product__bottom-block-title">Доставка</div>
              <div className="product__bottom-block-options">
                <div className="product__bottom-block-option">
                  <BoxSVG className="product__bottom-block-option-icon" />
                  <div className="product__bottom-block-option-description">
                    Новою поштою
                  </div>
                </div>
                <div className="product__bottom-block-option">
                  <WarehouseSVG className="product__bottom-block-option-icon" />
                  <div className="product__bottom-block-option-description">
                    Самовивіз зі складу
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductsSlider />
      <ModalWindow
        openModal={isModalOpen}
        isCart={true}
        visibility="shopping-cart__modal"
        secondModal={false}
      >
        <ShoppingCart />
      </ModalWindow>
    </>
  );
};
