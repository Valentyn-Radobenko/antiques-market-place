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
import { FrameInspectSVG } from '../../components/Imgs/FrameInspectSVG';
import { CreateExhibitionInfo } from '../../components/CreateExhibitionInfo/CreateExhibitionInfo';
import { ZoomableImage } from '../../components/ZoomableImage/ZoomableImage';
import { useTranslation } from 'react-i18next';

export const ExhibitionPage = () => {
  const { slug } = useParams();
  const exhibition = exhibitions.find((p) => p.slug === slug);

  const lang = useSelector((state: SavingState) => state.language.language);
  const { t } = useTranslation();

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
          `${t('club')}`,
          `${t('exhibitions')}`,
          `${exhibition?.title[lang]}`,
        ]}
      />

      <div className="exhibition">
        {isTablet && (
          <Dropdown
            buttonArea="all"
            buttonTitle={() => (
              <h4 className="exhibition__details-title hidden reveal">
                {t('exhibition__details-title')}
              </h4>
            )}
            customClassName="exhibition__details"
            renderContent={() => (
              <div className="exhibition__details-content">
                <div className="exhibition__details-block">
                  <p className="exhibition__details-label">
                    {t('exhibition__details-label')}
                  </p>
                  <p className="exhibition__details-value">
                    {exhibition?.source[lang]}
                  </p>
                </div>

                <div className="exhibition__details-block">
                  <p className="exhibition__details-label">
                    {t('exhibition__details-label2')}
                  </p>
                  <p className="exhibition__details-value">
                    {exhibition?.status[lang]}
                  </p>
                </div>

                <div className="exhibition__details-block">
                  <p className="exhibition__details-label">
                    {t('exhibition__details-label3')}
                  </p>
                  <p className="exhibition__details-value">
                    {exhibition.price[lang]}
                  </p>
                </div>

                <div className="exhibition__details-block">
                  <p className="exhibition__details-label">
                    {t('exhibition__details-label4')}
                  </p>
                  <p className="exhibition__details-value">
                    {exhibition.address[lang]}
                  </p>
                </div>

                <div className="exhibition__details-block">
                  <p className="exhibition__details-label">
                    {t('exhibition__details-label5')}
                  </p>
                  <p className="exhibition__details-value">
                    {exhibition.place[lang]}
                  </p>
                </div>

                <div className="exhibition__details-block">
                  <p className="exhibition__details-label">
                    {t('exhibition__details-label6')}
                  </p>
                  <p className="exhibition__details-value">
                    {exhibition.date[lang]}
                  </p>
                </div>
              </div>
            )}
          />
        )}
        {!isTablet && (
          <div className="exhibition__details hidden reveal">
            <h4 className="exhibition__details-title">
              {t('exhibition__details-title')}
            </h4>
            <div className="exhibition__details-content">
              <div className="exhibition__details-block">
                <p className="exhibition__details-label">
                  {t('exhibition__details-label')}
                </p>
                <p className="exhibition__details-value">
                  {exhibition?.source[lang]}
                </p>
              </div>

              <div className="exhibition__details-block">
                <p className="exhibition__details-label">
                  {t('exhibition__details-label2')}
                </p>
                <p className="exhibition__details-value">
                  {exhibition?.status[lang]}
                </p>
              </div>

              <div className="exhibition__details-block">
                <p className="exhibition__details-label">
                  {t('exhibition__details-label3')}
                </p>
                <p className="exhibition__details-value">
                  {exhibition.price[lang]}
                </p>
              </div>

              <div className="exhibition__details-block">
                <p className="exhibition__details-label">
                  {t('exhibition__details-label4')}
                </p>
                <p className="exhibition__details-value">
                  {exhibition.address[lang]}
                </p>
              </div>

              <div className="exhibition__details-block">
                <p className="exhibition__details-label">
                  {t('exhibition__details-label5')}
                </p>
                <p className="exhibition__details-value">
                  {exhibition.place[lang]}
                </p>
              </div>

              <div className="exhibition__details-block">
                <p className="exhibition__details-label">
                  {t('exhibition__details-label6')}
                </p>
                <p className="exhibition__details-value">
                  {exhibition.date[lang]}
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="exhibition__content hidden reveal">
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
        <div className="exhibition__additional hidden reveal">
          <div className="exhibitions__offer exhibitions__offer--exhibition">
            <div className="exhibitions__offer-heading">
              <h3 className="exhibitions__offer-title">
                {t('create-exhibition__title')}
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
              {t('exhibitions__offer-button2')}
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
                  <ZoomableImage
                    src={slide}
                    className={
                      'item-slider__slide-img item-slider--modal__slide-img'
                    }
                  />
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
