import { useEffect, useState } from 'react';
import { ArrowTale } from '../Imgs/ArrowTale';
import { Bin } from '../Imgs/Bin';
import { DiscussionStatusSVG } from '../Imgs/DiscussionStatusSVG';
import { SecuritySVG } from '../Imgs/SecuritySVG';
import classNames from 'classnames';

export const Discussion = () => {
  const [openActions, setOpenActions] = useState(false);

  useEffect(() => {
    if (openActions) {
      setTimeout(() => setOpenActions(false), 10000);
    }
  }, [openActions]);
  return (
    <div className="discussion">
      <div className="discussion__top-bar">
        <div className="discussion__name-theme">
          <div className="discussion__creator">
            <img
              className="discussion__img"
              src="#"
              alt="#"
            />
            <p className="discussion__creator-name">creator name</p>
          </div>
          <p className="discussion__theme">theme</p>
        </div>
        <p
          onClick={() => setOpenActions(true)}
          className="discussion__actions"
        >
          ...
        </p>
      </div>
      <div className="discussion__info">
        <p className="discussion__text">main text of discussion</p>
        <div className="discussion__date">
          <p className="discussion__day-time">day</p>
          <p className="discussion__day-time">time</p>
          <p className="discussion__status">status</p>
        </div>
      </div>
      <div className="discussion__bottom-bar">
        <div className="discussion__messages">
          <DiscussionStatusSVG
            value="defoult"
            className="discussion__messages-svg"
          />
          <p className="discussion__messages-amount">2</p>
        </div>
        <ArrowTale className="discussion__arrow" />
      </div>
      <div
        className={classNames('discussion__action-list', {
          isActive: openActions,
        })}
      >
        <div className="discussion__action">
          <SecuritySVG className="discussion__action-svg" />
          <p className="discussion__action-text">Завершити обговорення</p>
        </div>
        <div className="discussion__action">
          <Bin className="discussion__action-svg" />
          <p className="discussion__action-text">Видалити</p>
        </div>
      </div>
    </div>
  );
};
