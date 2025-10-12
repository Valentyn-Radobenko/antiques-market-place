import { Link, useParams } from 'react-router-dom';
import { Crumbs } from '../../components/Crumbs/Crumbs';
import { FacebookLogoSVG } from '../../components/Imgs/FacebookLogoSVG';
import { MailSVG } from '../../components/Imgs/MailSVG';
import { TelegramLogoSVG } from '../../components/Imgs/TelegramLogoSVG';
import exhibitions from '../../data/exhibitions.json';
import { useSelector } from 'react-redux';
import { SavingState } from '../../store/store';
import { useEffect, useState } from 'react';

export const ExhibitionPage = () => {
  const { slug } = useParams();
  const exhibition = exhibitions.find((p) => p.slug === slug);
  const lang = useSelector((state: SavingState) => state.language.language);

  const [content, setContent] = useState('');

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
        <div className="exhibition__content">
          <h2 className="exhibition__content-title">
            {exhibition.title[lang]}
          </h2>
          <img
            className="exhibition__content-img"
            src={exhibition.image}
            alt={exhibition.title[lang]}
          />
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
              <div className="exhibitions__offer-icon"></div>
            </div>
            <button className="exhibitions__offer-button">
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
    </>
  );
};
