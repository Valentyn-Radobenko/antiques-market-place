import { Settings } from '../../components/Settings/Settings';
import { Catalog } from '../../components/Catalog/Catalog';
import { MarketForm } from '../../components/MarketForm/MarketForm';
import { Categories } from '../../components/Categories/Categories';
import { useSearchParams } from 'react-router-dom';

export const MarketPage = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('query')

  return (
    <div className='market'>
      <MarketForm />
      <div className='market__main'>
        <div className='market__top-bar'>
          <h2 className='market__h2'>{query ? query : 'Всі предмети *кількість*'}</h2>
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
