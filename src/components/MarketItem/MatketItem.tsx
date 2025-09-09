import { Link } from 'react-router-dom';
import { Product } from '../../types/Product';
import { ArrowTale } from '../Imgs/ArrowTale';

type Props = {
  item: Product;
};

export const MarketItem: React.FC<Props> = ({ item }) => {
  return (
    <Link
      to={`/market/product/${item.slug}`}
      className="market-item"
    >
      <img
        className="market-item__img"
        src={item.imgs[0]}
        alt="###############"
      />
      <div className="market-item__text-info">
        <p className="market-item__text">{item.name.ua}</p>
        <div className="market-item__price-link">
          <p className="market-item__price">{item.price} грн</p>
          <ArrowTale className="market-item__arrow" />
        </div>
      </div>
      <div className="market-item__new">new</div>
    </Link>
  );
};
