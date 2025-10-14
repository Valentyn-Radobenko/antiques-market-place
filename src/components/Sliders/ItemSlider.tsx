// import { useSelector } from 'react-redux';
// import { SavingState } from '../../store/store';
import { useState } from 'react';
import Slider from './Slider';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { FrameInspectSVG } from '../Imgs/FrameInspectSVG';
import { Close } from '../Imgs/Close';
// import { useTranslation } from 'react-i18next';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

interface Props {
  title: { ua: string; eng: string };
  imgs: string[];
}

export const ItemSlider: React.FC<Props> = ({ title, imgs }) => {
  // const { t } = useTranslation();
  // const language = useSelector((state: SavingState) => state.language.language);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Slider<string>
        sliderTitle={title.ua}
        slides={imgs}
        slidesPerView={1}
        customClassName="item-slider"
        autoplayOn={false}
        renderSlide={(slide) => {
          return (
            <div
              key={slide}
              className="item-slider__slide"
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              <FrameInspectSVG className="item-slider__slide-icon" />
              <img
                className="item-slider__slide-img"
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
        visibility="item-slider__modal"
        secondModal={false}
      >
        <div className="item-slider__modal-content">
          <button
            className="item-slider__modal-close"
            onClick={() => setIsModalOpen(false)}
          >
            <Close />
          </button>

          <Slider<string>
            sliderTitle={title.ua}
            slides={imgs}
            slidesPerView={1}
            customClassName="item-slider--modal"
            autoplayOn={false}
            renderSlide={(slide) => {
              return (
                <div
                  key={slide}
                  className="item-slider__slide item-slider--modal__slide"
                  onClick={() => {
                    setIsModalOpen(true);
                  }}
                >
                  <TransformWrapper
                    doubleClick={{ mode: 'zoomIn' }}
                    pinch={{ step: 0.1 }}
                    wheel={{ step: 0.1 }}
                    initialScale={1}
                    minScale={1}
                    maxScale={4}
                  >
                    <TransformComponent>
                      <img
                        className="item-slider__slide-img item-slider--modal__slide-img"
                        src={slide}
                        alt={slide}
                      />
                    </TransformComponent>
                  </TransformWrapper>
                </div>
              );
            }}
          />
        </div>
      </ModalWindow>
    </>
  );
};
