import { MarketItem } from '../MarketItem/MatketItem';
import { Product } from '../../types/Product';
import { useTranslation } from 'react-i18next';

type Props = {
  goods: Product[];
};

export const Catalog: React.FC<Props> = ({ goods }) => {
  const { t } = useTranslation();

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
                <p className="items__yikes">
                  {t('no-content__block-top-text')}
                </p>
                <p className="items__main-text-no-items">
                  {t('items__main-text-no-items')}
                </p>
              </div>

              <p className="items__hint-noitems desk-tab">
                {t('items__hint-noitems')}
              </p>
            </div>
            <img
              className="items__img"
              src="images/no-items.png"
              alt=""
            />
          </div>
          <p className="items__hint-noitems phone">
            {t('items__hint-noitems')}
          </p>
        </div>
      }
    </>
  );
};
