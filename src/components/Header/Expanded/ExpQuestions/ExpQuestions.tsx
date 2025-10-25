import { useTranslation } from 'react-i18next';

export const ExpQuestions = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="exp-questions__buttons">
        <button className="exp-questions__button">
          {t('exp-questions__button')}
        </button>
        <button className="exp-questions__button">
          {t('exp-questions__button2')}
        </button>
        <button className="exp-questions__button">
          {t('exp-questions__button3')}
        </button>
        <button className="exp-questions__button">
          {t('exp-questions__button4')}
        </button>
        <button className="exp-questions__button">
          {t('exp-questions__button5')}
        </button>
      </div>
    </>
  );
};
