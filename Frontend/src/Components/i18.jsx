import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation: {
      "title2": "Prueba Nuestro Mapa Interactivo"
    }
  },
  en: {
    translation: {
      "title2": "Try Our Interactive Map"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;