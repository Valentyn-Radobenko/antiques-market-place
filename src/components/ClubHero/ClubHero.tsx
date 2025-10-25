import { useTranslation } from 'react-i18next';

export const ClubHero = () => {
  const { t } = useTranslation();

  return (
    <section className="club-hero">
      <h1 className="club-hero__title">{t('clubHero.title')}</h1>
      <p
        className="club-hero__text"
        dangerouslySetInnerHTML={{ __html: t('clubHero.text') }}
      ></p>
    </section>
  );
};
