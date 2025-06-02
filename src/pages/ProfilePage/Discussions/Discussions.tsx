import { useOutletContext } from 'react-router-dom';
import { ArrowTale } from '../../../components/Imgs/ArrowTale';
import { NavSortSearch } from '../../../components/NavSortSearch/NavSortSearch';
import { OutletContextType } from '../../../types/openMenuOtlet';
import { Info } from '../../../components/Imgs/Info';
import { PlusSVG } from '../../../components/Imgs/PlusSVG';
import { Discussion } from '../../../components/Discussion/Discussion';
import { CreateDiscussion } from '../../../components/CreateDiscussion/CreateDiscussion';

const sortings = [
  {
    id: 1,
    name: 'За новизною',
    types: ['Спочатку нові', 'Спочатку старі'],
  },
  {
    id: 2,
    name: 'За популярністю',
    types: ['Більш популярні', 'Меньш Популярні'],
  },
  {
    id: 3,
    name: 'За чимось',
    types: ['Більш популярні', 'Меньш Популярні'],
  },
  {
    id: 4,
    name: 'За тимось',
    types: ['Більш популярні', 'Меньш Популярні'],
  },
];

export const Discussions = () => {
  const [setOpenMenu] = useOutletContext<OutletContextType>();

  return (
    <div className="profile-discussions">
      <div className="profile-page__section">
        <div className="profile-page__section-title">
          <ArrowTale
            onClick={() => {
              setOpenMenu(false);
            }}
            className="profile-page__section-arrow"
          />
          <h2 className="profile-page__section-h2">Обговорення</h2>
        </div>
        <NavSortSearch sortings={sortings} />
        <Discussion />
        <CreateDiscussion />
        {/* <div className="orders__list">
        {orders.map((order) => (
          <Order
            key={order.id}
            order={order}
          />
        ))}
      </div> */}
      </div>
      <div className="profile-discussions__create-new">
        <p className="profile-discussions__create-new-text">
          Створити обговорення
        </p>
        <Info className="profile-discussions__create-new-icon" />
        <button className="profile-discussions__create-new-button">
          Додати тему
        </button>
      </div>
      <button className="profile-discussions__create-new-fixed-button">
        <PlusSVG />
      </button>
    </div>
  );
};
