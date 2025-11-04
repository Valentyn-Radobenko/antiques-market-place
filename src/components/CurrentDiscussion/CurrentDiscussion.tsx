import SimpleBar from 'simplebar-react';
import { Close } from '../Imgs/Close';
import { useState, useEffect, useRef, Dispatch, SetStateAction } from 'react';
import classNames from 'classnames';
import { FrameInspectSVG } from '../Imgs/FrameInspectSVG';
import { Arrow } from '../Imgs/Arrow';
import { ThreeDotsSVG } from '../Imgs/ThreeDotsSVG';
import { Bin } from '../Imgs/Bin';
import { EditSVG } from '../Imgs/EditSVG';
import { DiscussionData } from '../../types/discussionTypes';
import { formatUkrDate } from '../../utils/formatUkrDate';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState, SavingState } from '../../store/store';
import {
  addNewComment,
  editComment,
  deleteOneComment,
} from '../../store/slices/discussionsSlice';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../../types/user';
import { useSelector } from 'react-redux';
import Slider from '../Sliders/Slider';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

type Props = {
  currentDiscussion: DiscussionData;
  setOpenDiscussion: Dispatch<SetStateAction<boolean>>;
  mode?: 'account' | 'club';
};

export const CurrentDiscussion: React.FC<Props> = ({
  setOpenDiscussion,
  currentDiscussion,
  mode = 'account',
}) => {
  const currentUser: User = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const [addComment, setAddComment] = useState<string>('');
  const [answerToComment, setAnswerToComment] = useState<string | null>(null);
  const [activeAnswer, setActiveAnswer] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [commentOptions, setCommentOptions] = useState<string>('');
  const [changeComment, setChangeComment] = useState<string>('');
  const [openZoomed, setOpenZoomed] = useState<boolean>(false);
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
    dispatch(
      editComment({
        id: currentDiscussion.id,
        newComment: addComment,
        commentId,
      }),
    );
    setChangeComment('');
    setAddComment('');
  };

  const handleAddComment = () => {
    if (!addComment) {
      return;
    }
    const newCommentId = uuidv4();

    dispatch(
      addNewComment({
        id: currentDiscussion.id,
        comment: {
          id: newCommentId,
          userId: currentUser.id,
          userName: `${currentUser.firstName} ${currentUser.lastName}`,
          userImage: currentUser.picture,
          text: addComment,
          date: new Date(),
          isAnswer: answerToComment,
        },
      }),
    );

    setAddComment('');
    setActiveAnswer(false);
    setTimeout(() => setAnswerToComment(null), 300);
    setTimeout(() => {
      handleScrollToComment(newCommentId);
    }, 0);
  };

  const deleteComment = (commentId: string) => {
    dispatch(
      deleteOneComment({
        id: currentDiscussion.id,
        commentId: commentId,
      }),
    );
  };

  const lang = useSelector((state: SavingState) => state.language.language);

  return (
    <>
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
            <FrameInspectSVG
              onClick={() => {
                console.log('click');

                setOpenZoomed(true);
              }}
              className="current-discussion__zoom"
            />
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
                <h2 className="current-discussion__title">Обговорення</h2>
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
                  <FrameInspectSVG
                    onClick={() => setOpenZoomed(true)}
                    className="current-discussion__zoom"
                  />
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
                      className={classNames(
                        'current-discussion__arrow reight',
                        {
                          isActive: currentImage < imagesLength - 1,
                        },
                      )}
                    />
                  </div>
                </div>
              )}
              <div className="current-discussion__discussion-info">
                <div className="current-discussion__author-theme">
                  <div className="current-discussion__author">
                    <img
                      className={classNames('current-discussion__author-img', {
                        isUsers: currentUser.id === currentDiscussion.author.id,
                      })}
                      src={
                        currentDiscussion.anonimus ?
                          './images/default-photo.webp'
                        : currentDiscussion.author.image
                      }
                      alt={currentDiscussion.author.name}
                    />
                    <p className="current-discussion__author-name">
                      {currentDiscussion.anonimus ?
                        'анонімний юзер'
                      : currentDiscussion.author.name}
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
                <p className="current-discussion__name">
                  {currentDiscussion.name}
                </p>
                <p
                  className="current-discussion__description"
                  dangerouslySetInnerHTML={{
                    __html: currentDiscussion.description,
                  }}
                />
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
                        myComment: comment.userId === currentUser.id,
                      })}
                    >
                      <div className="current-discussion__author">
                        <img
                          className={classNames(
                            'current-discussion__author-img',
                            {
                              isUsers: currentUser.id === comment.userId,
                            },
                          )}
                          src={comment.userImage}
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
                      {comment.isAnswer && (
                        <div
                          onClick={() => {
                            handleScrollToComment(comment.isAnswer || '');
                          }}
                          className="current-discussion__replied-comment"
                        >
                          <div className="current-discussion__author">
                            {repliedComment && (
                              <img
                                className="current-discussion__author-img"
                                src={repliedComment.userImage}
                                alt={repliedComment.userName}
                              />
                            )}
                            {repliedComment && (
                              <p className="current-discussion__author-name">
                                {repliedComment.userName}
                              </p>
                            )}
                          </div>
                          <p className="current-discussion__comment-text">
                            {repliedComment?.text || 'коментар видалено'}
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
                    src={
                      currentDiscussion.comments.find(
                        (a) => a.id === answerToComment,
                      )?.userImage
                    }
                    alt={
                      currentDiscussion.comments.find(
                        (a) => a.id === answerToComment,
                      )?.userName
                    }
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
                <p className="current-discussion__hint-text">
                  Редагувати текст
                </p>
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
      <ModalWindow
        openModal={openZoomed}
        setOpenModal={setOpenZoomed}
        visibility="item-slider__modal"
        secondModal={true}
      >
        <div className="item-slider__modal-content">
          <button
            className="item-slider__modal-close"
            onClick={() => setOpenZoomed(false)}
          >
            <Close />
          </button>

          {currentDiscussion.images && (
            <Slider<string>
              sliderTitle={`title${lang}`}
              slides={currentDiscussion.images}
              slidesPerView={1}
              customClassName="item-slider--modal"
              autoplayOn={false}
              renderSlide={(slide) => {
                return (
                  <div
                    key={slide}
                    className="item-slider__slide item-slider--modal__slide"
                    onClick={() => {
                      setOpenZoomed(true);
                    }}
                  >
                    <TransformWrapper
                      doubleClick={{ mode: 'zoomIn' }}
                      pinch={{ step: 0.1 }}
                      wheel={{ step: 0.1 }}
                      initialScale={1}
                      minScale={1}
                      maxScale={4}
                      panning={{ disabled: true }}
                    >
                      {() => (
                        <TransformComponent
                          wrapperStyle={{
                            width: '100%',
                            height: '100%',
                          }}
                          contentStyle={{
                            width: '100%',
                            height: '100%',
                          }}
                        >
                          <img
                            className="item-slider__slide-img item-slider--modal__slide-img"
                            src={slide}
                            alt={slide}
                          />
                        </TransformComponent>
                      )}
                    </TransformWrapper>
                  </div>
                );
              }}
            />
          )}
        </div>
      </ModalWindow>
    </>
  );
};
