import { useTranslation } from 'react-i18next';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="club-hero">
      <h1 className="club-hero__title">{t('hero.title')}</h1>
    </section>
  );
};
