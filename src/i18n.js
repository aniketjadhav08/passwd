import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// https://www.deepl.com/translator#en/zh/Weak%20password
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./i18n/locales/en/translation.json";
import translationHI from "./i18n/locales/hi/translation.json";
import translationMR from "./i18n/locales/mr/translation.json";
import translationES from "./i18n/locales/es/translation.json";
import translationRUS from "./i18n/locales/rus/translation.json";
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

/* istanbul ignore next */
const resources = {
  en: {
    translation: translationEN,
  },
  hi: {
    translation: translationHI,
  },
  mr: {
    translation: translationMR,
  },
  es: {
    translation: translationES,
  },
  rus: {
    translation: translationRUS,
  },
};

/* istanbul ignore next */
i18n
  //   .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources,
    // lng: "hi",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default i18n;
