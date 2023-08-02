import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation: {
      "carouselPrincipal1": "Encuentra la oficina de tus sueños en un solo lugar",
      "carouselPrincipal2": "Espacio dedicados y profesionales",
      "carouselPrincipal3": "Mayor productividad y enfoque al trabajar",
      "carouselPrincipal4": "Colaboración y comunicación",
      "carouselPrincipal5": "Imagen y profesionalismo",
      "title2": "Prueba Nuestro Mapa Interactivo",
      "carouselCards1": "Flexibilidad sin compromisos: Alquiler a medida, sin ataduras a largo plazo.",
      "carouselCards2": "Infraestructura de calidad: Oficinas modernas y completamente equipadas.",
      "carouselCards3": "Ubicaciones estratégicas: Acceso conveniente a centros empresariales y transporte.",
     
    }
  },
  en: {
    translation: {
      "carouselPrincipal1": "Find the office of your dreams in one place",
      "carouselPrincipal2": "Dedicated and professional space",
      "carouselPrincipal3": "Increased productivity and focus at work",
      "carouselPrincipal4": "Collaboration and communication",
      "carouselPrincipal5": "Image and professionalism",
      "title2": "Try Our Interactive Map",
      "carouselCards1": "Flexibility without compromise: Tailor-made rental, no long-term strings attached.",
      "carouselCards2": "Quality infrastructure: Modern and fully equipped offices.",
      "carouselCards3": "Strategic locations: Convenient access to business centers and transportation.",
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