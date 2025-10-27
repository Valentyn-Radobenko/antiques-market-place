import { Link, useParams } from 'react-router-dom';
import { Crumbs } from '../../components/Crumbs/Crumbs';
import { FacebookLogoSVG } from '../../components/Imgs/FacebookLogoSVG';
import { MailSVG } from '../../components/Imgs/MailSVG';
import { TelegramLogoSVG } from '../../components/Imgs/TelegramLogoSVG';
import articles from '../../data/articles.json';
import { useSelector } from 'react-redux';
import { SavingState } from '../../store/store';
import { useEffect, useState } from 'react';
import { ModalWindow } from '../../components/ModalWindow/ModalWindow';
import { CreateExhibition } from '../../components/CreateExhibition/CreateExhibition';
import { useIsTablet } from '../../hooks/useMediaQuery';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import { OtherArticlesSlider } from '../../components/Sliders/OtherArticlesSlider';
import { useTranslation } from 'react-i18next';

export const ArticlePage = () => {
  const { slug } = useParams();
  const article = articles.find((p) => p.slug === slug);

  const { t } = useTranslation();
  const lang = useSelector((state: SavingState) => state.language.language);

  const [content, setContent] = useState('');
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);

  const isTablet = useIsTablet();

  useEffect(() => {
    if (article?.content[lang]) {
      fetch(article.content[lang])
        .then((res) => res.text())
        .then(setContent)
        .catch(console.error);
    }
  }, [article, lang]);

  if (!article) {
    return <></>;
  }

  return (
    <>
      <Crumbs
        customClassName="article__crumbs"
        links={['/club', '/club/articles', `/club/article/${article?.slug}`]}
        titles={[`${t('club')}`, `${t('articles')}`, `${article?.title[lang]}`]}
      />

      <div className="article">
        {isTablet && (
          <Dropdown
            buttonArea="all"
            buttonTitle={() => (
              <h4 className="article__details-title">
                {t('article__details-title')}
              </h4>
            )}
            customClassName="article__details"
            renderContent={() => (
              <div className="article__details-content">
                <div className="article__details-block">
                  <p className="article__details-label">
                    {t('article__details-label')}
                  </p>
                  <p className="article__details-value">
                    {article?.author[lang]}
                  </p>
                </div>

                <div className="article__details-block">
                  <p className="article__details-label">
                    {t('article__details-label2')}
                  </p>
                  <p className="article__details-value">
                    {article.source[lang]}
                  </p>
                </div>

                <div className="article__details-block">
                  <p className="article__details-label">
                    {t('article__details-label3')}
                  </p>
                  <p className="article__details-value">{article.date[lang]}</p>
                </div>
              </div>
            )}
          />
        )}
        {!isTablet && (
          <div className="article__details">
            <h4 className="article__details-title">
              {t('article__details-title')}
            </h4>
            <div className="article__details-content">
              <div className="article__details-block">
                <p className="article__details-label">
                  {t('article__details-label')}
                </p>
                <p className="article__details-value">
                  {article?.author[lang]}
                </p>
              </div>

              <div className="article__details-block">
                <p className="article__details-label">
                  {t('article__details-label2')}
                </p>
                <p className="article__details-value">{article.source[lang]}</p>
              </div>

              <div className="article__details-block">
                <p className="article__details-label">
                  {t('article__details-label3')}
                </p>
                <p className="article__details-value">{article.date[lang]}</p>
              </div>
            </div>
          </div>
        )}
        <div className="article__content">
          <h2 className="article__content-title">{article.title[lang]}</h2>

          <img
            className="article__content-img"
            src={article.image}
            alt={article.title[lang]}
          />

          <div
            className="article__content-articles"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
        <div className="article__additional">
          <div className="article__sm">
            <Link
              to={'https://web.telegram.org/'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramLogoSVG className="article__sm-icon" />
            </Link>
            <Link
              to={'https://www.facebook.com/'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookLogoSVG className="article__sm-icon" />
            </Link>
            <Link
              to="mailto:example@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MailSVG className="article__sm-icon" />
            </Link>
          </div>
        </div>
      </div>

      <OtherArticlesSlider />

      <ModalWindow
        visibility={'profile-discussions__add-new-visibility'}
        openModal={openAddModal}
        setOpenModal={setOpenAddModal}
        secondModal={false}
      >
        <CreateExhibition setOpenModal={setOpenAddModal} />
      </ModalWindow>
    </>
  );
};
