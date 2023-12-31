import { useState } from "react";
import { FaTrash } from "react-icons/fa";

function ModalEliminarReserva() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <FaTrash
        className="text-right text-2xl flex items-end justify-end cursor-pointer hover:text-verde 2xl:text-4xl"
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <section className="fixed flex justify-center items-center inset-0 backdrop-blur-sm bg-black bg-opacity-30 min-h-screen overflow-scroll ">
          <div className="bg-azulOscuro rounded-xl p-5 w-[90%] sm:w-[70%] lg:w-[60%] xl:w-[50%] text-white flex flex-col gap-4 overflow-auto 2xl:p-10 font-Montserrat ">
            <h1 className="text-[20px] sm:text-2xl text-center md:text-3xl 2xl:text-4xl font-bold">
              ¿Está seguro/a de eliminar esta reservacion?
            </h1>

            <div className="flex items-center justify-center w-full gap-5 2xl:gap-8">
              <button
                className="bg-azulClaro p-3 text-xl rounded-xl 2xl:text-2xl "
                onClick={() => setIsOpen(!isOpen)}
              >
                Volver atrás
              </button>

              <button className="bg-azulClaro p-3 text-xl rounded-xl 2xl:text-2xl ">
                Eliminar
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default ModalEliminarReserva;
