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
        className="w-[80%] m-10"
      >
        <section className="bg-principal h-[60vh]  rounded-2xl mb-10 flex flex-col justify-end ">
          <div className="w-full font-OpenSans  text-left text-xl p-3 bg-azulClaro bg-opacity-40 mb-10 flex flex-col gap-2">
            <h1 className="font-bold">Oficina de lujo</h1>
            <p>Precio</p>
          </div>
        </section>
      </ResponsiveCarousel>
    </>
  );
}

export default Carousel;
