import { Catalog } from '../../components/Catalog/Catalog';
import { MarketForm } from '../../components/MarketForm/MarketForm';
import { useSearchParams } from 'react-router-dom';
import { DropdownNavigation } from '../../components/DropdownNavigation/DropdownNavigation';
import { filters } from '../../data/filters';
import { sortings } from '../../data/sortings';
import { categories } from '../../data/categories';
import { SearchLink } from '../../utils/SearchLink';
import { useEffect, useState } from 'react';
import goodsJson from '../../data/products.json';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Arrow } from '../../components/Imgs/Arrow';
import { Product } from '../../types/Product';

export const MarketPage = () => {
  const [searchParams] = useSearchParams();
  const showSearch = useSelector((state: RootState) => state.expSearch);

  const category = searchParams.get('category');
  const sort = searchParams.get('sort');
  const country = searchParams.getAll('country');
  const year = searchParams.getAll('year');
  const material = searchParams.getAll('material');
  const query = searchParams.get('query');
  const [goods, setGoods] = useState<Product[]>([]);

  useEffect(() => {
    let goodsToShow = goodsJson;

    if (category) {
      goodsToShow = goodsToShow.filter(
        (a) => category === a.subcategory.slug || category === a.category.slug,
      );
    }

    if (query) {
      goodsToShow = goodsToShow.filter(
        (a) =>
          a.category.ua
            .toLocaleLowerCase()
            .includes(query.toLocaleLowerCase()) ||
          a.category.en
            .toLocaleLowerCase()
            .includes(query.toLocaleLowerCase()) ||
          a.year.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
          a.country.en
            .toLocaleLowerCase()
            .includes(query.toLocaleLowerCase()) ||
          a.country.ua
            .toLocaleLowerCase()
            .includes(query.toLocaleLowerCase()) ||
          a.material.ua
            .toLocaleLowerCase()
            .includes(query.toLocaleLowerCase()) ||
          a.material.en
            .toLocaleLowerCase()
            .includes(query.toLocaleLowerCase()) ||
          a.name.en.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
          a.name.ua.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
          a.description.en
            .toLocaleLowerCase()
            .includes(query.toLocaleLowerCase()) ||
          a.description.ua
            .toLocaleLowerCase()
            .includes(query.toLocaleLowerCase()),
      );
    }

    if (country.length > 0) {
      goodsToShow = goodsToShow.filter((a) => country.includes(a.country.slug));
    }

    if (year.length > 0) {
      goodsToShow = goodsToShow.filter((a) => {
        for (let i = 0; i < year.length; i++) {
          const yearArray = year[i].split('-');
          if (+a.year >= +yearArray[0] && +a.year <= +yearArray[1]) {
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

    if (sort) {
      goodsToShow = [...goodsToShow].sort((a, b) => {
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

    setGoods(goodsToShow);
  }, [searchParams]);

  return (
    <div className="market">
      {showSearch.expSearch && <MarketForm searchQuery={query} />}

      {category && (
        <div className="market__navigation">
          <SearchLink
            className="market__searchlink"
            params={{ category: null }}
          >
            <p className="market__searchlink-title">Маркет</p>
            <Arrow className="market__searchlink-arrow" />
          </SearchLink>
          <SearchLink
            className="market__searchlink"
            params={{
              category:
                categories.options.find((singleCategory) =>
                  singleCategory.subcategories.find(
                    (subcategory) => subcategory.slug === category,
                  ),
                )?.slug || null,
            }}
          >
            <p className="market__searchlink-title">
              {
                categories.options.find((singleCategory) =>
                  singleCategory.subcategories.find(
                    (subcategory) => subcategory.slug === category,
                  ),
                )?.nameUa
              }
            </p>
            <Arrow className="market__searchlink-arrow" />
          </SearchLink>
          {category !==
            categories.options.find((cat) => cat.slug === category)?.slug && (
            <div className="market__searchlink">
              <p className="market__searchlink-title">
                {
                  categories.options
                    .flatMap((cat) => cat.subcategories)
                    .find((sub) => sub.slug === category)?.nameUa
                }
              </p>
              <Arrow className="market__searchlink-arrow" />
            </div>
          )}
        </div>
      )}

      <div className="market__main">
        <div className="market__top-bar">
          {category ?
            <h2 className="market__h2">
              Пошук за категорією{' '}
              {
                categories.options.find((a) =>
                  a.subcategories.find((b) => b.slug === category),
                )?.nameUa
              }{' '}
              <span className="market__gray-word">{goods.length}</span>
            </h2>
          : <h2 className="market__h2">
              Всі предмети{' '}
              <span className="market__gray-word">{goods.length}</span>
            </h2>
          }
          <DropdownNavigation
            searchParams={searchParams}
            optionType={categories}
          />
        </div>
        <div className="market__settings-catalog">
          <div className="market__settings">
            <DropdownNavigation
              searchParams={searchParams}
              optionType={filters}
            />
            <DropdownNavigation
              searchParams={searchParams}
              optionType={sortings}
            />
          </div>
          <Catalog goods={goods} />
        </div>
      </div>

      <div className="market-mob__main">
        <div className="market-mob__top-bar">
          {category ?
            <h2 className="market__h2">
              Пошук за категорією{' '}
              {
                categories.options.find((a) =>
                  a.subcategories.find((b) => b.slug === category),
                )?.nameUa
              }{' '}
              <span className="market__gray-word">{goods.length}</span>
            </h2>
          : <h2 className="market__h2">
              Всі предмети{' '}
              <span className="market__gray-word">{goods.length}</span>
            </h2>
          }
          <div className="market-mob__settings">
            <DropdownNavigation
              searchParams={searchParams}
              optionType={categories}
            />
            <DropdownNavigation
              searchParams={searchParams}
              optionType={filters}
            />
            <DropdownNavigation
              searchParams={searchParams}
              optionType={sortings}
            />
          </div>
        </div>
        <Catalog goods={goods} />
      </div>
    </div>
  );
};
