import { useSelector } from 'react-redux';
import { useIsMobile } from '../../../../hooks/useMediaQuery';
import { SavingState } from '../../../../store/store';
import { ArrowBackSVG } from '../../../Imgs/ArrowBackSVG';

type Props = {
  setOrderStep: React.Dispatch<React.SetStateAction<number>>;
};

export const SummaryStep: React.FC<Props> = ({ setOrderStep }) => {
  const isPhone = useIsMobile();
  const cart = useSelector((state: SavingState) => state.shoppingCart);

  const totalPrice = cart.selectedItems.reduce(
    (acc, item) => acc + item.price,
    0,
  );

  return (
    <div className="shopping-cart__order-block">
      <div className="shopping-cart__order-block-top">
        {isPhone ?
          <div className="shopping-cart__order-block-heading">
            <ArrowBackSVG
              onClick={() => setOrderStep(4)}
              className="shopping-cart__order-block-back-button"
            />
            <h3 className="shopping-cart__order-block-title">
              Підсумок замовлення
            </h3>
          </div>
        : <h3 className="shopping-cart__order-block-title">
            Підсумок замовлення
          </h3>
        }
        <p className="shopping-cart__order-block-step">
          5<span className="shopping-cart__order-block-steps">/5</span>
        </p>
      </div>
      <div className="shopping-cart__order-conclusion">
        <div className="shopping-cart__order-conclusion-top">
          <h4 className="shopping-cart__order-conclusion-top-title">
            До сплати
          </h4>

          <div className="shopping-cart__order-conclusion-top-amount">
            <p className="shopping-cart__order-conclusion-top-amount-label">
              {cart.items.length} товари на суму:{' '}
            </p>

            <p className="shopping-cart__order-conclusion-top-amount-value">
              {totalPrice} грн
            </p>
          </div>
        </div>

        <div className="shopping-cart__order-conclusion-delivery">
          <h4 className="shopping-cart__order-conclusion-delivery-title">
            Оплата за доставку
          </h4>

          <p className="shopping-cart__order-conclusion-delivery-text">
            сплачуються за тарифами перевізника
          </p>
        </div>

        <div className="shopping-cart__order-conclusion-line"></div>

        <div className="shopping-cart__order-conclusion-terms">
          <div className="shopping-cart__order-conclusion-terms-block">
            <h4 className="shopping-cart__order-conclusion-terms-block-title">
              Умови:
            </h4>

            <p className="shopping-cart__order-conclusion-terms-block-text">
              Отримання замовлення від 5 000 ₴ - 30 000 ₴ за наявності
              документів. При оплаті готівкою від 30 000 ₴ необхідно надати
              документи для верифікації згідно вимог Закону України від
              06.12.2019 №361-IX
            </p>
          </div>

          <div className="shopping-cart__order-conclusion-terms-block">
            <h4 className="shopping-cart__order-conclusion-terms-block-title">
              Підтверджуючи замовлення, я приймаю умови:
            </h4>
            <ul className="shopping-cart__order-conclusion-terms-block-links">
              <li className="shopping-cart__order-conclusion-terms-block-link">
                угоди користувача
              </li>
              <li className="shopping-cart__order-conclusion-terms-block-link">
                положення про обробку і захист персональних даних
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
