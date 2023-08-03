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
      "title2": "¿Necesitas una oficina?",
      "p1": "Nuestra empresa ofrece oficinas de alquiler flexibles diseñadas para satisfacer todas tus necesidades empresariales. ¡No pierdas más tiempo buscando, ven a experimentar el futuro del trabajo con nosotros hoy mismo!",
      "carouselCards1": "Flexibilidad sin compromisos: Alquiler a medida, sin ataduras a largo plazo.",
      "carouselCards2": "Infraestructura de calidad: Oficinas modernas y completamente equipadas.",
      "carouselCards3": "Ubicaciones estratégicas: Acceso conveniente a centros empresariales y transporte.",
      "title3": "Encuentra mas oficinas",
      "buttonAllOffices": "Ver mas",
      "title4": "¿Por que buscar con nosotros?",
      "p2": "Nuestra empresa ofrece una experiencia única, pensando en tu comodidad y productividad. Disfrutarás de la máxima flexibilidad en términos de duración de alquiler, sin preocupaciones por compromisos a largo plazo. Nuestras oficinas están completamente equipadas con una moderna infraestructura y todas las comodidades que necesitas para impulsar tu rendimiento.",
      "login": "Inicio de sesión",
      "email": "Correo",
      "password": "Contraseña",
      "buttonLogin": "Ingresar",
      "linkRegister1": "¿No tienes una cuenta?",
      "linkRegister2": "¡Registrate!",
      "register": "Registro",
      "name": "Nombre",
      "email1": "Correo",
      "password1": "Contraseña",
      "repeatPassword": "Repetir Contraseña",
      "buttonRegister": "Registrarse",
      "linkLogin1": "¿Ya tienes una cuenta?",
      "linkLogin2": "¡Inicia Sesión!",
      "profile": "Perfil",
      "data": "Datos",
      "reservation": "Reservaciones",

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
      "title2": "Do you need an office?",
      "p1": "Our company offers flexible rental offices designed to meet all your business needs. Waste no more time searching, come experience the future of work with us today!",
      "carouselCards1": "Flexibility without compromise: Tailor-made rental, no long-term strings attached.",
      "carouselCards2": "Quality infrastructure: Modern and fully equipped offices.",
      "carouselCards3": "Strategic locations: Convenient access to business centers and transportation.",
      "title3": "Find more offices",
      "buttonAllOffices": "See more",
      "title4": "Why search with us?",
      "p2": "Our company offers a unique experience, thinking about your comfort and productivity. You'll enjoy maximum flexibility in terms of rental length, without worrying about long-term commitments. Our offices are fully equipped with a modern infrastructure and all the comforts you need to boost your performance.",
      "login": "Login",
      "email": "Email",
      "password": "Password",
      "buttonLogin": "Get into",
      "linkRegister1": "You do not have an account?",
      "linkRegister2": "Sign up!",
      "register": "Registro",
      "name": "Name",
      "email1": "Email",
      "password1": "Password",
      "repeatPassword": "Repeat Password",
      "buttonRegister": "Check in",
      "linkLogin1": "Do you already have an account?",
      "linkLogin2": "Log in!",
      "profile": "Profile",
      "data": "Data",
      "reservation": "Resrvation",
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