import { useSelector } from 'react-redux';
import { SavingState } from '../store/store';

export const useCurrency = () => {
  const currency = useSelector((state: SavingState) => state.currency.currency);
  const rates = useSelector((state: SavingState) => state.exchangeRates.rates);
  const cart = useSelector((state: SavingState) => state.shoppingCart);

  const convertFromUAH = (uah: number) => {
    if (currency === 'UAH' || !rates[currency]) return uah;
    return uah * rates[currency];
  };

  const formatPrice = (value: number) => {
    const converted = convertFromUAH(value);
    try {
      if (currency === 'BTC' || currency === 'ETH') {
        return `${converted.toFixed(8)} ${currency}`;
      }
      return new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency,
        maximumFractionDigits: 2,
      }).format(converted);
    } catch {
      return `${converted.toFixed(2)} ${currency}`;
    }
  };

  const totalPriceInUAH = cart.selectedItems.reduce(
    (acc, item) => acc + item.price,
    0,
  );

  const totalPrice = formatPrice(totalPriceInUAH);

  return { currency, convertFromUAH, formatPrice, totalPrice };
};
