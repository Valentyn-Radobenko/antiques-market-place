// !!!NOTE!!!
// The logic of the second slider in the modal window is commented out.
// May be reused in the future.
// A lot of effort went into this.
// However the designer decided to change it to something else again.😐
// A designer is not always a developer's friend... Be careful.

// import { useState } from 'react';
// import { ModalWindow } from '../ModalWindow/ModalWindow';
// import { Close } from '../Imgs/Close';
// import { ZoomableImage } from '../ZoomableImage/ZoomableImage';
import { useSelector } from 'react-redux';
import { SavingState } from '../../store/store';
import Slider from './Slider';
import { FrameInspectSVG } from '../Imgs/FrameInspectSVG';
import { useIsMobile } from '../../hooks/useMediaQuery';

interface Props {
  title: { ua: string; en: string };
  imgs: string[];
}

export const ItemSlider: React.FC<Props> = ({ title, imgs }) => {
  const lang = useSelector((state: SavingState) => state.language.language);

  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [scale, setScale] = useState(1);

  const isPhone = useIsMobile();

  return (
    <>
      <Slider<string>
        sliderTitle={title[lang]}
        slides={imgs}
        slidesPerView={1}
        customClassName="item-slider"
        autoplayOn={false}
        renderSlide={(slide) => {
          return (
            <>
              <div
                key={slide}
                className="item-slider__slide"
                // onClick={() => {
                //   setIsModalOpen(true);
                // }}
              >
                {!isPhone && (
                  <>
                    <FrameInspectSVG
                      onClick={() => window.open(slide, '__blank')}
                      className="item-slider__slide-icon"
                    />
                    <img
                      className="item-slider__slide-img"
                      src={slide}
                      alt={slide}
                    />
                  </>
                )}

                {isPhone && (
                  <>
                    <div
                      className="item-slider__slide-img-wrapper"
                      style={{ backgroundImage: `url(${slide})` }}
                    >
                      <div className="item-slider__slide-img-square">
                        <FrameInspectSVG className="item-slider__slide-icon" />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </>
          );
        }}
      />
      {/* <ModalWindow
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
            sliderTitle={title[lang]}
            slides={imgs}
            slidesPerView={1}
            customClassName="item-slider--modal"
            autoplayOn={false}
            isSwipeOn={scale <= 1}
            renderSlide={(slide) => {
              return (
                <div
                  key={slide}
                  className="item-slider__slide item-slider--modal__slide"
                  onClick={() => {
                    setIsModalOpen(true);
                  }}
                >
                  <ZoomableImage
                    src={slide}
                    className={
                      'item-slider__slide-img item-slider--modal__slide-img'
                    }
                    customScale={scale}
                    setCustomScale={setScale}
                  />
                </div>
              );
            }}
          />
        </div>
      </ModalWindow> */}
    </>
  );
};
