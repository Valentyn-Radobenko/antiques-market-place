import { useEffect, useState } from 'react';
import apiClient from '../../utils/apiClient';
import { MarketItem } from '../MarketItem/MatketItem';

export const Catalog = () => {
  const [goods, setGoods] = useState([]);

  const [loader, setLoader] = useState(false);
  const handleCatalog = async () => {
    try {
      setLoader(true);
      await apiClient.get('/products').then((cata) => {
        setGoods(cata.data.content);
        setLoader(false);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleCatalog();
  }, []);

  return (
    <>
      <div className="items">
        {loader && <p>loader</p>}
        {goods.map((item, i) => (
          <MarketItem
            item={item}
            key={i}
          />
        ))}
      </div>
    </>
  );
};
