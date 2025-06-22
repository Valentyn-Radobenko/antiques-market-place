import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { ArrowTale } from '../Imgs/ArrowTale';
import { Bin } from '../Imgs/Bin';
import { DiscussionStatusSVG } from '../Imgs/DiscussionStatusSVG';
import { SecuritySVG } from '../Imgs/SecuritySVG';
import classNames from 'classnames';
import { ThreeDotsSVG } from '../Imgs/ThreeDotsSVG';
import { DiscussionData } from '../../types/discussionTypes';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { CurrentDiscussion } from '../CurrentDiscussion/CurrentDiscussion';

type Props = {
  discussion: DiscussionData;
  setDiscussions: Dispatch<SetStateAction<DiscussionData[]>>;
};

export const Discussion: React.FC<Props> = ({ discussion, setDiscussions }) => {
  const [currentDiscussion, setCurrentDiscussion] =
    useState<DiscussionData>(discussion);
  const [openActions, setOpenActions] = useState<boolean>(false);
  const [openDiscussion, setOpenDiscussion] = useState<boolean>(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setOpenActions(false);

      timerRef.current = null;
    }, 5000);
  };

  const resetTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    if (openActions) {
      startTimer();
    } else {
      resetTimer();
    }
  }, [openActions]);

  const handleDeleteDiscussion = (discussionId: string) => {
    setDiscussions((prev) => prev.filter((a) => a.id !== discussionId));
  };

  const handleEndDiscussion = (discussionId: string) => {
    const updatedDiscussion: DiscussionData = {
      ...discussion,
      status: 'ended',
    };
    setDiscussions((prev) =>
      prev.map((a) => (a.id === discussionId ? updatedDiscussion : a)),
    );
    setOpenActions(false);
  };

  return (
    <>
      <div className="discussion">
        <div className="discussion__top-bar">
          <div className="discussion__name-theme">
            <div className="discussion__creator">
              <img
                className="discussion__img"
                src="#"
                alt="#"
              />
              <p className="discussion__creator-name">
                {currentDiscussion.author}
              </p>
            </div>
            <div className="discussion__themes">
              {currentDiscussion.theme.map((theme) => (
                <p className="discussion__theme">{theme}</p>
              ))}
            </div>
          </div>
          <ThreeDotsSVG
            onClick={() => setOpenActions(true)}
            className="discussion__actions"
          />
        </div>
        <div className="discussion__info">
          <p className="discussion__text">{currentDiscussion.description}</p>
          <div className="discussion__date">
            <p className="discussion__day-time">day</p>
            <p className="discussion__day-time">time</p>
            {discussion.status === 'ended' && (
              <p className="discussion__status">{discussion.status}</p>
            )}
          </div>
        </div>
        <div className="discussion__bottom-bar">
          <div className="discussion__messages">
            <DiscussionStatusSVG
              value="defoult"
              className="discussion__messages-svg"
            />
            <p className="discussion__messages-amount">
              {currentDiscussion.comments.length}
            </p>
          </div>
          <ArrowTale
            onClick={() => {
              setOpenDiscussion(true);
            }}
            className="discussion__arrow"
          />
        </div>
        <div
          className={classNames('discussion__action-list', {
            isActive: openActions,
          })}
        >
          <div
            onClick={() => handleEndDiscussion(currentDiscussion.id)}
            className="discussion__action"
          >
            <SecuritySVG className="discussion__action-svg" />
            <p className="discussion__action-text">Завершити обговорення</p>
          </div>
          <div
            onClick={() => handleDeleteDiscussion(currentDiscussion.id)}
            className="discussion__action"
          >
            <Bin className="discussion__action-svg" />
            <p className="discussion__action-text">Видалити</p>
          </div>
        </div>
      </div>
      <ModalWindow
        visibility={'discussion__current-disussion'}
        openModal={openDiscussion}
        setOpenModal={setOpenDiscussion}
      >
        <CurrentDiscussion
          setCurrentDiscussion={setCurrentDiscussion}
          setOpenDiscussion={setOpenDiscussion}
          currentDiscussion={currentDiscussion}
        />
      </ModalWindow>
    </>
  );
};
