import { Outlet, useOutletContext, useSearchParams } from 'react-router-dom';
import { ArrowTale } from '../../../components/Imgs/ArrowTale';
import { NavSortSearch } from '../../../components/NavSortSearch/NavSortSearch';
import { OutletContextType } from '../../../types/openMenuOtlet';
import { Info } from '../../../components/Imgs/Info';
import { PlusSVG } from '../../../components/Imgs/PlusSVG';
import { Discussion } from '../../../components/Discussion/Discussion';
import { CreateDiscussion } from '../../../components/CreateDiscussion/CreateDiscussion';
import { useState, useEffect } from 'react';
import { ModalWindow } from '../../../components/ModalWindow/ModalWindow';
import { DiscussionData } from '../../../types/discussionTypes';
import { DiscussionRules } from '../../../components/DiscussionRules/DiscussionRules';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { BaseNavSort, BaseNavigation } from '../../../types/baseNavigation';
import { User } from '../../../types/user';

const sortings: BaseNavSort[] = [
  {
    id: '1',
    nameUa: 'За новизною',
    nameEn: 'By novelty',
    types: [
      {
        ua: 'Спочатку нові',
        en: 'Newest first',
        slug: 'newest-first',
      },
      {
        ua: 'Спочатку старі',
        en: 'Oldest first',
        slug: 'oldest-first',
      },
    ],
  },
  {
    id: '2',
    nameUa: 'За популярністю',
    nameEn: 'By popularity',
    types: [
      {
        ua: 'Більш популярні',
        en: 'More popular',
        slug: 'more-popular',
      },
      {
        ua: 'Меньш Популярні',
        en: 'Less popular',
        slug: 'less-popular',
      },
    ],
  },
];

const pageNavigation: BaseNavigation[] = [
  {
    ua: 'Усі теми',
    en: 'All topics',
    slug: 'all-topics',
    mainOption: true,
  },
  {
    ua: 'Мої теми',
    en: 'My topics',
    slug: 'my-topics',
  },
  {
    ua: 'Завершені теми',
    en: 'Completed topics',
    slug: 'completed-topics',
  },
  {
    ua: 'Мої коментарі',
    en: 'My comments',
    slug: 'my-comments',
  },
];

export const Discussions = () => {
  const [setOpenMenu] = useOutletContext<OutletContextType>();
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);
  const [openRules, setOpenRules] = useState<boolean>(false);
  const discussions: DiscussionData[] = useSelector(
    (state: RootState) => state.discussions,
  );
  const user: User = useSelector((state: RootState) => state.user);
  const [discussionsToShow, setDiscussionsToShow] =
    useState<DiscussionData[]>();
  const [searchParams] = useSearchParams();
  const filterBy = searchParams.get('filterBy');
  const query = searchParams.get('query');
  const sortBy = searchParams.get('sortBy');

  useEffect(() => {
    const userDiscussions = discussions.filter(
      (a) =>
        a.author.id === user.id || a.comments.some((b) => b.userId === user.id),
    );

    if (userDiscussions) {
      let newDiscussions = [...userDiscussions];

      if (filterBy) {
        switch (filterBy) {
          case 'my-topics':
            newDiscussions = newDiscussions.filter(
              (a) => a.author.id === user.id,
            );
            break;
          case 'my-comments':
            newDiscussions = newDiscussions.filter((a) =>
              a.comments.some((b) => b.userId === user.id),
            );
            break;
          case 'completed-topics':
            newDiscussions = newDiscussions.filter((a) => a.status === 'ended');
            break;
          default:
            newDiscussions = discussions;
        }
      }

      if (query) {
        newDiscussions = newDiscussions.filter(
          (a) => a.name.includes(query) || a.description.includes(query),
        );
      }

      if (sortBy) {
        newDiscussions = [...newDiscussions].sort((a, b) => {
          switch (sortBy) {
            case 'newest-first':
              return +b.date - +a.date;
            case 'oldest-first':
              return +a.date - +b.date;
            case 'more-popular':
              return b.comments.length - a.comments.length;
            case 'less-popular':
              return a.comments.length - b.comments.length;
            default:
              return 0;
          }
        });
      }

      setDiscussionsToShow(newDiscussions);
    }
  }, [searchParams, discussions]);

  console.log(discussionsToShow);

  return (
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
          {discussionsToShow &&
            discussionsToShow.map((discussion) => (
              <Discussion
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
  );
};
