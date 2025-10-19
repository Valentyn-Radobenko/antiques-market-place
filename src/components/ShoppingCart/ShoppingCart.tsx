import React, { useState } from 'react';
import classNames from 'classnames';
import { CartStep1Products } from './CartStep1Products/CartStep1Products';
import { CartStep2OrderForm } from './CartStep2OrderForm/CartStep2OrderForm';
import { ShoppingCartHeader } from './ShoppingCartHeader/ShoppingCartHeader';
import { CartStep3EndMessage } from './CartStep3EndMessage/CartStep3EndMessage';

export const ShoppingCart: React.FC = () => {
  const [step, setStep] = useState(1);

  return (
    <div
      className={classNames('shopping-cart', {
        'shopping-cart--end': step === 3,
      })}
    >
      <ShoppingCartHeader step={step} />

      {step === 1 && <CartStep1Products setStep={setStep} />}
      {step === 2 && <CartStep2OrderForm setStep={setStep} />}
      {step === 3 && <CartStep3EndMessage />}
    </div>
  );
};
