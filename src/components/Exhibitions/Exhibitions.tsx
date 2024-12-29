import './Exhibitions.scss';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import exhibition1 from './../../images/exhibitions/exhibition-1.jpg';
import exhibition2 from './../../images/exhibitions/exhibition-2.jpg';
import exhibition3 from './../../images/exhibitions/exhibition-3.jpg';

export const Exhibitions: React.FC = () => {
  const slides = [
    {
      title: 'Виставка народного Художника України Володимира Козюка',
      status: 'Відбулася',
      imageUrl: exhibition1,
    },
    {
      title: 'Інша виставка',
      status: 'Триває',
      imageUrl: exhibition2,
    },
    {
      title: 'Ще одна виставка',
      status: 'Скоро',
      imageUrl: exhibition3,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoSlideInterval = useRef<NodeJS.Timeout | null>(null);
  const slideListRef = useRef<HTMLUListElement>(null);

  const stopAutoSlide = useCallback(() => {
    if (autoSlideInterval.current) {
      clearInterval(autoSlideInterval.current);
      autoSlideInterval.current = null;
    }
  }, []);

  const startAutoSlide = useCallback(() => {
    stopAutoSlide();

    autoSlideInterval.current = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % (slides.length + 1));
    }, 300000);
  }, [slides.length, stopAutoSlide]);

  const handleTransitionEnd = () => {
    if (currentIndex === slides.length) {
      setIsTransitioning(false);

      if (slideListRef.current) {
        slideListRef.current.style.transition = 'none';
        slideListRef.current.style.transform = 'translateX(0%)';
      }

      setCurrentIndex(0);
    } else {
      setIsTransitioning(false);
    }
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) {
      return;
    }

    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  useEffect(() => {
    startAutoSlide();

    return () => {
      stopAutoSlide();
    };
  }, [startAutoSlide, stopAutoSlide]);

  useEffect(() => {
    if (slideListRef.current) {
      slideListRef.current.style.transition = isTransitioning
        ? 'transform 0.3s ease-in-out'
        : 'none';
      slideListRef.current.style.transform = `translateX(-${(currentIndex % (slides.length + 1)) * 100}%)`;
    }
  }, [currentIndex, isTransitioning, slides.length]);

  return (
    <section className="exhibitions">
      <header className="exhibitions__header">
        <h2 className="exhibitions__header-title">Виставки</h2>
        <a href="#" className="exhibitions__header-link">
          дізнатися більше
        </a>
      </header>

      <div
        className="exhibitions__wrapper"
        onMouseEnter={stopAutoSlide}
        onMouseLeave={startAutoSlide}
      >
        <ul
          className="exhibitions__list"
          ref={slideListRef}
          onTransitionEnd={handleTransitionEnd}
        >
          {[...slides, slides[0]].map((slide, index) => (
            <li className="exhibitions__item" key={index}>
              <figure className="exhibitions__figure">
                <img
                  src={slide.imageUrl}
                  alt={slide.title}
                  className="exhibitions__image"
                />
                <figcaption className="exhibitions__caption">
                  <div className="exhibitions__caption-info">
                    <h3 className="exhibitions__caption-title">
                      {slide.title}
                    </h3>
                    <p className="exhibitions__caption-status">
                      {slide.status}
                    </p>
                  </div>
                  <a href="#" className="exhibitions__caption-link">
                    Переглянути
                  </a>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>

      <div className="exhibitions__pagination">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`exhibitions__pagination-dot ${
              index === currentIndex % slides.length
                ? 'exhibitions__pagination-dot--active'
                : ''
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};
