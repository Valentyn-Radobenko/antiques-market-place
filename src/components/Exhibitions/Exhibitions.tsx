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

  // Зберігаємо індекс поточного слайда
  const [currentIndex, setCurrentIndex] = useState(0);

  // Прапорець для вказівки, чи активна анімація
  const [isAnimating, setIsAnimating] = useState(false);

  // Референс для списку слайдів
  const slideListRef = useRef<HTMLUListElement>(null);

  // Референс для автоматичного перемикання
  const autoSlideInterval = useRef<NodeJS.Timeout | null>(null);

  // Зупиняємо автоматичне перемикання
  const stopAutoSlide = useCallback(() => {
    if (autoSlideInterval.current) {
      clearInterval(autoSlideInterval.current);
      autoSlideInterval.current = null;
    }
  }, []);

  // Запускаємо автоматичне перемикання
  const startAutoSlide = useCallback(() => {
    stopAutoSlide();
    autoSlideInterval.current = setInterval(() => {
      setIsAnimating(true);
      setCurrentIndex(prevIndex => prevIndex + 1);
    }, 3000);
  }, [stopAutoSlide]);

  // Обробник кінця анімації (важливо для циклічного слайдера)
  const handleTransitionEnd = () => {
    if (currentIndex === slides.length) {
      // Коли доходимо до останнього слайда, повертаємося на перший
      setIsAnimating(false);
      setCurrentIndex(0);

      if (slideListRef.current) {
        slideListRef.current.style.transition = 'none'; // Вимикаємо анімацію
        slideListRef.current.style.transform = `translateX(0%)`; // Повертаємося до першого
      }
    } else {
      setIsAnimating(false);
    }
  };

  // Перехід до конкретного слайда
  const goToSlide = (index: number) => {
    if (isAnimating) {
      return;
    }

    stopAutoSlide(); // Зупиняємо автоперемикання, якщо користувач натискає кнопку
    setIsAnimating(true);
    setCurrentIndex(index);
    startAutoSlide(); // Запускаємо автоперемикання знову
  };

  // Обробка зміни currentIndex
  useEffect(() => {
    if (slideListRef.current) {
      const totalSlides = slides.length + 1; // Додаємо 1, бо дублюємо перший слайд в кінці
      const translateIndex = currentIndex % totalSlides; // Циклічний індекс

      slideListRef.current.style.transition = isAnimating
        ? 'transform 0.3s ease-in-out'
        : 'none';

      slideListRef.current.style.transform = `translateX(-${translateIndex * 100}%)`;
    }
  }, [currentIndex, isAnimating, slides.length]);

  // Запуск автоперемикання при монтуванні компонента
  useEffect(() => {
    // Скидаємо стан до початкового при кожному монтуванні
    setCurrentIndex(0);
    setIsAnimating(false);

    if (slideListRef.current) {
      slideListRef.current.style.transition = 'none';
      slideListRef.current.style.transform = `translateX(0%)`;
    }

    startAutoSlide(); // Запускаємо автоматичне перемикання

    return () => stopAutoSlide(); // Очищуємо таймер при розмонтуванні
  }, [startAutoSlide, stopAutoSlide]);

  return (
    <section className="exhibitions">
      <header className="exhibitions__header">
        <h2 className="exhibitions__header-title">Виставки</h2>
        <a href="#" className="exhibitions__header-link">
          Дізнатися більше
        </a>
      </header>

      <div className="exhibitions__wrapper">
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
                  onMouseEnter={stopAutoSlide}
                  onMouseLeave={startAutoSlide}
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
          />
        ))}
      </div>
    </section>
  );
};
