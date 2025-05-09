import { useRef } from 'react';
import SlickSlider from 'react-slick';

interface SliderProps<T> {
  sliderTitle: string;
  renderSliderLink: () => React.ReactNode;
  renderSecondSliderTitle?: () => React.ReactNode;
  slides: T[];
  slidesPerView?: number;
  customSectionClassName?: string;
  customWrapperClassName?: string;

  renderSlide: (slide: T) => React.ReactNode;
}

export default function Slider<T>({
  sliderTitle,
  renderSliderLink,
  renderSecondSliderTitle,
  slides,
  slidesPerView = 1,
  customSectionClassName = '',
  customWrapperClassName = '',
  renderSlide,
}: SliderProps<T>) {
  const sliderRef = useRef<SlickSlider>(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 1100,
    autoplay: true,
    autoplaySpeed: 400000,
    slidesToShow: slidesPerView,
    slidesToScroll: 1,
    lazyLoad: 'ondemand' as const,
    appendDots: (dots: React.ReactNode) => (
      <div className="slider__dots">
        <div
          onClick={previous}
          className="slider__prev-arr"
        ></div>
        <ul>{dots}</ul>
        <div
          onClick={next}
          className="slider__next-arr"
        ></div>
      </div>
    ),
    customPaging: () => <div></div>,
  };

  return (
    <section className={`slider ${customSectionClassName}`}>
      <header className="slider__header">
        <h2 className="slider__header-title">{sliderTitle}</h2>
        {renderSliderLink()}
      </header>
      <div className={`slider__big-container ${customWrapperClassName}-big`}>
        <div className={`slider__container ${customWrapperClassName}`}>
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
