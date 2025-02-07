import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, SavingState } from '../../../../store/store';
import { setLanguage } from '../../../../store/slices/languageSlice';
import i18n from '../../../../i18n/i18n';
import classNames from 'classnames';

export const ExpLanguage = () => {
  const language = useSelector((state: SavingState) => state.language.language);
  const dispatch = useDispatch<AppDispatch>();
  const handleLanguageChange = (lang: 'ua' | 'en') => {
    dispatch(setLanguage(lang));
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <div className="exp-language__buttons">
        <button
          onClick={() => handleLanguageChange('en')}
          disabled={language === 'en'}
          className={classNames('exp-language__button', {
            'exp-language__button--dis': language === 'en',
          })}
        >
          Англійська
        </button>
        <button
          onClick={() => handleLanguageChange('ua')}
          disabled={language === 'ua'}
          className={classNames('exp-language__button', {
            'exp-language__button--dis': language === 'ua',
          })}
        >
          Українська
        </button>
      </div>
    </>
  );
};
