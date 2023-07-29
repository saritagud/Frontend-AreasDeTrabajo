import { useState } from "react";
import { FaTrash } from "react-icons/fa";

function ModalEliminar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <FaTrash
        className="text-right text-2xl flex items-end justify-end cursor-pointer hover:text-verde 2xl:text-3xl"
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <section className="fixed flex justify-center items-center inset-0 backdrop-blur-sm bg-black bg-opacity-30 min-h-screen overflow-scroll ">
          <div className="bg-azulOscuro rounded-xl p-5 w-[90%] sm:w-[70%] lg:w-[60%] xl:w-[50%] text-white flex flex-col gap-4 overflow-auto 2xl:p-10 font-Montserrat ">
            <h1 className="text-xl text-center md:text-2xl 2xl:text-3xl font-bold">
              ¿Está seguro/a de eliminar esta pelicula?
            </h1>

            <div className="flex items-center justify-center w-full gap-5 2xl:gap-8">
              <button
                className="bg-azulClaro p-3 text-xl rounded-xl"
                onClick={() => setIsOpen(!isOpen)}
              >
                Volver atrás
              </button>

              <button className="bg-azulClaro p-3 text-xl rounded-xl">
                Eliminar
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default ModalEliminar;
