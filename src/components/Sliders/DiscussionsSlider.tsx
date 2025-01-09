import { discussionsSlides } from '../../data/discussionsSlides';
import Slider from './Slider';

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
      renderSecondSliderTitle={() => (
        <h2 className="slider__discussions-title">Найпопулярніші</h2>
      )}
      slides={discussionsSlides}
      slidesPerView={2}
      customSectionClassName="slider--discussions"
      customWrapperClassName="slider__wrapper--discussions"
      renderSlide={slide => (
        <div className="slider__discussion">
          <div className="slider__discussion-data">
            <p className="slider__discussion-id">{slide.id}</p>
            <p className="slider__discussion-date">{slide.createdAt}</p>
          </div>
          <p className="slider__discussion-text">{slide.text}</p>
          <p className="slider__discussion-category">{slide.category}</p>
          <p className="slider__discussion-comments">{`${slide.commentsLength} коментарів`}</p>
        </div>
      )}
    />
  );
};
