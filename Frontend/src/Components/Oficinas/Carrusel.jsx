import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Carousel() {
  return (
    <>
      {/* <Toaster /> */}
      <ResponsiveCarousel
        showArrows={true}
        showThumbs={true}
        showStatus={false}
        animationHandler={true}
        transitionTime={1000}
        className="w-full h-full sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[35%]"
      >
        <section className="bg-azulOscuro h-[60vh]  rounded-3xl mb-10 flex flex-col justify-end p-7 m-2 sm:h-[70vh] ">
          <div className="w-full font-OpenSans  text-center text-white text-xl p-3 bg-azulClaro h-full flex flex-col justify-center items-center gap-2 rounded-3xl">
            <h1 className="font-bold">Flexibilidad sin compromisos: Alquiler a medida, sin ataduras a largo plazo.</h1>
          </div>
        </section>

        <section className="bg-azulOscuro h-[60vh]  rounded-3xl mb-10 flex flex-col justify-end p-7 m-2  sm:h-[70vh] ">
          <div className="w-full font-OpenSans  text-center text-white text-xl p-3 bg-azulClaro h-full flex flex-col justify-center items-center gap-2 rounded-3xl">
            <h1 className="font-bold">Infraestructura de calidad: Oficinas modernas y completamente equipadas.</h1>
          </div>
        </section>

        <section className="bg-azulOscuro h-[60vh]  rounded-3xl mb-10 flex flex-col justify-end p-7 m-2 sm:h-[70vh] ">
          <div className="w-full font-OpenSans  text-center text-white text-xl p-3 bg-azulClaro h-full flex flex-col justify-center items-center gap-2 rounded-3xl ">
            <h1 className="font-bold">Ubicaciones estratégicas: Acceso conveniente a centros empresariales y transporte.</h1>
          </div>
        </section>
      </ResponsiveCarousel>
    </>
  );
}

export default Carousel;
