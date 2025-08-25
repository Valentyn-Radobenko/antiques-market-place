import { Product } from '../../types/product';
import { ArrowTale } from '../Imgs/ArrowTale';

type Props = {
  item: Product;
};

export const MarketItem: React.FC<Props> = ({ item }) => {
  return (
    <div className="market-item">
      <img
        className="market-item__img"
        src={item.imgs[0]}
        alt="###############"
      />
      <div className="market-item__text-info">
        <p className="market-item__text">{item.name.ua}</p>
        <div className="market-item__price-link">
          <p className="market-item__price">{item.price}</p>
          <ArrowTale className="market-item__arrow" />
        </div>
      </div>
      <div className="market-item__new">new</div>
    </div>
  );
};
