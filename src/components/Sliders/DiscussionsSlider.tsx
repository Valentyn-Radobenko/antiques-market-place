// import { useSelector } from 'react-redux';
// import { SavingState } from '../../store/store';
import { useTranslation } from 'react-i18next';
import { DiscussionData } from '../../types/discussionTypes';
import Slider from './Slider';
import { useIsMobile, useIsTablet } from '../../hooks/useMediaQuery';
import commentImg from '/images/sliders/comments.png';
import { data } from '../../pages/ProfilePage/Discussions/Discussions';
import { formatUkrDate } from '../../utils/formatUkrDate';
import { Link } from 'react-router-dom';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { useState } from 'react';
import { CurrentDiscussion } from '../CurrentDiscussion/CurrentDiscussion';

export const DiscussionsSlider: React.FC = () => {
  const { t } = useTranslation();
  // const language = useSelector((state: SavingState) => state.language.language);

  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  const discussions = data;

  const [currentDiscussion, setCurrentDiscussion] = useState<DiscussionData>(
    discussions[0],
  );
  const [openDiscussion, setOpenDiscussion] = useState<boolean>(false);

  return (
    <>
      <Slider<DiscussionData>
        sliderTitle={t('discussionsSlider.title')}
        renderSliderLink={() => (
          <Link
            to={'/club/discussions'}
            className="slider__header-link"
          >
            {isMobile ? 'більше' : 'переглянути більше'}
          </Link>
        )}
        slides={discussions}
        slidesPerView={isTablet ? 1 : 3}
        renderSlide={(slide) => (
          <div
            key={slide.id}
            className="slider__discussion"
          >
            <div className="slider__discussion-top">
              <div className="slider__discussion-user">
                <img
                  src="./images/default-photo.webp"
                  className="slider__discussion-user-img"
                />
                <div className="slider__discussion-user-name">
                  {slide.author}
                </div>
              </div>
              <div className="slider__discussion-topics">
                {slide.theme.map((topic) => (
                  <div className="slider__discussion-topic">{topic}</div>
                ))}
              </div>
            </div>
            <div className="slider__discussion-middle">
              <h4 className="slider__discussion-question">{slide.name}</h4>
              <p className="slider__discussion-date">
                {formatUkrDate(slide.date)}
              </p>
            </div>
            <div className="slider__discussion-bottom">
              <div className="slider__discussion-comments">
                <img
                  className="slider__discussion-comments-img"
                  src={commentImg}
                  alt="comments"
                />
                <div className="slider__discussion-comments-amount">
                  {slide.comments.length}
                </div>
              </div>
              <Link
                to={'/club/discussions'}
                onClick={() => setCurrentDiscussion(slide)}
                className="slider__discussion-icon-forward"
              ></Link>
            </div>
          </div>
        )}
      />
      <ModalWindow
        visibility={'discussion__current-disussion'}
        openModal={openDiscussion}
        setOpenModal={setOpenDiscussion}
        secondModal={false}
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
