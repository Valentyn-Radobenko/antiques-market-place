import { ArrowTale } from '../../../../components/Imgs/ArrowTale';
import { EclipseGeenGold } from '../../../../components/Imgs/EclipseGeenGold';
import { EclipseGoldGreenSVG } from '../../../../components/Imgs/EclipseGoldGreenSVG';
import { EclipseGoldWhite } from '../../../../components/Imgs/EclipseGoldWhite';
import { EclipseGreenWhite } from '../../../../components/Imgs/EclipseGreenWhite';
import { EclipseMintGreen } from '../../../../components/Imgs/EclipseMintGreen';
import { SendMessageReadedSVG } from '../../../../components/Imgs/SendMessageReadedSVG';
import { SearchLink } from '../../../../utils/SearchLink';
import { Dispatch, SetStateAction } from 'react';
import classNames from 'classnames';

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
  chatName: string | null;
};

export const Chat: React.FC<Props> = ({
  chat,
  setActiveMessages,
  formatDate,
  chatName,
}) => {
  return (
    <SearchLink
      params={{
        chat: chat.name,
      }}
      onClick={() => setActiveMessages(true)}
      className={classNames('message-source', {
        isActive: chat.name === chatName,
      })}
      key={chat.id}
    >
      <div className="message-source__top-bar">
        <div className="message-source__title">
          {chat.name === 'Системні сповіщення' && <EclipseGoldWhite />}
          {chat.name === 'Чат підтримки' && <EclipseGoldGreenSVG />}
          {chat.name === 'Замовлення' && <EclipseGeenGold />}
          {chat.name === 'Оцінювання та сертифікація' && <EclipseGreenWhite />}
          {chat.name === 'Пропозиції щодо виставок' && <EclipseMintGreen />}
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
