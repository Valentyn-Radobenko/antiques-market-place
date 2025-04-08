import SimpleBar from 'simplebar-react';
import { ArrowTale } from '../../../components/Imgs/ArrowTale';
import { useOutletContext } from 'react-router-dom';
import { OutletContextType } from '../../../types/openMenuOtlet';
import { EclipseGoldGreenSVG } from '../../../components/Imgs/EclipseGoldGreenSVG';
import { PlusIMG } from '../../../components/Imgs/PlusIMG';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { SendButtonSVG } from '../../../components/Imgs/SendButtonSVG';
import { SendMessageReadedSVG } from '../../../components/Imgs/SendMessageReadedSVG';

export const Messages = () => {
  const [setOpenMenu] = useOutletContext<OutletContextType>();
  const ref = useRef<HTMLTextAreaElement>(null);
  const [query, setQuery] = useState<string>('');
  const [activeMessges, setActiveMessages] = useState<boolean>(false);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.height = 'auto';
      ref.current.style.height = `${ref.current.scrollHeight}px`;
    }
  }, [query]);

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
            <div
              onClick={() => setActiveMessages(true)}
              className="message-source"
            >
              <div className="message-source__top-bar">
                <div className="message-source__title">
                  <EclipseGoldGreenSVG />
                  <p className="message-source__title-text">Платформа DIKO</p>
                </div>
                <ArrowTale className="message-source__arrow-tale" />
              </div>
              <div className="message-source__chat-info">
                <h4 className="message-source__chat-title">
                  Системні сповіщення
                </h4>
                <div className="message-source__date-status">
                  <p className="message-source__date">date</p>
                  <SendMessageReadedSVG className="message-source__status" />
                </div>
              </div>
            </div>
          </div>
        </SimpleBar>

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
            <p className="current-chat__title">Платформа DIKO</p>
          </div>
          <SimpleBar className="current-chat__container profile-messages__simple-bar">
            <div className="current-chat__messages">
              <div className="current-chat__message">
                <p className="current-chat__message-title">Вітаємо на Diko!</p>
                <p className="current-chat__message-text">
                  Ви успішно зареєструвалися! Заповніть профіль та пройдіть
                  верифікацію, щоб отримати повний доступ до платформи.
                </p>
                <div className="current-chat__message-date-status">
                  <p className="current-chat__message-date">date</p>
                  <SendMessageReadedSVG className="current-chat__message-status" />
                </div>
              </div>
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
      </div>
    </div>
  );
};
