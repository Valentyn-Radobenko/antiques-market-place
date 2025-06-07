import { useOutletContext } from 'react-router-dom';
import { ArrowTale } from '../../../components/Imgs/ArrowTale';
import { NavSortSearch } from '../../../components/NavSortSearch/NavSortSearch';
import { OutletContextType } from '../../../types/openMenuOtlet';
import { Info } from '../../../components/Imgs/Info';
import { PlusSVG } from '../../../components/Imgs/PlusSVG';
import { Discussion } from '../../../components/Discussion/Discussion';
import { CreateDiscussion } from '../../../components/CreateDiscussion/CreateDiscussion';
import { useState } from 'react';
import { ModalWindow } from '../../../components/ModalWindow/ModalWindow';

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
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);

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
        {/* <div className="orders__list">
        {orders.map((order) => (
          <Order
            key={order.id}
            order={order}
          />
        ))}
      </div> */}

        <ModalWindow
          visibility={'profile-discussions__add-new-visibility'}
          openModal={openAddModal}
          setOpenModal={setOpenAddModal}
        >
          <CreateDiscussion setOpenModal={setOpenAddModal} />
        </ModalWindow>
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
      <button
        onClick={() => setOpenAddModal(true)}
        className="profile-discussions__create-new-fixed-button"
      >
        <PlusSVG />
      </button>
    </div>
  );
};
