import { Link } from 'react-router-dom';
import { Crumbs } from '../../components/Crumbs/Crumbs';
import { FacebookLogoSVG } from '../../components/Imgs/FacebookLogoSVG';
import { MailSVG } from '../../components/Imgs/MailSVG';
import { TelegramLogoSVG } from '../../components/Imgs/TelegramLogoSVG';
// import discussions from '../../data/discussions.json';
// import { useSelector } from 'react-redux';
// import { SavingState } from '../../store/store';
import { useState } from 'react';
import { ModalWindow } from '../../components/ModalWindow/ModalWindow';
import { useIsTablet } from '../../hooks/useMediaQuery';
import { CreateDiscussion } from '../../components/CreateDiscussion/CreateDiscussion';
import { DiscussionRules } from '../../components/DiscussionRules/DiscussionRules';
import { data } from '../ProfilePage/Discussions/Discussions';
import { DiscussionData } from '../../types/discussionTypes';
import { Discussion } from '../../components/Discussion/Discussion';

export const DiscussionsPage = () => {
  // const { slug } = useParams();
  // const discussions = discussions.find((p) => p.slug === slug);
  // const lang = useSelector((state: SavingState) => state.language.language);

  // const [content, setContent] = useState('');
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);
  const [isInfoOpen, setIsInfoOpen] = useState<boolean>(false);

  const isTablet = useIsTablet();

  const [discussions, setDiscussions] = useState<DiscussionData[]>(data);

  // useEffect(() => {
  //   if (discussions?.content[lang]) {
  //     fetch(discussions.content[lang])
  //       .then((res) => res.text())
  //       .then(setContent)
  //       .catch(console.error);
  //   }
  // }, [discussions, lang]);

  // if (!discussions) {
  //   return <></>;
  // }

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
        {!isTablet && (
          <div className="discussions__details">
            <h4 className="discussions__details-title">Популярні теми:</h4>
            <div className="discussions__details-content">
              <p className="discussions__details-tag">Монети України</p>
              <p className="discussions__details-tag">Меблі</p>
              <p className="discussions__details-tag">Живопис</p>
              <p className="discussions__details-tag">Нумізматика</p>
              <p className="discussions__details-tag">Книги</p>
              <p className="discussions__details-tag">Марки</p>
              <p className="discussions__details-tag">Філотелія</p>
              <p className="discussions__details-tag">Сфрагістика</p>
              <p className="discussions__details-tag">Інші монети</p>
            </div>
          </div>
        )}

        {isTablet && (
          <div className="discussions__details">
            <h4 className="discussions__details-title">Популярні теми:</h4>
            <div className="discussions__details-content">
              <p className="discussions__details-tag">Монети України</p>
              <p className="discussions__details-tag">Меблі</p>
              <p className="discussions__details-tag">Живопис</p>
              <p className="discussions__details-tag">Нумізматика</p>
              <p className="discussions__details-tag">Книги</p>
              <p className="discussions__details-tag">Марки</p>
              <p className="discussions__details-tag">Філотелія</p>
              <p className="discussions__details-tag">Сфрагістика</p>
              <p className="discussions__details-tag">Інші монети</p>
            </div>
          </div>
        )}
        <div className="discussions__content">
          {discussions.map((discussion) => (
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
    </>
  );
};
