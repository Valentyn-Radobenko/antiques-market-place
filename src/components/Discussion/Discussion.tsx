import { useEffect, useRef, useState } from 'react';
import { ArrowTale } from '../Imgs/ArrowTale';
import { Bin } from '../Imgs/Bin';
import { DiscussionStatusSVG } from '../Imgs/DiscussionStatusSVG';
import { SecuritySVG } from '../Imgs/SecuritySVG';
import classNames from 'classnames';
import { ThreeDotsSVG } from '../Imgs/ThreeDotsSVG';
import { DiscussionData } from '../../types/discussionTypes';
import { formatUkrDate } from '../../utils/formatUkrDate';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const currentUser: User = useSelector((state: RootState) => state.user);
  const location = useLocation();

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
    <div className="discussion hidden reveal">
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
              <Link
                to={
                  !location.pathname.includes('club') ?
                    {
                      pathname: '/club/discussions',
                      search: `tags=${theme}`,
                    }
                  : { search: `tags=${theme}` }
                }
                key={theme}
                className="discussion__theme"
              >
                {theme}
              </Link>
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
          <p className="discussion__action-text">
            {t('discussion__action-text2')}
          </p>
        </div>
      </div>
    </div>
  );
};
