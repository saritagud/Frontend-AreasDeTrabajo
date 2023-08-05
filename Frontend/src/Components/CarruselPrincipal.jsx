import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useTranslation } from "react-i18next";

function CarruselPrincipal() {
  const { t, i18n } = useTranslation();
  return (
    <>
      {/* <Toaster /> */}
      <ResponsiveCarousel
        showArrows={true}
        showThumbs={true}
        showStatus={false}
        animationHandler={true}
        transitionTime={1000}
        className="w-full h-full "
      >
        <section className="flex flex-col justify-end bg-oficina1 h-[80vh] mb-10 sm:h-screen lg:bg-oficionaHorizontal1 xl:h-[80vh]">
        <h1 className="bg-azulClaro bg-opacity-70 mb-10 p-5 text-3xl font-Montserrat font-bold text-left text-azulOscuro ">
        {t('carouselPrincipal1')}
        </h1>
      </section>

      <section className="flex flex-col justify-end bg-oficina2 h-[80vh] mb-10 sm:h-screen lg:bg-oficionaHorizontal2 xl:h-[80vh]">
        <h1 className="bg-azulClaro bg-opacity-70 mb-10 p-5 text-3xl font-Montserrat font-bold text-left text-azulOscuro ">
        {t('carouselPrincipal2')}
        </h1>
      </section>

      <section className="flex flex-col justify-end bg-oficina3 h-[80vh] mb-10 sm:h-screen lg:bg-oficionaHorizontal3 xl:h-[80vh]">
        <h1 className="bg-azulClaro bg-opacity-70 mb-10 p-5 text-3xl font-Montserrat font-bold text-left text-azulOscuro ">
        {t('carouselPrincipal3')}
        </h1>
      </section>

      <section className="flex flex-col justify-end   bg-oficina4 h-[80vh]  mb-10 sm:h-screen lg:bg-oficionaHorizontal4 xl:h-[80vh]">
        <h1 className="bg-azulClaro bg-opacity-70 mb-10 p-5 text-3xl font-Montserrat font-bold text-left text-azulOscuro ">
        {t('carouselPrincipal4')}
        </h1>
      </section>

      <section className="flex flex-col justify-end   bg-oficina5 h-[80vh]  mb-10 sm:h-screen lg:bg-oficionaHorizontal5 xl:h-[80vh]">
        <h1 className="bg-azulClaro bg-opacity-70 mb-10 p-5 text-3xl font-Montserrat font-bold text-left text-azulOscuro ">
        {t('carouselPrincipal5')}
        </h1>
      </section>
      </ResponsiveCarousel>
    </>
  );
}

export default CarruselPrincipal;
