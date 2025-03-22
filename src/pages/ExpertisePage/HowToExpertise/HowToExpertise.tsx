import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { ArrowRound } from '../../../components/Imgs/ArrowRound';
import { useResizeObserver } from '../../../utils/useResizeObserver';
import { BigArrow } from '../../../components/Imgs/BigArrow';

type Props = {
  scrollToSection: () => void;
};

export const HowToExpertise: React.FC<Props> = ({ scrollToSection }) => {
  const assesmantRef = useRef<HTMLDivElement>(null); // ширина всього блоку
  const [assesmantsWidth, setAssesmantsWidth] = useState(0); // встановлюю ширину вього блоку в стейт
  const { ref, width } = useResizeObserver(); //ширина відображання
  const [page, setPage] = useState(0); // теперішня сторінка
  const [pages, setPages] = useState<number[]>([]); // загальна кількість сторінок
  const [clientView, setClientView] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);
  const [imgWidth, setImgWidth] = useState<number>(0);

  useEffect(() => {
    if (imgRef.current) {
      setImgWidth(imgRef.current.clientWidth);
    }
  });

  useEffect(() => {
    if (assesmantRef.current) {
      setAssesmantsWidth(assesmantRef.current.clientWidth);
    }
  }, [assesmantRef.current]);

  useEffect(() => {
    if (width > assesmantsWidth) {
      setPages([]);
    } else if (width > (assesmantsWidth * 6) / 10) {
      setPages([0, 1]);
    } else if (width > (assesmantsWidth * 3) / 10) {
      setPages([0, 1, 2]);
    } else {
      setPages([0, 1, 2, 3, 4]);
    }
  }, [width]);

  const addPage = () => {
    if (page < pages.length - 1) {
      setPage(page + 1);
    }
  };

  const minusPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    const a = assesmantsWidth / (pages.length - 1);
    const b = width / (pages.length - 1);

    setClientView((a - b) * page);
  }, [page]);

  let startX = 0;

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startX = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const endX = e.changedTouches[0].clientX;
    const deltaX = startX - endX;

    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        addPage();
      } else {
        minusPage();
      }
    }
  };

  return (
    <section className="howtoexperise">
      <div
        ref={ref}
        className="howtoexperise__inner"
      >
        <div className="howtoexperise__title">
          <h2 className="howtoexperise__h2">
            Як отримати професійну оцінку вашого предмета?
          </h2>
          <p className="howtoexperise__subtext">Виконайте 5 простих кроків:</p>
        </div>
        <div
          ref={assesmantRef}
          style={
            pages.length < 5 ?
              {
                transform: `translate(-${clientView}px)`,
              }
            : {
                transform: `translate(-${(imgWidth + 40) * page}px)`,
                paddingInline: `${(width - imgWidth) / 2}px`,
              }
          }
          className="howtoexperise__assesments"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="howtoexperise__assesment">
            <img
              className="howtoexperise__assesment-img"
              src="images\expertise\Photo5.png"
              alt=""
              ref={imgRef}
            />
            <div className="howtoexperise__assesment-title title-pos-1">
              <h4 className="howtoexperise__assesment-h4">1.</h4>
              <p className="howtoexperise__assesment-text">
                Обираю послугу, <strong>оцінка</strong> або{' '}
                <strong>експертиза</strong>
              </p>
            </div>
            <ArrowRound className={'howtoexperise__round-arrow arrow-1'} />
          </div>
          <div className="howtoexperise__assesment">
            <img
              className="howtoexperise__assesment-img img-pos-2"
              src="images\expertise\Photo4.png"
              alt=""
            />
            <div className="howtoexperise__assesment-title title-pos-2">
              <h4 className="howtoexperise__assesment-h4">2.</h4>
              <p className="howtoexperise__assesment-text">
                Заповнюю потрібну інформацію{' '}
              </p>
            </div>
            <ArrowRound className={'howtoexperise__round-arrow arrow-2'} />
          </div>
          <div className="howtoexperise__assesment">
            <img
              className="howtoexperise__assesment-img"
              src="images\expertise\Photo3.png"
              alt=""
            />
            <div className="howtoexperise__assesment-title title-pos-3">
              <h4 className="howtoexperise__assesment-h4">3.</h4>
              <p className="howtoexperise__assesment-text">
                Відправляю заявку ✅
              </p>
            </div>
            <ArrowRound className={'howtoexperise__round-arrow arrow-3'} />
          </div>
          <div className="howtoexperise__assesment">
            <img
              className="howtoexperise__assesment-img img-pos-4"
              src="images\expertise\Photo2.png"
              alt=""
            />
            <div className="howtoexperise__assesment-title title-pos-4">
              <h4 className="howtoexperise__assesment-h4">4.</h4>
              <p className="howtoexperise__assesment-text">
                Очікую на відповідь
              </p>
            </div>
            <ArrowRound className={'howtoexperise__round-arrow arrow-4'} />
          </div>
          <div className="howtoexperise__assesment">
            <img
              className="howtoexperise__assesment-img"
              src="images\expertise\Photo1.png"
              alt=""
            />
            <div className="howtoexperise__assesment-title title-pos-5">
              <h4 className="howtoexperise__assesment-h4">5.</h4>
              <p className="howtoexperise__assesment-text">
                Тепер можу оплатити послугу та отримати результат.
              </p>
            </div>
            <img
              className="howtoexperise__heart"
              src="images\icons\❤️.png"
              alt=""
            />
          </div>
        </div>
        {pages.length > 1 && (
          <div className="howtoexperise__low-screen-nav">
            <BigArrow
              className={classNames('howtoexperise__arrow arrow-left', {
                notActive: page === 0,
              })}
              onClick={() => minusPage()}
            />
            <div className="howtoexperise__dots">
              {pages.map((p) => (
                <p
                  key={p}
                  className={classNames('howtoexperise__dot', {
                    isActive: p === page,
                  })}
                />
              ))}
            </div>
            <BigArrow
              className={classNames('howtoexperise__arrow arrow-right', {
                notActive: page === pages.length - 1,
              })}
              onClick={() => addPage()}
            />
          </div>
        )}
        {pages.length < 1 && (
          <svg
            onClick={scrollToSection}
            className="howtoexperise__arrow-down"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5 5V17.079L5.708 11.287L5 12L12 19L19 12L18.292 11.287L12.5 17.079V5H11.5Z"
              fill="#1B4332"
            />
          </svg>
        )}
      </div>
    </section>
  );
};
