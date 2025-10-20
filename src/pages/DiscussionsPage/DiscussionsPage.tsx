import { Link, Outlet, useSearchParams } from 'react-router-dom';
import { Crumbs } from '../../components/Crumbs/Crumbs';
import { FacebookLogoSVG } from '../../components/Imgs/FacebookLogoSVG';
import { MailSVG } from '../../components/Imgs/MailSVG';
import { TelegramLogoSVG } from '../../components/Imgs/TelegramLogoSVG';
import { useState, useEffect, useMemo } from 'react';
import { ModalWindow } from '../../components/ModalWindow/ModalWindow';
import { CreateDiscussion } from '../../components/CreateDiscussion/CreateDiscussion';
import { DiscussionRules } from '../../components/DiscussionRules/DiscussionRules';
import { discussions as data } from '../../data/discussions';
import { DiscussionData } from '../../types/discussionTypes';
import { Discussion } from '../../components/Discussion/Discussion';
import classNames from 'classnames';
import { Close } from '../../components/Imgs/Close';

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
  const [discussions, setDiscussions] = useState<DiscussionData[]>(data);
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedTags = useMemo(() => {
    const tagsParam = searchParams.get('tags');
    return tagsParam ? decodeURIComponent(tagsParam).split(',') : [];
  }, [searchParams]);

  const handleTagClick = (tag: string) => {
    let updatedTags: string[];

    if (selectedTags.includes(tag)) {
      updatedTags = selectedTags.filter((t) => t !== tag);
    } else {
      updatedTags = [...selectedTags, tag];
    }

    if (updatedTags.length === 0) {
      searchParams.delete('tags');
      setSearchParams(searchParams, { replace: true });
    } else {
      setSearchParams(
        { tags: encodeURIComponent(updatedTags.join(',')) },
        { replace: true },
      );
    }
  };

  const filteredDiscussions = useMemo(() => {
    if (selectedTags.length === 0) return discussions;

    return discussions.filter((d) =>
      d.theme.some((themeTag) => selectedTags.includes(themeTag)),
    );
  }, [selectedTags, discussions]);

  // При першому завантаженні: якщо є query, то фільтр одразу активний
  useEffect(() => {
    const tagsParam = searchParams.get('tags');
    if (tagsParam) {
      const tags = decodeURIComponent(tagsParam).split(',');
      if (tags.length > 0) {
        // можна зробити preload чи логіку якщо потрібно
      }
    }
  }, [searchParams]);

  return (
    <>
      <div className="discussions__nav-bar">
        <Crumbs
          customClassName="discussions__crumbs"
          links={['/club', '/club/discussions']}
          titles={['Клуб колекціонерів', 'Обговорення']}
        />
        <h1 className="discussions__title">
          Обговорення{' '}
          {/* {selectedTags.length > 0 && (
            <span className="discussions__active-tag">
              {selectedTags.join(', ')}
            </span>
          )} */}
        </h1>
      </div>

      <div className="discussions">
        <div className="discussions__details">
          <h4 className="discussions__details-title">Популярні теми:</h4>
          <div className="discussions__details-content">
            {tagsList.map((tag) => (
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
                    <Close />
                  </span>
                )}
              </p>
            ))}
          </div>
        </div>

        <div className="discussions__content">
          {filteredDiscussions.map((discussion) => (
            <Discussion
              setDiscussions={setDiscussions}
              key={discussion.id}
              discussion={discussion}
            />
          ))}
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
              to={'https://web.telegram.org/'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramLogoSVG className="exhibition__sm-icon" />
            </Link>
            <Link
              to={'https://www.facebook.com/'}
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
