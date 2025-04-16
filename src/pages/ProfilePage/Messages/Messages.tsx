import SimpleBar from 'simplebar-react';
import { ArrowTale } from '../../../components/Imgs/ArrowTale';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { OutletContextType } from '../../../types/openMenuOtlet';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Chat } from './Chat/Chat';
import { ActiveChat } from './ActiveChat/ActiveChat';

const testMessages = [
  {
    id: 1,
    name: 'Системні сповіщення',
    sender: 'Платформа DIKO',
    canAnswer: false,
    messages: [
      {
        id: 1,
        sender: 'webSite',
        messageTitle: 'Вітаємо на Diko!',
        messageText:
          'Ви успішно зареєструвалися! Заповніть профіль та пройдіть верифікацію, щоб отримати повний доступ до платформи.',
        date: new Date('2025-03-22T08:09:00'),
        status: 'read',
      },
      {
        id: 2,
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
    id: 2,
    name: 'Чат підтримки',
    sender: 'Платформа DIKO',
    canAnswer: true,
    messages: [
      {
        id: 1,
        sender: 'webSite',
        messageTitle: 'Вітаємо',
        messageText: 'yaka u vas problema',
        date: new Date('2025-03-22T08:09:23'),
        status: 'read',
      },
      {
        id: 2,
        sender: 'client',
        messageText: 'Vitayu yak kupiti monetu',
        date: new Date('2025-03-22T08:21:00'),
        status: 'read',
      },
    ],
  },
];

type CurrentChatT = {
  id: number;
  sender: string;
  messageTitle?: string;
  messageText: string;
  date: Date;
  status: string;
};

type ChatT = {
  id: number;
  name: string;
  sender: string;
  canAnswer: boolean;
  messages: CurrentChatT[];
};

export const Messages = () => {
  const [setOpenMenu] = useOutletContext<OutletContextType>();
  const [activeMessges, setActiveMessages] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeChat, setActiveChat] = useState<ChatT>();
  const chatName = searchParams.get('chat');

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
    setSearchParams({ chat: 'Чат підтримки' });
  }, []);

  useEffect(() => {
    setActiveChat(testMessages.find((a) => a.name === chatName));
  }, [chatName]);

  return (
    <div className="profile-messages">
      <div className="profile-page__section-title">
        <ArrowTale
          onClick={() => setOpenMenu(false)}
          className="profile-page__section-arrow"
        />
        <h2 className="profile-page__section-h2">Листування</h2>
      </div>

      <div className="profile-messages__main">
        <SimpleBar
          className={classNames(
            'profile-messages__sources-container profile-messages__simple-bar',
            {
              isNotActive: activeMessges,
            },
          )}
        >
          <div className="profile-messages__sources">
            {testMessages.map((chat) => (
              <Chat
                key={chat.id}
                formatDate={formatDate}
                chat={chat}
                setActiveMessages={setActiveMessages}
              />
            ))}
          </div>
        </SimpleBar>

        <ActiveChat
          testMessages={testMessages}
          setActiveMessages={setActiveMessages}
          activeMessges={activeMessges}
          chatName={chatName}
          formatDate={formatDate}
          activeChat={activeChat}
        />

        {/* <div
          className={classNames('profile-messages__current-chat current-chat', {
            isActive: activeMessges,
          })}
        >
          <div className="current-chat__top-bar">
            <ArrowTale
              className="current-chat__arrow"
              onClick={() => setActiveMessages(false)}
            />
            <EclipseGoldGreenSVG />
            <p className="current-chat__title">{activeChat?.sender}</p>
          </div>
          <SimpleBar className="current-chat__container profile-messages__simple-bar">
            <div className="current-chat__messages">
              {testMessages.find(chat => chat.name === chatName)?.messages.map(currentChat => (
                <div className="current-chat__message">
                  <p className="current-chat__message-title">{currentChat.messageTitle}</p>
                  <p className="current-chat__message-text">
                    {currentChat.messageText}
                  </p>
                  <div className="current-chat__message-date-status">
                    <p className="current-chat__message-date">{formatDate(currentChat.date)}</p>
                    <SendMessageReadedSVG className="current-chat__message-status" />
                  </div>
                </div>
              ))}
            </div>
          </SimpleBar>
          <div className="current-chat__form">
            <div className="current-chat__input-wrapper">
              <textarea
                ref={ref}
                value={query}
                className="current-chat__input"
                placeholder="Написати повідомлення"
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                rows={1}
              />
              <label
                className="current-chat__label"
                htmlFor="chatInput"
              >
                <PlusIMG className="current-chat__add-items" />
              </label>
              <input
                accept=".jpg, .jpeg, .png, .pdf, image/jpeg, image/png, application/pdf"
                multiple
                id="chatInput"
                type="file"
                hidden
              />
            </div>
            <button className="current-chat__send-button">
              <SendButtonSVG />
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};
