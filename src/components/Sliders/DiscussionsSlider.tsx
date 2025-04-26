// import { useSelector } from 'react-redux';
// import { SavingState } from '../../store/store';
import { useTranslation } from 'react-i18next';
import { discussionsSlides } from '../../data/discussionsSlides';
import Slider from './Slider';
import { useIsMobile, useIsTablet } from '../../hooks/useMediaQuery';

interface DiscussionSlide {
  img: string;
  name: string;
  topic: string;
  title: string;
  date: string;
  comments: string;
}

export const DiscussionsSlider: React.FC = () => {
  const { t } = useTranslation();
  // const language = useSelector((state: SavingState) => state.language.language);

  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  return (
    <Slider<DiscussionSlide>
      sliderTitle={t('discussionsSlider.title')}
      renderSliderLink={() => (
        <a
          href="#"
          className="slider__header-link"
        >
          {isMobile ? 'більше' : 'переглянути більше'}
        </a>
      )}
      slides={discussionsSlides}
      slidesPerView={isTablet ? 1 : 3}
      customSectionClassName="slider__discussions"
      renderSlide={(slide) => (
        <div
          key={slide.date + slide.name + slide.title}
          className="slider__discussion"
        >
          <div className="slider__discussion-top">
            <div className="slider__discussion-user">
              <img
                src={slide.img}
                className="slider__discussion-user-img"
              />
              <div className="slider__discussion-user-name">{slide.name}</div>
            </div>
            <div className="slider__discussion-topic">{slide.topic}</div>
          </div>
          <div className="slider__discussion-middle">
            <h4 className="slider__discussion-question">{slide.title}</h4>
            <p className="slider__discussion-date">{slide.date}</p>
          </div>
          <div className="slider__discussion-bottom">
            <div className="slider__discussion-comments">
              <img
                className="slider__discussion-comments-img"
                src="/images/sliders/comments.png"
                alt="comments"
              />
              <div className="slider__discussion-comments-amount">
                {slide.comments}
              </div>
            </div>
            <a className="slider__discussion-icon-forward"></a>
          </div>
        </div>
      )}
    />
  );
};
