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
      "title1": "Prueba Nuestro Mapa Interactivo",
      "subtitle1": "Tu espacio de éxito, la oficina perfecta.",
      "subtitle2": "Transforma tu visión en realidad, en nuestra oficina ideal.",
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
      "title1": "Try Our Interactive Map",
      "subtitle1": "Your successful space, the perfect office.",
      "subtitle2": "Transform your vision into reality, in our ideal office.",
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
    lng: "es",
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;