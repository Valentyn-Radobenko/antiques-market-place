import { useEffect, useState } from 'react';
// import apiClient from '../../utils/apiClient';
import { MarketItem } from '../MarketItem/MatketItem';
import goodsJson from '../../data/products.json';
import { Product } from '../../types/product';
import { Link, useSearchParams } from 'react-router-dom';

export const Catalog = () => {
  const [searchParams] = useSearchParams();

  const category = searchParams.get('category');
  const sort = searchParams.get('sort');
  const country = searchParams.getAll('country');
  const year = searchParams.getAll('year');
  const material = searchParams.getAll('material');
  const [goods, setGoods] = useState<Product[]>([]);

  useEffect(() => {
    let goodsToShow = goodsJson;
    if (category) {
      goodsToShow = goodsToShow.filter((a) => category === a.subcategory.slug);
    }

    if (sort) {
      goodsToShow.sort((a, b) => {
        switch (sort) {
          case 'asc':
            return a.price - b.price;
          case 'desc':
            return b.price - a.price;
          case 'new-first':
            return Number(a.publicationDate) - Number(b.publicationDate);
          case 'old-first':
            return Number(b.publicationDate) - Number(a.publicationDate);
          case 'newest':
            return +a.year - +b.year;
          case 'oldest':
            return +b.year - +a.year;
          case 'a-z':
            return a.name.ua
              .toLowerCase()
              .localeCompare(b.name.ua.toLowerCase());
          case 'z-a':
            return b.name.ua
              .toLowerCase()
              .localeCompare(a.name.ua.toLowerCase());
          default:
            return 0;
        }
      });
    }

    if (country.length > 0) {
      goodsToShow = goodsToShow.filter((a) => country.includes(a.country.slug));
    }
    if (year.length > 0) {
      goodsToShow = goodsToShow.filter((a) => {
        for (let i = 0; i < year.length; i++) {
          const yearArray = year[i].split('-');
          if (+a.year > +yearArray[0] && +a.year < +yearArray[1]) {
            console.log(true);
            return true;
          }
        }
      });
    }
    if (material.length > 0) {
      goodsToShow = goodsToShow.filter((a) =>
        material.includes(a.material.slug),
      );
    }

    setGoods(goodsToShow);
  }, [searchParams]);

  useEffect(() => {}, []);

  // const [goods, setGoods] = useState([]);
  // const [loader, setLoader] = useState(false);
  // const handleCatalog = async () => {
  //   try {
  //     setLoader(true);
  //     await apiClient.get('/products').then((cata) => {
  //       setGoods(cata.data.content);
  //       setLoader(false);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   handleCatalog();
  // }, []);

  return (
    <>
      <div className="items">
        {/* {loader && <p>loader</p>} */}
        {goods.map((item, i) => (
          <Link to={`/market/product/${item.slug}`}>
            <MarketItem
              item={item}
              key={i}
            />
          </Link>
        ))}
      </div>
    </>
  );
};
