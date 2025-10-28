import { Outlet, useOutletContext } from 'react-router-dom';
import { ArrowTale } from '../../../components/Imgs/ArrowTale';
import { NavSortSearch } from '../../../components/NavSortSearch/NavSortSearch';
import { OutletContextType } from '../../../types/openMenuOtlet';
import { Info } from '../../../components/Imgs/Info';
import { discussions as data } from '../../../data/discussions';
import { PlusSVG } from '../../../components/Imgs/PlusSVG';
import { Discussion } from '../../../components/Discussion/Discussion';
import { CreateDiscussion } from '../../../components/CreateDiscussion/CreateDiscussion';
import { useState } from 'react';
import { ModalWindow } from '../../../components/ModalWindow/ModalWindow';
import { DiscussionData } from '../../../types/discussionTypes';
import { DiscussionRules } from '../../../components/DiscussionRules/DiscussionRules';
import { useSelector } from 'react-redux';
import { SavingState } from '../../../store/store';
import { useTranslation } from 'react-i18next';

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

const pageNavigation = [
  'Усі теми',
  'Мої теми',
  'Завершені теми',
  'Мої  коментарі',
];

export const Discussions = () => {
  const [setOpenMenu] = useOutletContext<OutletContextType>();
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);
  const [discussions, setDiscussions] = useState<DiscussionData[]>(data);
  const [openRules, setOpenRules] = useState<boolean>(false);

  const lang = useSelector((state: SavingState) => state.language.language);
  const { t } = useTranslation();

  return (
    <>
      {lang === 'en' && (
        <div className="profile-page__section">
          <div className="profile-page__section-title">
            <ArrowTale
              onClick={() => {
                setOpenMenu(false);
              }}
              className="profile-page__section-arrow"
            />

            <h2 className="profile-page__section-h2">{t('no-translation')}</h2>
          </div>
        </div>
      )}
      {lang === 'ua' && (
        <>
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
              <NavSortSearch
                pageNavigation={pageNavigation}
                sortings={sortings}
              />
              {discussions.map((discussion) => (
                <Discussion
                  setDiscussions={setDiscussions}
                  key={discussion.id}
                  discussion={discussion}
                />
              ))}
              <ModalWindow
                visibility={'profile-discussions__add-new-visibility'}
                openModal={openAddModal}
                setOpenModal={setOpenAddModal}
                secondModal={false}
              >
                <CreateDiscussion setOpenModal={setOpenAddModal} />
              </ModalWindow>
            </div>
            <div className="profile-discussions__create-new">
              <p className="profile-discussions__create-new-text">
                Створити обговорення
              </p>
              <Info
                onClick={() => setOpenRules(true)}
                className="profile-discussions__create-new-icon"
              />
              <button
                onClick={() => setOpenAddModal(true)}
                className="profile-discussions__create-new-button"
              >
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
          <ModalWindow
            visibility="create-discussion__rules-visibility"
            openModal={openRules}
            setOpenModal={setOpenRules}
            secondModal={true}
          >
            <DiscussionRules setOpenModal={setOpenRules} />
          </ModalWindow>

          <Outlet />
        </>
      )}
    </>
  );
};
