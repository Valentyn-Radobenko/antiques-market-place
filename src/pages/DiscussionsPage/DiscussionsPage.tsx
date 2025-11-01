import { Link, Outlet, useSearchParams } from 'react-router-dom';
import { Crumbs } from '../../components/Crumbs/Crumbs';
import { FacebookLogoSVG } from '../../components/Imgs/FacebookLogoSVG';
import { MailSVG } from '../../components/Imgs/MailSVG';
import { TelegramLogoSVG } from '../../components/Imgs/TelegramLogoSVG';
import { useState, useMemo } from 'react';
import { ModalWindow } from '../../components/ModalWindow/ModalWindow';
import { CreateDiscussion } from '../../components/CreateDiscussion/CreateDiscussion';
import { DiscussionRules } from '../../components/DiscussionRules/DiscussionRules';
import { DiscussionData } from '../../types/discussionTypes';
import { Discussion } from '../../components/Discussion/Discussion';
import classNames from 'classnames';
import { CloseSmallSVG } from '../../components/Imgs/CloseSmallSVG';
import { SearchSVG } from '../../components/Imgs/SearchSVG';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const tagsList = [
  'Монети України',
  'Меблі',
  'Живопис',
  'Нумізматика',
  'Книги',
  'Марки',
  'Філотелія',
  'Сфрагістика',
  'Інші монети',
];

export const DiscussionsPage = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const discussions: DiscussionData[] = useSelector(
    (state: RootState) => state.discussions,
  );

  // --- Параметри URL ---
  const selectedTags = useMemo(() => {
    const tagsParam = searchParams.get('tags');
    return tagsParam ? decodeURIComponent(tagsParam).split(',') : [];
  }, [searchParams]);

  const searchQuery = useMemo(() => {
    const q = searchParams.get('search');
    return q ? decodeURIComponent(q) : '';
  }, [searchParams]);

  // --- Обробка кліку по тегу ---
  const handleTagClick = (tag: string) => {
    let updatedTags: string[];

    if (selectedTags.includes(tag)) {
      updatedTags = selectedTags.filter((t) => t !== tag);
    } else {
      updatedTags = [...selectedTags, tag];
    }

    const newParams: Record<string, string> = {};

    if (updatedTags.length > 0) {
      newParams.tags = encodeURIComponent(updatedTags.join(','));
    }
    if (searchQuery) {
      newParams.search = encodeURIComponent(searchQuery);
    }

    setSearchParams(newParams, { replace: true });
  };

  // --- Пошук ---
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trimStart();
    const newParams: Record<string, string> = {};

    if (selectedTags.length > 0) {
      newParams.tags = encodeURIComponent(selectedTags.join(','));
    }
    if (value) {
      newParams.search = encodeURIComponent(value);
    }

    setSearchParams(newParams, { replace: true });
  };

  // --- Фільтрація дискусій ---
  const filteredDiscussions = useMemo(() => {
    let filtered = discussions;

    // фільтр за тегами
    if (selectedTags.length > 0) {
      filtered = filtered.filter((d) =>
        d.theme.some((themeTag) => selectedTags.includes(themeTag)),
      );
    }

    // фільтр за пошуком
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (d) =>
          d.name.toLowerCase().includes(lowerQuery) ||
          d.description.toLowerCase().includes(lowerQuery) ||
          d.author.name.toLowerCase().includes(lowerQuery) ||
          d.theme.some((tag) => tag.toLowerCase().includes(lowerQuery)),
      );
    }

    return filtered;
  }, [selectedTags, discussions, searchQuery]);

  // --- Пошук серед тегів ---
  const filteredTags = useMemo(() => {
    if (!searchQuery) return tagsList;
    const lower = searchQuery.toLowerCase();
    return tagsList.filter((t) => t.toLowerCase().includes(lower));
  }, [searchQuery]);

  return (
    <>
      <div className="discussions__nav-bar">
        <Crumbs
          customClassName="discussions__crumbs"
          links={['/club', '/club/discussions']}
          titles={['Клуб колекціонерів', 'Обговорення']}
        />
        <h1 className="discussions__title">Обговорення</h1>
      </div>

      <div className="discussions">
        <div className="discussions__details">
          <h4 className="discussions__details-title">Популярні теми:</h4>

          <label className="discussions__details-search">
            <SearchSVG className="discussions__details-search-icon" />
            <input
              className="discussions__details-search-input"
              type="text"
              placeholder="Я шукаю..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </label>

          <div className="discussions__details-content">
            {filteredTags.map((tag) => (
              <p
                key={tag}
                className={classNames('discussions__details-tag', {
                  'discussions__details-tag--active':
                    selectedTags.includes(tag),
                })}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
                {selectedTags.includes(tag) && (
                  <span
                    className="discussions__details-close"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTagClick(tag);
                    }}
                  >
                    <CloseSmallSVG />
                  </span>
                )}
              </p>
            ))}
          </div>
        </div>

        <div className="discussions__content">
          {filteredDiscussions.map((discussion) => (
            <Discussion
              key={discussion.id}
              discussion={discussion}
            />
          ))}

          {filteredDiscussions.length === 0 && (
            <div className="items__no-items-wrapper">
              <div className="items__no-items">
                <div className="items__text-block">
                  <div className="items__text-block-2">
                    <p className="items__yikes">йо-йо-йой</p>
                    <p className="items__main-text-no-items">
                      За обраними фільтрами результатів немає.
                    </p>
                  </div>

                  <p className="items__hint-noitems desk-tab">
                    Спробуйте змінити умови.
                  </p>
                </div>
                <img
                  className="items__img"
                  src="images/no-items.png"
                  alt=""
                />
              </div>
              <p className="items__hint-noitems phone">
                Спробуйте змінити умови.
              </p>
            </div>
          )}
        </div>

        <div className="exhibition__additional">
          <div className="exhibitions__offer exhibitions__offer--exhibition">
            <div className="exhibitions__offer-heading">
              <h3 className="exhibitions__offer-title">Створити обговорення</h3>
              <div
                onClick={() => setIsInfoOpen(true)}
                className="exhibitions__offer-icon"
              ></div>
            </div>
            <button
              onClick={() => setOpenAddModal(true)}
              className="exhibitions__offer-button exhibitions__offer-button--exhibition"
            >
              Додати тему
            </button>
          </div>

          <div className="exhibition__sm">
            <Link
              to="https://web.telegram.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramLogoSVG className="exhibition__sm-icon" />
            </Link>
            <Link
              to="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookLogoSVG className="exhibition__sm-icon" />
            </Link>
            <Link
              to="mailto:example@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MailSVG className="exhibition__sm-icon" />
            </Link>
          </div>
        </div>
      </div>

      <ModalWindow
        visibility={'profile-discussions__add-new-visibility'}
        openModal={openAddModal}
        setOpenModal={setOpenAddModal}
        secondModal={false}
      >
        <CreateDiscussion setOpenModal={setOpenAddModal} />
      </ModalWindow>

      <ModalWindow
        visibility={'profile-discussions__add-new-visibility'}
        openModal={isInfoOpen}
        setOpenModal={setIsInfoOpen}
        secondModal={false}
      >
        <DiscussionRules setOpenModal={setIsInfoOpen} />
      </ModalWindow>

      <Outlet />
    </>
  );
};
