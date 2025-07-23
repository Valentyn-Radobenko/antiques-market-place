import { useRef, useState } from 'react';
import SlickSlider from 'react-slick';
import classNames from 'classnames';

interface SliderProps<T> {
  sliderTitle: string;
  renderSliderLink?: () => React.ReactNode;
  renderSecondSliderTitle?: () => React.ReactNode;
  slides: T[];
  slidesPerView?: number;
  customClassName?: string;
  autoplayOn?: boolean;

  renderSlide: (slide: T) => React.ReactNode;
}

export default function Slider<T>({
  sliderTitle,
  renderSliderLink,
  renderSecondSliderTitle,
  slides,
  slidesPerView = 1,
  customClassName = '',
  autoplayOn = true,
  renderSlide,
}: SliderProps<T>) {
  const sliderRef = useRef<SlickSlider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => {
    if (currentSlide < slides.length - slidesPerView) {
      sliderRef.current?.slickNext();
    }
  };

  const previous = () => {
    if (currentSlide > 0) {
      sliderRef.current?.slickPrev();
    }
  };

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 1100,
    autoplay: autoplayOn,
    autoplaySpeed: 4000,
    slidesToShow: slidesPerView,
    slidesToScroll: slidesPerView,
    lazyLoad: 'ondemand' as const,
    centerMode: false,
    beforeChange: (_oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
    appendDots: (dots: React.ReactNode) => {
      const isFirst = currentSlide === 0;
      const isLast = currentSlide >= slides.length - slidesPerView;

      return (
        <div className="slider__dots">
          <div
            onClick={previous}
            className={classNames('slider__prev-arr', {
              'slider__prev-arr--dis': isFirst,
            })}
          ></div>
          <ul>{dots}</ul>
          <div
            onClick={next}
            className={classNames('slider__next-arr', {
              'slider__next-arr--dis': isLast,
            })}
          ></div>
        </div>
      );
    },
    customPaging: () => <div></div>,
  };

  return (
    <section className={`slider ${customClassName}`}>
      <header className={`slider__header ${customClassName}__header`}>
        <h2 className={`slider__header-title ${customClassName}__header-title`}>
          {sliderTitle}
        </h2>
        {renderSliderLink && renderSliderLink()}
      </header>
      <div
        className={`slider__big-container ${customClassName}__big-container`}
      >
        <div className={`slider__container ${customClassName}__container`}>
          {renderSecondSliderTitle && renderSecondSliderTitle()}
          <SlickSlider
            ref={sliderRef}
            {...settings}
          >
            {slides.map((slide) => renderSlide(slide))}
          </SlickSlider>
        </div>
      </div>
    </section>
  );
}
