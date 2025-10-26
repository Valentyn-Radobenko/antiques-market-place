// import { useSelector } from 'react-redux';
// import { SavingState } from '../../store/store';
import { useTranslation } from 'react-i18next';
import { DiscussionData } from '../../types/discussionTypes';
import Slider from './Slider';
import { useIsMobile, useIsTablet } from '../../hooks/useMediaQuery';
import commentImg from '/images/sliders/comments.png';
import { discussions } from '../../data/discussions';
import { formatUkrDate } from '../../utils/formatUkrDate';
import { Link } from 'react-router-dom';

export const DiscussionsSlider: React.FC = () => {
  const { t } = useTranslation();
  // const language = useSelector((state: SavingState) => state.language.language);

  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  return (
    <>
      <Slider<DiscussionData>
        sliderTitle={t('discussions')}
        renderSliderLink={() => (
          <Link
            to={'/club/discussions'}
            className="slider__header-link"
          >
            {isMobile ?
              `${t('slider__header-link')}`
            : `${t('slider__header-link2')}`}
          </Link>
        )}
        slides={discussions}
        slidesPerView={isTablet ? 1 : 3}
        renderSlide={(slide) => (
          <Link
            to={`/club/discussions/${slide.slug}`}
            key={slide.id}
            className="slider__discussion"
          >
            <div className="slider__discussion-top">
              <div className="slider__discussion-user">
                <img
                  src={slide.author.image}
                  className={slide.author.name}
                />
                <div className="slider__discussion-user-name">
                  {slide.author.name}
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
              <div className="slider__discussion-icon-forward"></div>
            </div>
          </Link>
        )}
      />
    </>
  );
};
