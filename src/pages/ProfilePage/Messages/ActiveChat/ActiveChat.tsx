import SimpleBar from 'simplebar-react';
import { ArrowTale } from '../../../../components/Imgs/ArrowTale';
import { EclipseGoldGreenSVG } from '../../../../components/Imgs/EclipseGoldGreenSVG';
import classNames from 'classnames';
import { PlusIMG } from '../../../../components/Imgs/PlusIMG';
import { SendButtonSVG } from '../../../../components/Imgs/SendButtonSVG';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { SendMessageReadedSVG } from '../../../../components/Imgs/SendMessageReadedSVG';

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
  testMessages: ChatT[];
  setActiveMessages: Dispatch<SetStateAction<boolean>>;
  activeMessges: boolean;
  chatName: string | null;
  formatDate: (date: Date) => string;
  activeChat: ChatT | undefined;
};

export const ActiveChat: React.FC<Props> = ({
  testMessages,
  setActiveMessages,
  activeMessges,
  chatName,
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
        <EclipseGoldGreenSVG />
        <p className="current-chat__title">{activeChat?.sender}</p>
      </div>
      <SimpleBar className="current-chat__container profile-messages__simple-bar">
        <div className="current-chat__messages">
          {testMessages
            .find((chat) => chat.name === chatName)
            ?.messages.map((currentChat) => (
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
    </div>
  );
};
