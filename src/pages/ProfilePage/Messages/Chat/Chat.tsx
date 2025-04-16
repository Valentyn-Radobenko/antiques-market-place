import { ArrowTale } from '../../../../components/Imgs/ArrowTale';
import { EclipseGoldGreenSVG } from '../../../../components/Imgs/EclipseGoldGreenSVG';
import { SendMessageReadedSVG } from '../../../../components/Imgs/SendMessageReadedSVG';
import { SearchLink } from '../../../../utils/SearchLink';
import { Dispatch, SetStateAction } from 'react';

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
  chat: ChatT;
  setActiveMessages: Dispatch<SetStateAction<boolean>>;
  formatDate: (date: Date) => string;
};

export const Chat: React.FC<Props> = ({
  chat,
  setActiveMessages,
  formatDate,
}) => {
  return (
    <SearchLink
      params={{
        chat: chat.name,
      }}
      onClick={() => setActiveMessages(true)}
      className="message-source"
      key={chat.id}
    >
      <div className="message-source__top-bar">
        <div className="message-source__title">
          <EclipseGoldGreenSVG />
          <p className="message-source__title-text">{chat.sender}</p>
        </div>
        <ArrowTale className="message-source__arrow-tale" />
      </div>
      <div className="message-source__chat-info">
        <h4 className="message-source__chat-title">{chat.name}</h4>
        <div className="message-source__date-status">
          <p className="message-source__date">
            {formatDate(chat.messages[chat.messages.length - 1].date)}
          </p>
          <SendMessageReadedSVG className="message-source__status" />
        </div>
      </div>
    </SearchLink>
  );
};
