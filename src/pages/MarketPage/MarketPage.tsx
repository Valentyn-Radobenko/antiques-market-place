import { Catalog } from '../../components/Catalog/Catalog';
import { MarketForm } from '../../components/MarketForm/MarketForm';
import { useSearchParams } from 'react-router-dom';
import { DropdownNavigation } from '../../components/DropdownNavigation/DropdownNavigation';
import { filters } from '../../data/filters';
import { sortings } from '../../data/sortings';
import { categories } from '../../data/categories';

export const MarketPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  return (
    <div className="market">
      <MarketForm />
      <div className="market__main">
        <div className="market__top-bar">
          <h2 className="market__h2">
            {query ? query : 'Всі предмети *кількість*'}
          </h2>
          {/* <Categories /> */}
        </div>
        <div className="market__settings-catalog">
          <div className="market__settings">
            <DropdownNavigation optionType={filters} />
            <DropdownNavigation optionType={sortings} />
            {/* <Filters /> */}
            {/* <Sortings /> */}
          </div>
          <Catalog />
        </div>
      </div>

      <div className="market-mob__main">
        <div className="market-mob__top-bar">
          <h2 className="market-mob__h2">
            {query ? query : 'Всі предмети *кількість*'}
          </h2>
          <div className="market-mob__settings">
            {/* <Categories /> */}
            {/* <Filters /> */}
            <DropdownNavigation optionType={filters} />
            <DropdownNavigation optionType={sortings} />
            <DropdownNavigation optionType={categories} />
            {/* <Sortings /> */}
          </div>
        </div>

        <Catalog />
      </div>
    </div>
  );
};
