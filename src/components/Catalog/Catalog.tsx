import { MarketItem } from '../MarketItem/MatketItem';
import { Product } from '../../types/Product';

type Props = {
  goods: Product[];
};

export const Catalog: React.FC<Props> = ({ goods }) => {
  return (
    <>
      {goods.length !== 0 ?
        <div className="items">
          {/* {loader && <p>loader</p>} */}
          {goods.map((item, i) => (
            <MarketItem
              item={item}
              key={i}
            />
          ))}
        </div>
      : <div className="items__no-items-wrapper">
          <div className="items__no-items">
            <div className="items__text-block">
              <div className="items__text-block-2">
                <p className="items__yikes">йо-йо-йой</p>
                <p className="items__main-text-no-items">
                  За обраними фільтрами результатів немає.
                </p>
              </div>

              <p className="items__hint-noitems desk-tab">
                Спробуйте змінити умови.
              </p>
            </div>
            <img
              className="items__img"
              src="images/no-items.png"
              alt=""
            />
          </div>
          <p className="items__hint-noitems phone">Спробуйте змінити умови.</p>
        </div>
      }
    </>
  );
};
