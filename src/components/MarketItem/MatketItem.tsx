import { Link } from 'react-router-dom';

type Props = {
  item: {
    nameUa: string;
    nameEng: string;
    descriptionUa: string;
    descriptionEng: string;
    countryUa: string;
    countryEng: string;
    year: number;
    materialUa: string;
    materialEng: string;
    price: number;
    inventory: number;
    publicationDate: string;
    categoryIds: number[];
    photos: string[];
  };
};

export const MarketItem: React.FC<Props> = ({ item }) => {
  return (
    <div className="market-item">
      <img
        className="market-item__img"
        src={item.photos[0]}
        alt="###############"
      />
      <div className="market-item__text-info">
        <p className="market-item__text">{item.nameUa}</p>
        <div className="market-item__price-link">
          <p className="market-item__price">{item.price}</p>
          <Link to="#">arrow</Link>
        </div>
      </div>
      <div className="market-item__new">new</div>
    </div>
  );
};
