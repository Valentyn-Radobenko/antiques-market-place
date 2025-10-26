import { useSelector } from 'react-redux';
import { useIsMobile } from '../../../../hooks/useMediaQuery';
import { SavingState } from '../../../../store/store';
import { ArrowBackSVG } from '../../../Imgs/ArrowBackSVG';
import { useTranslation } from 'react-i18next';

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

  const { t } = useTranslation();

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
              {t('shopping-cart__order-block-title4')}
            </h3>
          </div>
        : <h3 className="shopping-cart__order-block-title">
            {t('shopping-cart__order-block-title4')}
          </h3>
        }
        <p className="shopping-cart__order-block-step">
          5<span className="shopping-cart__order-block-steps">/5</span>
        </p>
      </div>

      <div className="shopping-cart__order-conclusion">
        <div className="shopping-cart__order-conclusion-top">
          <h4 className="shopping-cart__order-conclusion-top-title">
            {t('shopping-cart__order-conclusion-top-title')}
          </h4>

          <div className="shopping-cart__order-conclusion-top-amount">
            <p className="shopping-cart__order-conclusion-top-amount-label">
              {t('shopping-cart__order-conclusion-top-amount-label', {
                count: cart.items.length,
              })}
            </p>

            <p className="shopping-cart__order-conclusion-top-amount-value">
              {totalPrice} грн
            </p>
          </div>
        </div>

        <div className="shopping-cart__order-conclusion-delivery">
          <h4 className="shopping-cart__order-conclusion-delivery-title">
            {t('shopping-cart__order-conclusion-delivery-title')}
          </h4>

          <p className="shopping-cart__order-conclusion-delivery-text">
            {t('shopping-cart__order-conclusion-delivery-text')}
          </p>
        </div>

        <div className="shopping-cart__order-conclusion-line" />

        <div className="shopping-cart__order-conclusion-terms">
          <div className="shopping-cart__order-conclusion-terms-block">
            <h4 className="shopping-cart__order-conclusion-terms-block-title">
              {t('shopping-cart__order-conclusion-terms-block-title')}
            </h4>

            <p className="shopping-cart__order-conclusion-terms-block-text">
              {t('shopping-cart__order-conclusion-terms-block-text')}
            </p>
          </div>

          <div className="shopping-cart__order-conclusion-terms-block">
            <h4 className="shopping-cart__order-conclusion-terms-block-title--accept">
              {t('shopping-cart__order-conclusion-terms-block-title--accept')}
            </h4>
            <ul className="shopping-cart__order-conclusion-terms-block-links">
              <li className="shopping-cart__order-conclusion-terms-block-link">
                {t('shopping-cart__order-conclusion-terms-block-link')}
              </li>
              <li className="shopping-cart__order-conclusion-terms-block-link">
                {t('shopping-cart__order-conclusion-terms-block-link2')}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
