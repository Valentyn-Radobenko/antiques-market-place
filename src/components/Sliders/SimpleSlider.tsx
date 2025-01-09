import { useRef } from 'react';
import { exhibitionsSlides } from '../../data/exhibitionsSlides';
import SlickSlider from 'react-slick';

function CustomPrevArrow(props: any) {
  const { style, onClick } = props;

  return (
    <div
      className="custom-prev-arrow"
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    ></div>
  );
}

export default function Slider() {
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
    speed: 1000,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    appendDots: (dots: any) => (
      <div className="slider__dots">
        <div onClick={previous} className="slider__prev-arr"></div>
        <ul>{dots}</ul>
        <div onClick={next} className="slider__next-arr"></div>
      </div>
    ),
    customPaging: () => <div></div>,
  };

  return (
    <section className="slider">
      <header className="slider__header">
        <h2 className="slider__header-title">Виставки</h2>
        <a href="#" className="slider__header-link">
          дізнатися більше
        </a>
      </header>

      <div className="slider__container">
        <SlickSlider ref={sliderRef} {...settings}>
          {exhibitionsSlides.map(slide => (
            <div key={slide.id} className="slider__slide">
              <img
                className="slider__slide-img"
                src={slide.imageUrl}
                alt={slide.title}
              />
              <div className="slider__slide-content">
                <h3 className="slider__slide-title">{slide.title}</h3>
                <div className="slider__slide-info">
                  <p className="slider__slide-status">{slide.status}</p>
                  <a href="#" className="slider__slide-link">
                    Переглянути
                  </a>
                </div>
              </div>
            </div>
          ))}
        </SlickSlider>
      </div>
    </section>
  );
}
