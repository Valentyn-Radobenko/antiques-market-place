import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import uaLang from './locales/ua/translation.json';
import enLang from './locales/en/translation.json';
import LanguageDetector from 'i18next-browser-languagedetector';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  ua: {
    translation: uaLang,
  },
  en: {
    translation: enLang,
  },
};

const savedLanguage = localStorage.getItem('i18nextLng') || 'ua';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: 'ua',
    debug: true,
    detection: {
      order: ['localStorage', 'navigator'], // Порядок пошуку мови
      caches: ['localStorage'], // Зберігаємо мову в localStorage
    },
    // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
