import { Settings } from '../../components/Settings/Settings';
import { Catalog } from '../../components/Catalog/Catalog';
import { MarketForm } from '../../components/MarketForm/MarketForm';
import { Categories } from '../../components/Categories/Categories';

export const MarketPage = () => {

  return (
    <div className='market'>
      <MarketForm />
      <div className='market__main'>
        <div className='market__top-bar'>
          <h2 className='market__h2'>Всі предмети *кількість*</h2>
          <Categories />
        </div>
        <div className='market__settings-catalog'>
          <Settings />
          <Catalog />
        </div>
      </div>
    </div>
  )
};
