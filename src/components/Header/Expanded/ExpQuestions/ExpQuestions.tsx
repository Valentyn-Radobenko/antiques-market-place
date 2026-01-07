import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const ExpQuestions = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="exp-questions__buttons">
        <Link
          to={'/no-content'}
          className="exp-questions__button"
        >
          {t('exp-questions__button')}
        </Link>
        <Link
          to={'/no-content'}
          className="exp-questions__button"
        >
          {t('exp-questions__button2')}
        </Link>
        <Link
          to={'/no-content'}
          className="exp-questions__button"
        >
          {t('exp-questions__button3')}
        </Link>
        <Link
          to={'/no-content'}
          className="exp-questions__button"
        >
          {t('exp-questions__button4')}
        </Link>
        <Link
          to={'/no-content'}
          className="exp-questions__button"
        >
          {t('exp-questions__button5')}
        </Link>
      </div>
    </>
  );
};
