import SimpleBar from 'simplebar-react';
import { Close } from '../Imgs/Close';
import { useState, useEffect, useRef, Dispatch, SetStateAction } from 'react';
import classNames from 'classnames';
import { FrameInspectSVG } from '../Imgs/FrameInspectSVG';
import { Arrow } from '../Imgs/Arrow';
import { ThreeDotsSVG } from '../Imgs/ThreeDotsSVG';
import { Bin } from '../Imgs/Bin';
import { EditSVG } from '../Imgs/EditSVG';
import { Comment, DiscussionData } from '../../types/discussionTypes';
import { formatUkrDate } from '../../utils/formatUkrDate';
import { useNavigate } from 'react-router-dom';

type Props = {
  currentDiscussion: DiscussionData;
  setOpenDiscussion: Dispatch<SetStateAction<boolean>>;
  setCurrentDiscussion: Dispatch<SetStateAction<DiscussionData>>;
  mode?: 'account' | 'club';
};

export const CurrentDiscussion: React.FC<Props> = ({
  setOpenDiscussion,
  currentDiscussion,
  setCurrentDiscussion,
  mode = 'account',
}) => {
  const currentUser = {
    id: '100',
    name: 'теперішній юзер',
  };

  const [addComment, setAddComment] = useState<string>('');
  const [answerToComment, setAnswerToComment] = useState<string | null>(null);
  const [activeAnswer, setActiveAnswer] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [commentOptions, setCommentOptions] = useState<string>('');
  const [changeComment, setChangeComment] = useState<string>('');
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const imagesLength = currentDiscussion.images.length;

  const handleScrollToComment = (commentId: string) => {
    const target = document.getElementById(`comment-${commentId}`);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const startTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setCommentOptions('');

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
    if (commentOptions) {
      startTimer();
    } else {
      resetTimer();
    }
  }, [commentOptions]);

  const handleChangeComment = (commentId: string) => {
    const comments = currentDiscussion.comments;
    const newComments = comments.map((a) =>
      a.id === commentId ? { ...a, text: addComment } : a,
    );

    setCurrentDiscussion({ ...currentDiscussion, comments: newComments });
    setChangeComment('');
    setAddComment('');
  };

  const handleAddComment = () => {
    if (!addComment) {
      return;
    }
    const comments = currentDiscussion.comments;
    const newCommentId = Math.round(Math.random() * 100000).toString();
    const newComments: Comment[] = [
      ...comments,
      {
        id: newCommentId,
        userId: currentUser.id,
        userName: currentUser.name,
        text: addComment,
        date: new Date(),
        isAnswer: answerToComment,
      },
    ];
    setCurrentDiscussion({
      ...currentDiscussion,
      comments: newComments,
    });

    setAddComment('');
    setActiveAnswer(false);
    setTimeout(() => setAnswerToComment(null), 300);
    setTimeout(() => {
      handleScrollToComment(newCommentId);
    }, 0);
  };

  const deleteComment = (commentId: string) => {
    const comments = currentDiscussion.comments;
    const newComments = comments.filter((a) => a.id !== commentId);

    setCurrentDiscussion({ ...currentDiscussion, comments: newComments });
  };

  return (
    <div className="current-discussion">
      {currentDiscussion.images.length > 0 && (
        <div className="current-discussion__images descktop">
          <div className="current-discussion__images-list">
            {currentDiscussion.images.map((image) => (
              <img
                style={{ transform: `translate(-${currentImage * 100}%)` }}
                key={image}
                className="current-discussion__imagie"
                src={image}
                alt="#"
              />
            ))}
          </div>
          <FrameInspectSVG className="current-discussion__zoom" />
          <div className="current-discussion__images-pagination">
            <Arrow
              onClick={() => {
                if (currentImage > 0) {
                  setCurrentImage(currentImage - 1);
                }
              }}
              className={classNames('current-discussion__arrow left', {
                isActive: currentImage > 0,
              })}
            />
            <div className="current-discussion__length">
              {currentDiscussion.images.map((_, i) => (
                <div
                  key={i}
                  className={classNames('current-discussion__dot', {
                    isActive: i === currentImage,
                  })}
                />
              ))}
            </div>
            <Arrow
              onClick={() => {
                if (currentImage < imagesLength - 1) {
                  setCurrentImage(currentImage + 1);
                }
              }}
              className={classNames('current-discussion__arrow reight', {
                isActive: currentImage < imagesLength - 1,
              })}
            />
          </div>
        </div>
      )}
      <SimpleBar className="current-discussion__simplebar-block">
        <div className="current-discussion__text-block">
          <div className="current-discussion__main-info">
            <div className="current-discussion__top-bar">
              <h2 className="current-discussion__title">
                {currentDiscussion.name}
              </h2>
              <Close
                className="current-discussion__close"
                onClick={() => {
                  setOpenDiscussion(false);
                  if (mode === 'account') {
                    navigate('/me/discussions');
                  }

                  if (mode === 'club') {
                    navigate('/club/discussions');
                  }
                }}
              />
            </div>
            {currentDiscussion.images.length > 0 && (
              <div className="current-discussion__images tablet-phone">
                <div className="current-discussion__images-list">
                  {currentDiscussion.images.map((image) => (
                    <img
                      style={{
                        transform: `translate(-${currentImage * 100}%)`,
                      }}
                      key={image}
                      className="current-discussion__imagie"
                      src={image}
                      alt="#"
                    />
                  ))}
                </div>
                <FrameInspectSVG className="current-discussion__zoom" />
                <div className="current-discussion__images-pagination">
                  <Arrow
                    onClick={() => {
                      if (currentImage > 0) {
                        setCurrentImage(currentImage - 1);
                      }
                    }}
                    className={classNames('current-discussion__arrow left', {
                      isActive: currentImage > 0,
                    })}
                  />
                  <div className="current-discussion__length">
                    {currentDiscussion.images.map((_, i) => (
                      <div
                        key={i}
                        className={classNames('current-discussion__dot', {
                          isActive: i === currentImage,
                        })}
                      />
                    ))}
                  </div>
                  <Arrow
                    onClick={() => {
                      if (currentImage < imagesLength - 1) {
                        setCurrentImage(currentImage + 1);
                      }
                    }}
                    className={classNames('current-discussion__arrow reight', {
                      isActive: currentImage < imagesLength - 1,
                    })}
                  />
                </div>
              </div>
            )}
            <div className="current-discussion__discussion-info">
              <div className="current-discussion__author-theme">
                <div className="current-discussion__author">
                  <img
                    className="current-discussion__author-img"
                    src="./images/default-photo.webp"
                    alt={currentDiscussion.author}
                  />
                  <p className="current-discussion__author-name">
                    {currentDiscussion.author}
                  </p>
                </div>
                <div className="current-discussion__themes">
                  {currentDiscussion.theme.map((theme) => (
                    <p
                      className="current-discussion__theme"
                      key={theme}
                    >
                      {theme}
                    </p>
                  ))}
                </div>
              </div>
              <p className="current-discussion__description">
                {currentDiscussion.description}
              </p>
              <p className="current-discussion__date">
                {formatUkrDate(currentDiscussion.date)}
              </p>
            </div>
          </div>

          <SimpleBar className="current-discussion__simplebar">
            <div className="current-discussion__comments">
              {currentDiscussion.comments.map((comment) => {
                const repliedComment =
                  comment.isAnswer ?
                    currentDiscussion.comments.find(
                      (a) => a.id === comment.isAnswer,
                    )
                  : null;
                return (
                  <div
                    key={comment.id}
                    id={`comment-${comment.id}`}
                    className={classNames('current-discussion__comment', {
                      myComment: comment.userName === currentUser.name,
                    })}
                  >
                    <div className="current-discussion__author">
                      <img
                        className="current-discussion__author-img"
                        src="./images/default-photo.webp"
                        alt={comment.userName}
                      />
                      <p className="current-discussion__author-name">
                        {comment.userName}
                      </p>
                      {comment.userId === currentUser.id &&
                        (changeComment === comment.id ?
                          <EditSVG className="current-discussion__more-options" />
                        : <ThreeDotsSVG
                            onClick={() => setCommentOptions(comment.id)}
                            className="current-discussion__more-options"
                          />)}
                    </div>
                    {repliedComment && (
                      <div
                        onClick={() => {
                          handleScrollToComment(comment.isAnswer || '');
                        }}
                        className="current-discussion__replied-comment"
                      >
                        <div className="current-discussion__author">
                          <img
                            className="current-discussion__author-img"
                            src="./images/default-photo.webp"
                            alt={repliedComment.userName}
                          />
                          <p className="current-discussion__author-name">
                            {repliedComment.userName}
                          </p>
                        </div>
                        <p className="current-discussion__comment-text">
                          {repliedComment.text}
                        </p>
                      </div>
                    )}
                    <p className="current-discussion__comment-text">
                      {comment.text}
                    </p>
                    <div className="current-discussion__date-answer">
                      <p className="current-discussion__comment-date">
                        {formatUkrDate(comment.date)}
                      </p>
                      <button
                        onClick={() => {
                          setAnswerToComment(comment.id);
                          setActiveAnswer(true);
                          inputRef.current?.focus();
                        }}
                        className="current-discussion__answer-button"
                      >
                        Відповісти
                      </button>
                    </div>
                    <div
                      className={classNames('discussion__action-list', {
                        isActive: commentOptions === comment.id,
                      })}
                    >
                      <div
                        onClick={() => {
                          setAddComment(comment.text);
                          setChangeComment(comment.id);
                          setCommentOptions('');
                          inputRef.current?.focus();
                        }}
                        className="current-discussion__action"
                      >
                        <EditSVG className="current-discussion__action-svg" />
                        <p className="current-discussion__action-text">
                          Змінити коментар
                        </p>
                      </div>
                      <div
                        onClick={() => deleteComment(comment.id)}
                        className="current-discussion__action"
                      >
                        <Bin className="current-discussion__action-svg" />
                        <p className="current-discussion__action-text">
                          Видалити коментар
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SimpleBar>
          <div className="current-discussion__add-comment">
            <div
              className={classNames('current-discussion__hint', {
                isActive: activeAnswer,
              })}
            >
              <div className="current-discussion__author">
                <img
                  className="current-discussion__author-img"
                  src="#"
                  alt="#"
                />
                <p className="current-discussion__author-name">
                  {
                    currentDiscussion.comments.find(
                      (a) => a.id === answerToComment,
                    )?.userName
                  }
                </p>
              </div>
              <Close
                onClick={() => {
                  setActiveAnswer(false);
                  setTimeout(() => setAnswerToComment(null), 300);
                }}
                className="current-discussion__hint-close"
              />
            </div>
            <div
              className={classNames('current-discussion__hint', {
                isActive: changeComment,
              })}
            >
              <p className="current-discussion__hint-text">Редагувати текст</p>
              <Close
                onClick={() => {
                  setChangeComment('');
                  setAddComment('');
                }}
                className="current-discussion__hint-close"
              />
            </div>
            <input
              ref={inputRef}
              value={addComment}
              onChange={(e) => setAddComment(e.target.value)}
              placeholder="Додати коментар"
              className="current-discussion__input"
              type="text"
            />
            <button
              disabled={!addComment}
              onClick={() =>
                changeComment ?
                  handleChangeComment(changeComment)
                : handleAddComment()
              }
              className="current-discussion__add-comment-button"
            >
              Надіслати
            </button>
          </div>
        </div>
      </SimpleBar>
    </div>
  );
};
