import { Link, useParams } from 'react-router-dom';
import { Crumbs } from '../../components/Crumbs/Crumbs';
import { FacebookLogoSVG } from '../../components/Imgs/FacebookLogoSVG';
import { MailSVG } from '../../components/Imgs/MailSVG';
import { TelegramLogoSVG } from '../../components/Imgs/TelegramLogoSVG';
import exhibitions from '../../data/exhibitions.json';
import { useSelector } from 'react-redux';
import { SavingState } from '../../store/store';
import { useEffect, useState } from 'react';
import { OtherExhibitionsSlider } from '../../components/Sliders/OtherExhibitionsSlider';
import { ModalWindow } from '../../components/ModalWindow/ModalWindow';
import { CreateExhibition } from '../../components/CreateExhibition/CreateExhibition';
import { useIsTablet } from '../../hooks/useMediaQuery';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import { Close } from '../../components/Imgs/Close';
import Slider from '../../components/Sliders/Slider';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import { FrameInspectSVG } from '../../components/Imgs/FrameInspectSVG';
import { CreateExhibitionInfo } from '../../components/CreateExhibitionInfo/CreateExhibitionInfo';

export const ExhibitionPage = () => {
  const { slug } = useParams();
  const exhibition = exhibitions.find((p) => p.slug === slug);
  const lang = useSelector((state: SavingState) => state.language.language);

  const [content, setContent] = useState('');
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);
  const [isImgOpen, setIsImgOpen] = useState(false);

  const isTablet = useIsTablet();

  const [isInfoOpen, setIsInfoOpen] = useState<boolean>(false);

  useEffect(() => {
    if (exhibition?.content[lang]) {
      fetch(exhibition.content[lang])
        .then((res) => res.text())
        .then(setContent)
        .catch(console.error);
    }
  }, [exhibition, lang]);

  if (!exhibition) {
    return <></>;
  }

  return (
    <>
      <Crumbs
        customClassName="exhibition__crumbs"
        links={[
          '/club',
          '/club/exhibitions',
          `/club/exhibition/${exhibition?.slug}`,
        ]}
        titles={[
          'Клуб колекціонерів',
          'Виставки',
          `${exhibition?.title[lang]}`,
        ]}
      />

      <div className="exhibition">
        {isTablet && (
          <Dropdown
            buttonArea="all"
            buttonTitle={() => (
              <h4 className="exhibition__details-title">Деталі виставки</h4>
            )}
            customClassName="exhibition__details"
            renderContent={() => (
              <div className="exhibition__details-content">
                <div className="exhibition__details-block">
                  <p className="exhibition__details-label">Джерело:</p>
                  <p className="exhibition__details-value">
                    {exhibition?.source[lang]}
                  </p>
                </div>

                <div className="exhibition__details-block">
                  <p className="exhibition__details-label">Подія:</p>
                  <p className="exhibition__details-value">
                    {exhibition?.status[lang]}
                  </p>
                </div>

                <div className="exhibition__details-block">
                  <p className="exhibition__details-label">Вхід:</p>
                  <p className="exhibition__details-value">
                    {exhibition.price[lang]}
                  </p>
                </div>

                <div className="exhibition__details-block">
                  <p className="exhibition__details-label">Адреса:</p>
                  <p className="exhibition__details-value">
                    {exhibition.address[lang]}
                  </p>
                </div>

                <div className="exhibition__details-block">
                  <p className="exhibition__details-label">Місце:</p>
                  <p className="exhibition__details-value">
                    {exhibition.place[lang]}
                  </p>
                </div>

                <div className="exhibition__details-block">
                  <p className="exhibition__details-label">Тривалість:</p>
                  <p className="exhibition__details-value">
                    {exhibition.date[lang]}
                  </p>
                </div>
              </div>
            )}
          />
        )}
        {!isTablet && (
          <div className="exhibition__details">
            <h4 className="exhibition__details-title">Деталі виставки</h4>
            <div className="exhibition__details-content">
              <div className="exhibition__details-block">
                <p className="exhibition__details-label">Джерело:</p>
                <p className="exhibition__details-value">
                  {exhibition?.source[lang]}
                </p>
              </div>

              <div className="exhibition__details-block">
                <p className="exhibition__details-label">Подія:</p>
                <p className="exhibition__details-value">
                  {exhibition?.status[lang]}
                </p>
              </div>

              <div className="exhibition__details-block">
                <p className="exhibition__details-label">Вхід:</p>
                <p className="exhibition__details-value">
                  {exhibition.price[lang]}
                </p>
              </div>

              <div className="exhibition__details-block">
                <p className="exhibition__details-label">Адреса:</p>
                <p className="exhibition__details-value">
                  {exhibition.address[lang]}
                </p>
              </div>

              <div className="exhibition__details-block">
                <p className="exhibition__details-label">Місце:</p>
                <p className="exhibition__details-value">
                  {exhibition.place[lang]}
                </p>
              </div>

              <div className="exhibition__details-block">
                <p className="exhibition__details-label">Тривалість:</p>
                <p className="exhibition__details-value">
                  {exhibition.date[lang]}
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="exhibition__content">
          <h2 className="exhibition__content-title">
            {exhibition.title[lang]}
          </h2>

          <div
            className="exhibition__content-img-wrapper"
            onClick={() => {
              setIsImgOpen(true);
            }}
          >
            <FrameInspectSVG className="exhibition__content-img-icon" />
            <img
              className="exhibition__content-img"
              src={exhibition.image}
              alt={exhibition.title[lang]}
            />
          </div>

          <div
            className="exhibition__content-articles"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
        <div className="exhibition__additional">
          <div className="exhibitions__offer exhibitions__offer--exhibition">
            <div className="exhibitions__offer-heading">
              <h3 className="exhibitions__offer-title">
                Запропонувати виставку
              </h3>
              <div
                onClick={() => setIsInfoOpen(true)}
                className="exhibitions__offer-icon"
              ></div>
            </div>
            <button
              onClick={() => setOpenAddModal(true)}
              className="exhibitions__offer-button exhibitions__offer-button--exhibition"
            >
              Додати виставку
            </button>
          </div>

          <div className="exhibition__sm">
            <Link
              to={'https://web.telegram.org/'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramLogoSVG className="exhibition__sm-icon" />
            </Link>
            <Link
              to={'https://www.facebook.com/'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookLogoSVG className="exhibition__sm-icon" />
            </Link>
            <Link
              to="mailto:example@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MailSVG className="exhibition__sm-icon" />
            </Link>
          </div>
        </div>
      </div>

      <OtherExhibitionsSlider />

      <ModalWindow
        visibility={'profile-discussions__add-new-visibility'}
        openModal={openAddModal}
        setOpenModal={setOpenAddModal}
        secondModal={false}
      >
        <CreateExhibition setOpenModal={setOpenAddModal} />
      </ModalWindow>

      <ModalWindow
        openModal={isImgOpen}
        setOpenModal={setIsImgOpen}
        visibility="item-slider__modal"
        secondModal={false}
      >
        <div className="item-slider__modal-content">
          <button
            className="item-slider__modal-close"
            onClick={() => setIsImgOpen(false)}
          >
            <Close />
          </button>

          <Slider<string>
            sliderTitle={exhibition.title[lang]}
            slides={[exhibition.image]}
            slidesPerView={1}
            customClassName="item-slider--modal"
            autoplayOn={false}
            renderSlide={(slide) => {
              return (
                <div
                  key={slide}
                  className="item-slider__slide item-slider--modal__slide"
                  onClick={() => {
                    setIsImgOpen(true);
                  }}
                >
                  <TransformWrapper
                    doubleClick={{ mode: 'zoomIn' }}
                    pinch={{ step: 0.1 }}
                    wheel={{ step: 0.1 }}
                    initialScale={1}
                    minScale={1}
                    maxScale={4}
                    panning={{ disabled: true }}
                  >
                    {() => (
                      <TransformComponent
                        wrapperStyle={{ width: '100%', height: '100%' }}
                        contentStyle={{ width: '100%', height: '100%' }}
                      >
                        <img
                          className="item-slider__slide-img item-slider--modal__slide-img"
                          src={slide}
                          alt={slide}
                        />
                      </TransformComponent>
                    )}
                  </TransformWrapper>
                </div>
              );
            }}
          />
        </div>
      </ModalWindow>

      <ModalWindow
        visibility={'profile-discussions__add-new-visibility'}
        openModal={isInfoOpen}
        setOpenModal={setIsInfoOpen}
        secondModal={false}
      >
        <CreateExhibitionInfo setOpenModal={setIsInfoOpen} />
      </ModalWindow>
    </>
  );
};
