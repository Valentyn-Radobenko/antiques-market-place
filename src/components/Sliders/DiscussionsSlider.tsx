import { discussionsSlides } from '../../data/discussionsSlides';
import { Slider } from './Slider';

interface DiscussionSlide {
  id: string;
  createdAt: string;
  category: string;
  text: string;
  commentsLength: number;
}

export const DiscussionsSlider: React.FC = () => {
  return (
    <Slider<DiscussionSlide>
      sliderTitle="Обговорення"
      renderSliderLink={() => (
        <button className="slider__header-button">Додати тему</button>
      )}
      slides={discussionsSlides}
      slidesPerView={2}
      customSectionClassName="slider--discussions"
      customWrapperClassName="slider__wrapper--discussions"
      renderSlide={slide => (
        <div className="discussion">
          <div className="discussion__data">
            <p className="discussion__id">{slide.id}</p>
            <p className="discussion__date">{slide.createdAt}</p>
          </div>
          <p className="discussion__text">{slide.text}</p>
          <p className="discussion__category">{slide.category}</p>
          <p className="discussion__comments">{`${slide.commentsLength} коментарів`}</p>
        </div>
      )}
    />
  );
};
