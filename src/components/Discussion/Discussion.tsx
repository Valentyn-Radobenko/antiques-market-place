import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { ArrowTale } from '../Imgs/ArrowTale';
import { Bin } from '../Imgs/Bin';
import { DiscussionStatusSVG } from '../Imgs/DiscussionStatusSVG';
import { SecuritySVG } from '../Imgs/SecuritySVG';
import classNames from 'classnames';
import { ThreeDotsSVG } from '../Imgs/ThreeDotsSVG';
import { DiscussionData } from '../../types/discussionTypes';
import { formatUkrDate } from '../../utils/formatUkrDate';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

type Props = {
  discussion: DiscussionData;
  setDiscussions: Dispatch<SetStateAction<DiscussionData[]>>;
};

export const Discussion: React.FC<Props> = ({ discussion, setDiscussions }) => {
  const [openActions, setOpenActions] = useState<boolean>(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { t } = useTranslation();

  const startTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
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
    if (openActions) startTimer();
    else resetTimer();
  }, [openActions]);

  const handleDeleteDiscussion = (discussionId: string) => {
    setDiscussions((prev) => prev.filter((a) => a.id !== discussionId));
  };

  const handleEndDiscussion = (discussionId: string) => {
    setDiscussions((prev) =>
      prev.map((a) => (a.id === discussionId ? { ...a, status: 'ended' } : a)),
    );
    setOpenActions(false);
  };

  return (
    <div className="discussion hidden reveal">
      <div className="discussion__top-bar">
        <div className="discussion__name-theme">
          <div className="discussion__creator">
            <img
              className="discussion__img"
              src={discussion.author.image}
              alt={discussion.author.name}
            />
            <p className="discussion__creator-name">{discussion.author.name}</p>
          </div>

          <div className="discussion__themes">
            {discussion.theme.map((theme) => (
              <p
                key={theme}
                className="discussion__theme"
              >
                {theme}
              </p>
            ))}
          </div>
        </div>

        <ThreeDotsSVG
          onClick={() => setOpenActions((prev) => !prev)}
          className="discussion__actions"
        />
      </div>

      <Link
        to={discussion.slug}
        className="discussion__info"
      >
        <p className="discussion__text">{discussion.name}</p>
        <div className="discussion__date">
          <p className="discussion__day-time">
            {formatUkrDate(discussion.date)}
          </p>
          {discussion.status === 'ended' && (
            <p className="discussion__status">{discussion.status}</p>
          )}
        </div>
      </Link>

      <Link
        to={discussion.slug}
        className="discussion__bottom-bar"
      >
        <div className="discussion__messages">
          <DiscussionStatusSVG
            value="default"
            className="discussion__messages-svg"
          />
          <p className="discussion__messages-amount">
            {discussion.comments.length}
          </p>
        </div>
        <ArrowTale className="discussion__arrow" />
      </Link>

      <div
        className={classNames('discussion__action-list', {
          isActive: openActions,
        })}
      >
        <div
          onClick={() => handleEndDiscussion(discussion.id)}
          className="discussion__action"
        >
          <SecuritySVG className="discussion__action-svg" />
          <p className="discussion__action-text">
            {t('discussion__action-text')}
          </p>
        </div>
        <div
          onClick={() => handleDeleteDiscussion(discussion.id)}
          className="discussion__action"
        >
          <Bin className="discussion__action-svg" />
          <p className="discussion__action-text">
            {t('discussion__action-text2')}
          </p>
        </div>
      </div>
    </div>
  );
};
