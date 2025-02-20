import { Link } from 'react-router-dom';
import { Item } from '../Catalog/item';

type Props = {
  item: Item;
};

export const MarketItem: React.FC<Props> = ({ item }) => {
  return (
    <div className="market-item">
      <img
        className="market-item__img"
        src={item.img}
        alt=""
      />
      <div className="market-item__text-info">
        <p className="market-item__text">{item.name}</p>
        <div className="market-item__price-link">
          <p className="market-item__price">{item.price}</p>
          <Link to="#">arrow</Link>
        </div>
      </div>
      <div className="market-item__new">new</div>
    </div>
  );
};
