import SimpleBar from 'simplebar-react';
import { ArrowTale } from '../../../components/Imgs/ArrowTale';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { OutletContextType } from '../../../types/openMenuOtlet';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Chat } from './Chat/Chat';
import { ActiveChat } from './ActiveChat/ActiveChat';
import { ChatT } from '../../../types/chatTypes';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { SavingState } from '../../../store/store';

const testMessages: ChatT[] = [
  {
    id: '1',
    name: 'Системні сповіщення',
    sender: 'Платформа DIKO',
    canAnswer: false,
    messages: [
      {
        id: '1',
        sender: 'webSite',
        messageTitle: 'Вітаємо на Diko!',
        messageText:
          'Ви успішно зареєструвалися! Заповніть профіль та пройдіть верифікацію, щоб отримати повний доступ до платформи.',
        date: new Date('2025-03-22T08:09:00'),
        status: 'read',
      },
      {
        id: '2',
        sender: 'webSite',
        messageTitle: 'Нові надходження у розділі "Монети України"! ',
        messageText:
          'Нові надходження у розділі "Монети України"! Щойно додано рідкісні монети та унікальні лоти. Перегляньте, перш ніж їх розкуплять!',
        date: new Date('2025-03-22T08:09:53'),
        status: 'read',
      },
      {
        id: '3',
        sender: 'webSite',
        messageTitle: 'Нові надходження у розділі "Монети України"! ',
        messageText:
          'Нові надходження у розділі "Монети України"! Щойно додано рідкісні монети та унікальні лоти. Перегляньте, перш ніж їх розкуплять!',
        date: new Date('2025-03-22T08:09:53'),
        status: 'read',
      },
      {
        id: '4',
        sender: 'webSite',
        messageTitle: 'Нові надходження у розділі "Монети України"! ',
        messageText:
          'Нові надходження у розділі "Монети України"! Щойно додано рідкісні монети та унікальні лоти. Перегляньте, перш ніж їх розкуплять!',
        date: new Date('2025-03-22T08:09:53'),
        status: 'read',
      },
    ],
  },
  {
    id: '2',
    name: 'Чат підтримки',
    sender: 'Платформа DIKO',
    canAnswer: true,
    messages: [
      {
        id: '1',
        sender: 'webSite',
        messageTitle: 'Вітаємо',
        messageText: 'yaka u vas problema',
        date: new Date('2025-03-22T08:09:23'),
        status: 'read',
      },
      {
        id: '2',
        sender: 'client',
        messageText: 'Vitayu yak kupiti monetu',
        date: new Date('2025-03-22T08:21:00'),
        status: 'read',
      },
    ],
  },
  {
    id: '3',
    name: 'Замовлення',
    sender: 'Маркет',
    canAnswer: true,
    messages: [
      {
        id: '1',
        sender: 'webSite',
        messageTitle: 'Вітаємо',
        messageText: 'yaka u vas problema',
        date: new Date('2025-03-22T08:09:23'),
        status: 'read',
      },
      {
        id: '2',
        sender: 'client',
        messageText: 'Vitayu yak kupiti monetu',
        date: new Date('2025-03-22T08:21:00'),
        status: 'read',
      },
    ],
  },
  {
    id: '4',
    name: 'Оцінювання та сертифікація',
    sender: 'Експертиза',
    canAnswer: true,
    messages: [
      {
        id: '1',
        sender: 'webSite',
        messageTitle: 'Вітаємо',
        messageText: 'yaka u vas problema',
        date: new Date('2025-03-22T08:09:23'),
        status: 'read',
      },
      {
        id: '2',
        sender: 'client',
        messageText: 'Vitayu yak kupiti monetu',
        date: new Date('2025-03-22T08:21:00'),
        status: 'read',
      },
    ],
  },
  {
    id: '5',
    name: 'Пропозиції щодо виставок',
    sender: 'Виставки',
    canAnswer: true,
    messages: [
      {
        id: '1',
        sender: 'webSite',
        messageTitle: 'Вітаємо',
        messageText: 'yaka u vas problema',
        date: new Date('2025-03-22T08:09:23'),
        status: 'read',
      },
      {
        id: '2',
        sender: 'client',
        messageText: 'Vitayu yak kupiti monetu',
        date: new Date('2025-03-22T08:21:00'),
        status: 'read',
      },
    ],
  },
];

export const Messages = () => {
  const [setOpenMenu] = useOutletContext<OutletContextType>();
  const [activeMessges, setActiveMessages] = useState<boolean>(false);
  const [searchParams] = useSearchParams();
  const [activeChat, setActiveChat] = useState<ChatT>(testMessages[0]);
  const chatName = searchParams.get('chat');

  const { t } = useTranslation();
  const lang = useSelector((state: SavingState) => state.language.language);

  function formatDate(date: Date) {
    const months = [
      'січня',
      'лютого',
      'березня',
      'квітня',
      'травня',
      'червня',
      'липня',
      'серпня',
      'вересня',
      'жовтня',
      'листопада',
      'грудня',
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${day} ${month} ${hours}:${minutes}`;
  }

  useEffect(() => {
    setActiveChat(
      testMessages.find((a) => a.name === chatName) || testMessages[0],
    );
  }, [chatName]);

  return (
    <>
      {lang === 'en' && (
        <div className="profile-page__section">
          <div className="profile-page__section-title">
            <ArrowTale
              onClick={() => {
                setOpenMenu(false);
                setActiveMessages(false);
              }}
              className="profile-page__section-arrow"
            />

            <h2 className="profile-page__section-h2">{t('no-translation')}</h2>
          </div>
        </div>
      )}
      {lang === 'ua' && (
        <div className="profile-page__section">
          <div className="profile-page__section-title onDescktop">
            <ArrowTale
              onClick={() => {
                setOpenMenu(false);
                setActiveMessages(false);
              }}
              className="profile-page__section-arrow"
            />

            <h2 className="profile-page__section-h2">Листування</h2>
          </div>

          <div className="profile-messages__main">
            <div
              className={classNames('profile-messages__wrapper', {
                isNotActive: activeMessges,
              })}
            >
              <div className="profile-page__section-title ontablet-mob">
                <ArrowTale
                  onClick={() => {
                    setOpenMenu(false);
                    setActiveMessages(false);
                  }}
                  className="profile-page__section-arrow"
                />
                <h2 className="profile-page__section-h2">Листування</h2>
              </div>
              <SimpleBar className="profile-messages__sources-container profile-messages__simple-bar">
                <div className="profile-messages__sources">
                  {testMessages.map((chat) => (
                    <Chat
                      key={chat.id}
                      chatName={chatName}
                      formatDate={formatDate}
                      chat={chat}
                      setActiveMessages={setActiveMessages}
                    />
                  ))}
                </div>
              </SimpleBar>
            </div>

            <ActiveChat
              setActiveChat={setActiveChat}
              setActiveMessages={setActiveMessages}
              activeMessges={activeMessges}
              formatDate={formatDate}
              activeChat={activeChat}
              PHOTO_AMOUNT={5}
            />
          </div>
        </div>
      )}
    </>
  );
};
