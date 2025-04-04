import { useSelector } from 'react-redux';
import { SavingState } from '../../store/store';
import { useTranslation } from 'react-i18next';
import { discussionsSlides } from '../../data/discussionsSlides';
import Slider from './Slider';

interface DiscussionSlide {
  id: string;
  createdAt: string;
  category: {
    ua: string;
    en: string;
  };
  text: {
    ua: string;
    en: string;
  };
  commentsLength: number;
}

export const DiscussionsSlider: React.FC = () => {
  const { t } = useTranslation();
  const language = useSelector((state: SavingState) => state.language.language);

  return (
    <Slider<DiscussionSlide>
      sliderTitle={t('discussionsSlider.title')}
      renderSliderLink={() => (
        <button className="slider__header-button">
          {t('discussionsSlider.headerLink')}
        </button>
      )}
      slides={discussionsSlides}
      slidesPerView={3}
      customSectionClassName="slider__discussions"
      renderSlide={(slide) => (
        <div
          key={slide.id}
          className="slider__discussion"
        >
          <div className="slider__duscussion-content">
            <div className="slider__discussion-data">
              <p className="slider__discussion-id">{slide.id}</p>
              <p className="slider__discussion-date">{slide.createdAt}</p>
            </div>
            <p className="slider__discussion-text">{slide.text[language]}</p>
            <p className="slider__discussion-category">
              {slide.category[language]}
            </p>
            <p className="slider__discussion-comments">{`${slide.commentsLength} коментарів`}</p>
          </div>
        </div>
      )}
    />
  );
};
