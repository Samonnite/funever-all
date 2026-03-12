import { use } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import { defaultLang } from "config/lang-config";

// learn more: https://github.com/i18next/i18next-http-backend
// detect user language
// learn more: https://github.com/i18next/i18next-browser-languageDetector
use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: defaultLang,
    lng: defaultLang,
    debug: false,
    resources: {
      en: {
        translation: {
          key: "hello world",
        },
      },
    },
    lowerCaseLng: true, // 语言小写模式：en-US>en-us
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });
