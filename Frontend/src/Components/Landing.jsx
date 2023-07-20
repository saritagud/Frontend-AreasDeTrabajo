import Carrusel from "./Oficinas/Carrusel";
import CardOficina from "./Oficinas/CardOficina";
import { FaArrowRight } from "react-icons/fa";
function Landing() {
  return (
    <>
      <section className="flex flex-col justify-end items-center m-10 bg-principal h-[70vh] rounded-2xl ">
        <h1 className="bg-white bg-opacity-20 mb-10 p-5 text-2xl font-Montserrat font-bold ">
          Encuentra la oficina de tus sueños en un solo lugar
        </h1>
      </section>

      <section className="flex flex-col justify-start items-center   w-full">
        <h1 className="font-Montserrat font-bold text-2xl">
          ¿Necesitas una oficina?
        </h1>
        <p></p>

        <Carrusel />
      </section>

      <section className="flex flex-col justify-center items-center ">
        <h1 className="font-Montserrat text-2xl font-bold">
          Encuentra mas oficinas
        </h1>
        <CardOficina />

        <button className="bg-azulOscuro p-5 text-white font-Montserrat text-xl rounded-xl mb-10 flex justify-center items-center gap-3">
          Ver mas
          <FaArrowRight />
        </button>
      </section>

      <section className="flex flex-col justify-center items-center bg-gris p-5">
        <h1 className="font-Montserrat text-2xl font-bold  text-center">¿Por que buscar con nosotros?</h1>
        <p></p>

        <img src=""/>

      </section>
    </>
  );
}

export default Landing;
