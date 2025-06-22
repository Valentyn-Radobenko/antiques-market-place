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
import { DiscussionData } from '../../../types/discussionTypes';

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

const data: DiscussionData[] = [
  {
    id: '1',
    name: 'UI/UX дизайн у 2025 році',
    theme: ['Дизайн ', 'Технології', 'Флуд'],
    description:
      'Обговорюємо новітні тренди у сфері інтерфейсів та користувацького досвіду.',
    date: new Date('2025-06-10'),
    author: 'Марія Іванова',
    images: ['/images/expertise/exp1.webp'],
    status: 'ongoin',
    comments: [
      {
        id: 'c1',
        userId: 'u101',
        userName: 'Сергій Петров',
        text: 'Мені дуже подобається тренд на мінімалізм та мʼякі кольори!',
        date: new Date('2025-06-11T10:15:00'),
        isAnswer: null,
      },
      {
        id: 'c2',
        userId: 'u102',
        userName: 'Олена Корчагіна',
        text: 'А що скажете про новий підхід до навігації в мобільних додатках?',
        date: new Date('2025-06-11T12:40:00'),
        isAnswer: 'c1',
      },
      {
        id: 'c3',
        userId: 'u102',
        userName: 'Олена Корчагіна',
        text: 'А що скажете про новий підхід до навігації в мобільних додатках?',
        date: new Date('2025-06-11T12:40:00'),
        isAnswer: null,
      },
    ],
  },
  {
    id: '2',
    name: 'Майбутнє JavaScript: чи варто вивчати?',
    theme: ['Програмування'],
    description: 'Ділимося думками щодо розвитку мови та екосистеми JS.',
    date: new Date('2025-06-12'),
    author: 'Олексій Смирнов',
    status: 'ongoin',

    images: [],
    comments: [
      {
        id: 'c3',
        userId: 'u103',
        userName: 'Володимир Сидоров',
        text: 'JS стає дедалі потужнішим, особливо з новими стандартами.',
        date: new Date('2025-06-12T09:00:00'),
        isAnswer: null,
      },
    ],
  },
  {
    id: '3',
    name: 'У що пограти в настільне цього літа?',
    theme: ['Хобі'],
    description: 'Рекомендуємо улюблені настільні ігри для вечорів з друзями.',
    date: new Date('2025-06-13'),
    author: 'Наталія Романенко',
    status: 'ongoin',

    images: ['/images/expertise/exp1.webp', '/images/expertise/exp2.webp'],
    comments: [
      {
        id: 'c4',
        userId: 'u104',
        userName: 'Антон Васильєв',
        text: 'Обовʼязково спробуйте "Крила" та "Каркассон" — чудова атмосфера!',
        date: new Date('2025-06-13T18:20:00'),
        isAnswer: null,
      },
    ],
  },
  {
    id: '4',
    name: 'Чи варто переходити на електротранспорт?',
    theme: ['Технології'],
    description:
      'Обговорюємо переваги й недоліки електросамокатів, авто та велосипедів.',
    date: new Date('2025-06-14'),
    author: 'Ігор Коваленко',
    images: [],
    status: 'ongoin',

    comments: [
      {
        id: 'c5',
        userId: 'u105',
        userName: 'Ольга Бондар',
        text: 'У місті дуже зручно, але все залежить від інфраструктури.',
        date: new Date('2025-06-14T14:30:00'),
        isAnswer: null,
      },
      {
        id: 'c6',
        userId: 'u106',
        userName: 'Артем Гриненко',
        text: 'Я пересів на електровелосипед — кайф, але взимку важкувато.',
        date: new Date('2025-06-14T15:05:00'),
        isAnswer: 'c5',
      },
    ],
  },
];

export const Discussions = () => {
  const [setOpenMenu] = useOutletContext<OutletContextType>();
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);
  const [discussions, setDiscussions] = useState<DiscussionData[]>(data);

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
        >
          <CreateDiscussion setOpenModal={setOpenAddModal} />
        </ModalWindow>
      </div>
      <div className="profile-discussions__create-new">
        <p className="profile-discussions__create-new-text">
          Створити обговорення
        </p>
        <Info className="profile-discussions__create-new-icon" />
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
  );
};
