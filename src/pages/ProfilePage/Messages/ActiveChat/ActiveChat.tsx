import SimpleBar from 'simplebar-react';
import { ArrowTale } from '../../../../components/Imgs/ArrowTale';
import { EclipseGoldGreenSVG } from '../../../../components/Imgs/EclipseGoldGreenSVG';
import classNames from 'classnames';
import { PlusIMG } from '../../../../components/Imgs/PlusIMG';
import { SendButtonSVG } from '../../../../components/Imgs/SendButtonSVG';
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import { SendMessageReadedSVG } from '../../../../components/Imgs/SendMessageReadedSVG';
import { EclipseGoldWhite } from '../../../../components/Imgs/EclipseGoldWhite';
import { EclipseGeenGold } from '../../../../components/Imgs/EclipseGeenGold';
import { EclipseMintGreen } from '../../../../components/Imgs/EclipseMintGreen';
import { EclipseGreenWhite } from '../../../../components/Imgs/EclipseGreenWhite';
import { ChatT } from '../../../../types/chatTypes';
import { v4 as uuidv4 } from 'uuid';
import { PhotosList } from '../../../../components/PhotosList/PhotosList';
import { FrameInspectSVG } from '../../../../components/Imgs/FrameInspectSVG';

type Props = {
  setActiveMessages: Dispatch<SetStateAction<boolean>>;
  activeMessges: boolean;
  formatDate: (date: Date) => string;
  activeChat: ChatT;
  setActiveChat: Dispatch<SetStateAction<ChatT>>;
  PHOTO_AMOUNT: number;
};

export const ActiveChat: React.FC<Props> = ({
  setActiveMessages,
  activeMessges,
  formatDate,
  activeChat,
  PHOTO_AMOUNT,
  setActiveChat,
}) => {
  const [query, setQuery] = useState<string>('');
  const [files, setFiles] = useState<File[]>([]);
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.height = 'auto';
      ref.current.style.height = `${ref.current.scrollHeight}px`;
    }
  }, [query]);

  const addFiles = (event: ChangeEvent<HTMLInputElement>) => {
    const newFiles = event.target.files ? Array.from(event.target.files) : [];
    setFiles((prevFiles) => [...prevFiles, ...newFiles].slice(0, PHOTO_AMOUNT));
    event.target.value = '';
  };

  const addMessage = () => {
    const newMessages = [...activeChat.messages];

    newMessages.push({
      id: uuidv4(),
      date: new Date(),
      sender: 'client',
      messageText: query,
      status: 'read',
      files: files,
    });
    setActiveChat({ ...activeChat, messages: newMessages });
    setQuery('');
    setFiles([]);
  };

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
            {activeChat.messages.map((currentMessage) => (
              <div
                key={currentMessage.id}
                className={classNames('current-chat__message', {
                  myMessage: currentMessage.sender === 'client',
                })}
              >
                {currentMessage.messageTitle && (
                  <p className="current-chat__message-title">
                    {currentMessage.messageTitle}
                  </p>
                )}
                {currentMessage.messageText && (
                  <p className="current-chat__message-text">
                    {currentMessage.messageText}
                  </p>
                )}
                {currentMessage.files && (
                  <div className="current-chat__message-photos">
                    {currentMessage.files.map((photo) => (
                      <div className="current-chat__message-photo-container">
                        <FrameInspectSVG className="current-chat__zoom-photo" />
                        <img
                          className="current-chat__message-photo"
                          key={photo.name}
                          src={URL.createObjectURL(photo)}
                          alt="#"
                        />
                      </div>
                    ))}
                  </div>
                )}

                <div className="current-chat__message-date-status">
                  <p className="current-chat__message-date">
                    {formatDate(currentMessage.date)}
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
          {files.length !== 0 && (
            <PhotosList
              files={files}
              setFiles={setFiles}
            />
          )}
          <div className="current-chat__input-button">
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
                onChange={addFiles}
                hidden
                disabled={!activeChat.canAnswer}
              />
            </div>
            <button
              onClick={addMessage}
              className="current-chat__send-button"
            >
              <SendButtonSVG />
            </button>
          </div>
        </div>
      </div>
    );
  }
};
