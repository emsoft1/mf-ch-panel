import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          Header: {
            title: 'Panel  Header component from Home',
          },
          Footer: {
            title: 'Panel  Header component from Home',
          },
          greetings: {
            hello: 'Hello i am micro frontend - panel, that do financial analytics',
          },
        }

      }, de: {
        translation: {
          Header: {
            title: 'Panel-Header-Komponente von Home',
          },
          Footer: {
            title: 'Panel-Fußzeilenkomponente von Home',
          },
          greetings: {
            hello: 'Hallo, ich bin ein Micro-Frontend-Panel, das Finanzanalysen durchführt',
          },
        }
      }
    }
  });

export default i18n;
