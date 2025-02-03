import classNames from 'classnames';
import { availableCurrencies } from '../../../../data/availableCurrencies';
import { AppDispatch, RootState } from '../../../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrency } from '../../../../store/slices/currencySlice';
import { currencyType } from '../../../../types/currencyType';

export const ExpCurrency = () => {
  const currency = useSelector((state: RootState) => state.currency.currency);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <div className="exp-currency__buttons">
        {availableCurrencies.map((cur, ind) => (
          <button
            key={ind}
            onClick={() => dispatch(setCurrency(cur as currencyType))}
            className={classNames('exp-currency__button', {
              'exp-currency__button--dis': currency === cur,
            })}
            disabled={currency === cur}
          >
            {cur}
          </button>
        ))}
      </div>
    </>
  );
};
