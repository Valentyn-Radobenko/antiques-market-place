import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  CSSProperties,
} from 'react';

interface CustomCSSProperties extends CSSProperties {
  '--items-per-slide'?: number;
}

interface Slide {
  id: string;
  createdAt: string;
  category: string;
  text: string;
  commentsLength: number;
}

interface SliderProps {
  slides: Slide[];
  slidesPerView?: number; // Кількість видимих слайдів
}

export const DiscussionsSlider: React.FC<SliderProps> = ({
  slides,
  slidesPerView = 1,
}) => {
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
    }, 300000);
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
      const totalSlides = slides.length + slidesPerView; // Додаємо 1, бо дублюємо перший слайд в кінці
      const translateIndex = currentIndex % totalSlides; // Циклічний індекс

      slideListRef.current.style.transition = isAnimating
        ? 'transform 0.3s ease-in-out'
        : 'none';

      slideListRef.current.style.transform = `translateX(-${translateIndex * (100 / slidesPerView)}%)`;
    }
  }, [currentIndex, isAnimating, slides.length, slidesPerView]);

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
    <section className="slider">
      <header className="slider__header">
        <h2 className="slider__header-title">Обговорення</h2>
        <a href="#" className="slider__header-link">
          Дізнатися більше
        </a>
      </header>

      <div
        className="slider__wrapper slider__wrapper--discussions"
        style={{ '--items-per-slide': slidesPerView } as CustomCSSProperties}
      >
        <h2 className="slider__discussions-title">Найпопулярніші</h2>
        <ul
          className="slider__list"
          ref={slideListRef}
          onTransitionEnd={handleTransitionEnd}
          style={{
            gridTemplateColumns: `repeat(${slides.length + slidesPerView}, calc(100% / ${slidesPerView}))`,
          }}
        >
          {[...slides, ...slides.slice(0, slidesPerView)].map(
            (slide, index) => (
              <li className="slider__item" key={index}>
                <div className="discussion">
                  <div className="discussion__data">
                    <p className="discussion__id">{slide.id}</p>
                    <p className="discussion__date">{slide.createdAt}</p>
                  </div>
                  <p className="discussion__text">{slide.text}</p>
                  <p className="discussion__category">{slide.category}</p>
                  <p className="discussion__comments">{slide.commentsLength}</p>
                </div>
              </li>
            ),
          )}
        </ul>
      </div>

      <div className="slider__pagination">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`slider__pagination-dot ${
              index === currentIndex % slides.length
                ? 'slider__pagination-dot--active'
                : ''
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};
