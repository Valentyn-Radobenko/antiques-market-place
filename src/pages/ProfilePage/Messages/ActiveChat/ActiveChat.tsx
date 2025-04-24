import SimpleBar from 'simplebar-react';
import { ArrowTale } from '../../../../components/Imgs/ArrowTale';
import { EclipseGoldGreenSVG } from '../../../../components/Imgs/EclipseGoldGreenSVG';
import classNames from 'classnames';
import { PlusIMG } from '../../../../components/Imgs/PlusIMG';
import { SendButtonSVG } from '../../../../components/Imgs/SendButtonSVG';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { SendMessageReadedSVG } from '../../../../components/Imgs/SendMessageReadedSVG';
import { EclipseGoldWhite } from '../../../../components/Imgs/EclipseGoldWhite';
import { EclipseGeenGold } from '../../../../components/Imgs/EclipseGeenGold';
import { EclipseMintGreen } from '../../../../components/Imgs/EclipseMintGreen';
import { EclipseGreenWhite } from '../../../../components/Imgs/EclipseGreenWhite';

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

type Props = {
  setActiveMessages: Dispatch<SetStateAction<boolean>>;
  activeMessges: boolean;
  formatDate: (date: Date) => string;
  activeChat: ChatT | undefined;
};

export const ActiveChat: React.FC<Props> = ({
  setActiveMessages,
  activeMessges,
  formatDate,
  activeChat,
}) => {
  const [query, setQuery] = useState<string>('');
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.height = 'auto';
      ref.current.style.height = `${ref.current.scrollHeight}px`;
    }
  }, [query]);

  if (activeChat) {
    return (
      <div
        className={classNames('profile-messages__current-chat current-chat', {
          isActive: activeMessges,
        })}
      >
        <div className="current-chat__top-bar">
          <ArrowTale
            className="current-chat__arrow"
            onClick={() => setActiveMessages(false)}
          />
          {activeChat?.name === 'Системні сповіщення' && <EclipseGoldWhite />}
          {activeChat?.name === 'Чат підтримки' && <EclipseGeenGold />}
          {activeChat?.name === 'Замовлення' && <EclipseGoldGreenSVG />}
          {activeChat?.name === 'Оцінювання та сертифікація' && (
            <EclipseMintGreen />
          )}
          {activeChat?.name === 'Пропозиції щодо виставок' && (
            <EclipseGreenWhite />
          )}
          <p className="current-chat__title">{activeChat?.sender}</p>
        </div>
        <div className="current-chat__underline" />
        <SimpleBar className="current-chat__container profile-messages__simple-bar">
          <div className="current-chat__messages">
            {activeChat?.name === 'Чат підтримки' && (
              <div className="current-chat__support-message">
                <p className="current-chat__support-message-title">Вітаю!</p>
                <p className="current-chat__support-message-text">
                  Я Микита, ваш помічник підтримки DIKO ©. Готовий допомогти
                  вам із будь-якими питаннями. Давайте розпочнемо наш діалог.
                  Чим можу бути корисним?
                </p>
              </div>
            )}
            {activeChat.messages.map((currentChat) => (
              <div
                key={currentChat.id}
                className={classNames('current-chat__message', {
                  myMessage: currentChat.sender === 'client',
                })}
              >
                <p className="current-chat__message-title">
                  {currentChat.messageTitle}
                </p>
                <p className="current-chat__message-text">
                  {currentChat.messageText}
                </p>
                <div className="current-chat__message-date-status">
                  <p className="current-chat__message-date">
                    {formatDate(currentChat.date)}
                  </p>
                  <SendMessageReadedSVG className="current-chat__message-status" />
                </div>
              </div>
            ))}
          </div>
        </SimpleBar>
        <div className="current-chat__underline" />
        <div
          className={classNames('current-chat__form', {
            disabled: !activeChat.canAnswer,
          })}
        >
          <div className="current-chat__input-wrapper">
            <textarea
              disabled={!activeChat.canAnswer}
              ref={ref}
              value={query}
              className="current-chat__input"
              placeholder={
                (!activeChat.canAnswer &&
                  'Цей чат лише для перегляду. Відповіді не передбачено.') ||
                'Написати повідомлення'
              }
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              rows={(!activeChat.canAnswer && 2) || 1}
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
              disabled={!activeChat.canAnswer}
            />
          </div>
          <button className="current-chat__send-button">
            <SendButtonSVG />
          </button>
        </div>
      </div>
    );
  }
};
