import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import az from "./Lang/AZ/az";
import en from "./Lang/EN/en";
import ru from "./Lang/RU/ru";
// import tr from "./Lang/TR/tr.json";

const resources = {
  az: { translation: az },
  en: { translation: en },
  ru: { translation: ru },
//   tr: { translation: tr },
};

// URL'den dili çek ve kontrol et
const getInitialLanguage = () => {
  const lang = window.location.pathname.split("/")[1];
  return ["az", "en", "ru", "tr"].includes(lang) ? lang : "az";
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getInitialLanguage(),
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;
