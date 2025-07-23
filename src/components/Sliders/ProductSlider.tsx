// import { useSelector } from 'react-redux';
// import { SavingState } from '../../store/store';
import { useState } from 'react';
import Slider from './Slider';
import SlickSlider from 'react-slick';
import { ModalWindow } from '../ModalWindow/ModalWindow';
// import { useTranslation } from 'react-i18next';

interface Props {
  title: { ua: string; eng: string };
  imgs: string[];
}

export const ProductSlider: React.FC<Props> = ({ title, imgs }) => {
  // const { t } = useTranslation();
  // const language = useSelector((state: SavingState) => state.language.language);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Slider<string>
        sliderTitle={title.ua}
        slides={imgs}
        slidesPerView={1}
        customClassName="product-slider"
        renderSlide={(slide) => {
          const index = imgs.indexOf(slide);

          return (
            <div
              key={slide}
              className="product-slider__slide"
              onClick={() => {
                setIsModalOpen(true);
                setActiveIndex(index);
              }}
            >
              <div className="product-slider__slide-icon"></div>
              <img
                className="product-slider__slide-img"
                src={slide}
                alt={slide}
              />
            </div>
          );
        }}
      />
      <ModalWindow
        openModal={isModalOpen}
        setOpenModal={setIsModalOpen}
        visibility="product-slider__modal"
        secondModal={false}
      >
        <div className="product-slider__modal-content">
          <button
            className="product-slider__modal-close"
            onClick={() => setIsModalOpen(false)}
          >
            ×
          </button>

          <SlickSlider
            initialSlide={activeIndex}
            infinite
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            dots
          >
            {imgs.map((imgUrl, index) => (
              <div
                key={index}
                className="product-slider__modal-slide"
              >
                <img
                  src={imgUrl}
                  alt={`Фото ${index}`}
                />
              </div>
            ))}
          </SlickSlider>
        </div>
      </ModalWindow>
    </>
  );
};
