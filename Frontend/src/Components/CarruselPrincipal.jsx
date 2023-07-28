import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarruselPrincipal() {
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
        <section className="flex flex-col justify-end bg-oficina1 h-[80vh] mb-10 sm:h-screen">
        <h1 className="bg-azulClaro bg-opacity-70 mb-10 p-5 text-3xl font-Montserrat font-bold text-left text-azulOscuro ">
          Encuentra la oficina de tus sueños en un solo lugar
        </h1>
      </section>

      <section className="flex flex-col justify-end bg-oficina2 h-[80vh] mb-10 sm:h-screen">
        <h1 className="bg-azulClaro bg-opacity-70 mb-10 p-5 text-3xl font-Montserrat font-bold text-left text-azulOscuro ">
        Espacio dedicados y profesionales
        </h1>
      </section>

      <section className="flex flex-col justify-end bg-oficina3 h-[80vh] mb-10 sm:h-screen">
        <h1 className="bg-azulClaro bg-opacity-70 mb-10 p-5 text-3xl font-Montserrat font-bold text-left text-azulOscuro ">
        Mayor productividad y enfoque al trabajar
        </h1>
      </section>

      <section className="flex flex-col justify-end   bg-oficina4 h-[80vh]  mb-10 sm:h-screen">
        <h1 className="bg-azulClaro bg-opacity-70 mb-10 p-5 text-3xl font-Montserrat font-bold text-left text-azulOscuro ">
        Colaboración y comunicación
        </h1>
      </section>

      <section className="flex flex-col justify-end   bg-oficina5 h-[80vh]  mb-10 sm:h-screen">
        <h1 className="bg-azulClaro bg-opacity-70 mb-10 p-5 text-3xl font-Montserrat font-bold text-left text-azulOscuro ">
        Imagen y profesionalismo
        </h1>
      </section>
      </ResponsiveCarousel>
    </>
  );
}

export default CarruselPrincipal;
