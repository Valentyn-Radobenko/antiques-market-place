import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, SavingState } from '../../../store/store';
import { removeSelectedItems } from '../../../store/slices/shoppingCartSlice';
import { useIsMobile } from '../../../hooks/useMediaQuery';
import { Tooltip } from '../../Tooltip/Tooltip';
import { VerifiedSVG } from '../../Imgs/VerifiedSVG';
import { UserDataStep } from './OrderSteps/UserDataStep';
import { OrdersStep } from './OrderSteps/OrdersStep';
import { DeliveryStep } from './OrderSteps/DeliveryStep';
import { PaymentStep } from './OrderSteps/PaymentStep';
import { SummaryStep } from './OrderSteps/SummaryStep';
import { useTranslation } from 'react-i18next';

type Props = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export const CartStep2OrderForm: React.FC<Props> = ({ setStep }) => {
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state: SavingState) => state.shoppingCart);
  const [files, setFiles] = useState<File[]>([]);
  const [orderStep, setOrderStep] = useState(1);

  const { t } = useTranslation();

  const [areErrorsOn, setAreErrorsOn] = useState(false);

  const isPhone = useIsMobile();

  const isUserDataChecked = !!(
    cart.user.firstName &&
    cart.user.lastName &&
    cart.user.phone &&
    cart.user.email &&
    cart.user.city &&
    cart.user.country
  );

  const isDeliveryChecked = !!(
    (cart.delivery.type === 'delivery' &&
      cart.delivery.receiver.firstName &&
      cart.delivery.receiver.middleName &&
      cart.delivery.receiver.lastName &&
      cart.delivery.receiver.phone &&
      ((cart.delivery.method === 'post' &&
        cart.delivery.service &&
        cart.delivery.branch) ||
        (cart.delivery.method === 'courier' &&
          cart.delivery.service &&
          cart.delivery.street &&
          cart.delivery.house &&
          cart.delivery.apartment))) ||
    (cart.delivery.type === 'pickup' && isUserDataChecked)
  );

  const isPaymentsChecked = !!(
    (cart.payment.method === 'onReceipt' && isDeliveryChecked) ||
    (cart.payment.method === 'international' && files.length > 0) ||
    (cart.payment.method === 'internal' && files.length > 0) ||
    (cart.payment.method === 'cash' && cart.delivery.type === 'pickup')
  );

  const canSubmit = isUserDataChecked && isDeliveryChecked && isPaymentsChecked;

  useEffect(() => {
    if (canSubmit) {
      setAreErrorsOn(false);
    }
  }, [canSubmit]);

  const handleOrdersSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (canSubmit) {
      dispatch(removeSelectedItems());
      setStep(3);
    }
  };

  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    ref.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [orderStep]);

  return (
    <form
      ref={ref}
      onSubmit={handleOrdersSubmit}
      className="shopping-cart__order"
      method="post"
    >
      {(!isPhone || (isPhone && orderStep === 1)) && (
        <UserDataStep areErrorsOn={areErrorsOn} />
      )}

      {(!isPhone || (isPhone && orderStep === 2)) && (
        <OrdersStep setOrderStep={setOrderStep} />
      )}

      {(!isPhone || (isPhone && orderStep === 3)) && (
        <DeliveryStep
          areErrorsOn={areErrorsOn}
          setOrderStep={setOrderStep}
        />
      )}

      {(!isPhone || (isPhone && orderStep === 4)) && (
        <PaymentStep
          setOrderStep={setOrderStep}
          areErrorsOn={areErrorsOn}
          setFiles={setFiles}
          files={files}
        />
      )}

      {(!isPhone || (isPhone && orderStep === 5)) && (
        <SummaryStep setOrderStep={setOrderStep} />
      )}

      {isPhone && orderStep === 1 && (
        <div className="shopping-cart__order-button-block">
          <button
            onClick={() => {
              setOrderStep(2);
            }}
            disabled={!isUserDataChecked}
            type="button"
            className="shopping-cart__cta"
          >
            <span className="shopping-cart__cta-text">
              {t('shopping-cart__cta-text2')}
            </span>
            <VerifiedSVG />
          </button>
        </div>
      )}

      {isPhone && orderStep === 2 && (
        <div className="shopping-cart__order-button-block">
          <button
            onClick={() => {
              setOrderStep(3);
            }}
            type="button"
            className="shopping-cart__cta"
          >
            <span className="shopping-cart__cta-text">
              {t('shopping-cart__cta-text2')}
            </span>
            <VerifiedSVG />
          </button>
        </div>
      )}

      {isPhone && orderStep === 3 && (
        <div className="shopping-cart__order-button-block">
          <button
            onClick={() => {
              setOrderStep(4);
            }}
            disabled={!isDeliveryChecked}
            type="button"
            className="shopping-cart__cta"
          >
            <span className="shopping-cart__cta-text">
              {t('shopping-cart__cta-text2')}
            </span>
            <VerifiedSVG />
          </button>
        </div>
      )}

      {isPhone && orderStep === 4 && (
        <div className="shopping-cart__order-button-block">
          <button
            onClick={() => {
              setOrderStep(5);
            }}
            disabled={!isPaymentsChecked}
            type="button"
            className="shopping-cart__cta"
          >
            <span className="shopping-cart__cta-text">
              {t('shopping-cart__cta-text2')}
            </span>
            <VerifiedSVG />
          </button>
        </div>
      )}

      {((!isPhone && canSubmit) || (orderStep === 5 && canSubmit)) && (
        <div className="shopping-cart__order-button-block">
          <button
            type="submit"
            disabled={!canSubmit}
            className="shopping-cart__cta shopping-cart__cta--submit"
          >
            <span className="shopping-cart__cta-text">
              {t('shopping-cart__cta-text3')}
            </span>
          </button>
        </div>
      )}

      {((!isPhone && !canSubmit) || (orderStep === 5 && !canSubmit)) && (
        <Tooltip
          onMouseEnter={() => {
            if (!canSubmit) {
              setAreErrorsOn(true);
            }
          }}
          customTooltipClassName="shopping-cart__order-button-block"
          customContentClassName="shopping-cart__cta-info"
          renderButton={() => (
            <button
              type="submit"
              disabled={!canSubmit}
              className="shopping-cart__cta shopping-cart__cta--submit"
            >
              <span className="shopping-cart__cta-text">
                {t('shopping-cart__cta-text3')}
              </span>
            </button>
          )}
          renderContent={() => (
            <>
              <p className="shopping-cart__cta-info-text">
                {t('shopping-cart__cta-info-text3')}
              </p>
            </>
          )}
        />
      )}
    </form>
  );
};
