import { useEffect, useRef, useState } from 'react';
import { ArrowTale } from '../Imgs/ArrowTale';
import { Bin } from '../Imgs/Bin';
import { DiscussionStatusSVG } from '../Imgs/DiscussionStatusSVG';
import { SecuritySVG } from '../Imgs/SecuritySVG';
import classNames from 'classnames';
import { ThreeDotsSVG } from '../Imgs/ThreeDotsSVG';
import { DiscussionData } from '../../types/discussionTypes';
import { formatUkrDate } from '../../utils/formatUkrDate';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import {
  deleteDiscussion,
  endDiscussion,
} from '../../store/slices/discussionsSlice';
import { User } from '../../types/user';
import { useSelector } from 'react-redux';

type Props = {
  discussion: DiscussionData;
};

export const Discussion: React.FC<Props> = ({ discussion }) => {
  const MAXSYMBOLSDISCNAME = 100;
  const [openActions, setOpenActions] = useState<boolean>(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const currentUser: User = useSelector((state: RootState) => state.user);

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

  return (
    <div className="discussion">
      <div className="discussion__top-bar">
        <div className="discussion__name-theme">
          <div className="discussion__creator">
            <img
              className={classNames('discussion__img', {
                isUsers: currentUser.id === discussion.author.id,
              })}
              src={
                discussion.anonimus ?
                  './images/default-photo.webp'
                : discussion.author.image
              }
              alt={discussion.author.name}
            />
            <p className="discussion__creator-name">
              {discussion.anonimus ? 'анонімний юзер' : discussion.author.name}
            </p>
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

        {currentUser.id === discussion.author.id && (
          <ThreeDotsSVG
            onClick={() => setOpenActions((prev) => !prev)}
            className="discussion__actions"
          />
        )}
      </div>

      <div className="discussion__info">
        <p className="discussion__text">
          {discussion.name.length < MAXSYMBOLSDISCNAME ?
            discussion.name
          : discussion.name.slice(0, 97) + '...'}
        </p>
        <div className="discussion__date">
          <p className="discussion__day-time">
            {formatUkrDate(discussion.date)}
          </p>
          {discussion.status === 'ended' && (
            <p className="discussion__status">обговорення завершено</p>
          )}
        </div>
      </div>

      <div className="discussion__bottom-bar">
        <div className="discussion__messages">
          <DiscussionStatusSVG
            value="default"
            className="discussion__messages-svg"
          />
          <p className="discussion__messages-amount">
            {discussion.comments.length}
          </p>
        </div>
        <Link to={discussion.slug}>
          <ArrowTale className="discussion__arrow" />
        </Link>
      </div>
      <div
        className={classNames('discussion__action-list', {
          isActive: openActions,
        })}
      >
        {discussion.status !== 'ended' && (
          <div
            onClick={() => dispatch(endDiscussion(discussion.id))}
            className="discussion__action"
          >
            <SecuritySVG className="discussion__action-svg" />
            <p className="discussion__action-text">Завершити обговорення</p>
          </div>
        )}
        <div
          onClick={() => dispatch(deleteDiscussion(discussion.id))}
          className="discussion__action"
        >
          <Bin className="discussion__action-svg" />
          <p className="discussion__action-text">Видалити</p>
        </div>
      </div>
    </div>
  );
};
