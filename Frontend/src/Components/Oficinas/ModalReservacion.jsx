import { FaWindowClose } from "react-icons/fa";
import { useState } from "react";

function ModalReservacion() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className=" bg-azulOscuro p-3 text-xl rounded-xl mt-10 text-white font-Montserrat hover:bg-azulOscuro/60 md:text-2xl 2xl:text-3xl 2xl:p-5 "
        onClick={() => setIsOpen(true)}
      >
        Reserva ya!
      </button>

      {isOpen && (
        <form className="fixed flex justify-center items-center inset-0 backdrop-blur-sm   bg-opacity-30  min-h-screen">
          <section className="bg-azulOscuro rounded-xl p-5 w-[90%] sm:w-[70%] lg:w-[50%] xl:w-[40%] text-white flex flex-col items-center gap-4 justify-center font-OpenSans dark:bg-verde2">
            <div className="flex justify-end mb-3 w-full ">
              <FaWindowClose
                className="text-2xl cursor-pointer md:text-3xl"
                onClick={() => setIsOpen(false)}
              />
            </div>
            <label className="w-full text-xl md:text-2xl 2xl:text-3xl">
              Fecha del inicio reserva
            </label>
            <input type="date" className="w-full rounded-xl"/>

            <label className="w-full text-xl md:text-2xl 2xl:text-3xl">
              Fecha del fin de la reserva
            </label>
            <input type="date" className="w-full rounded-xl"/>

            <button className="bg-azulClaro p-3 text-xl rounded-xl m-8 md:text-2xl md:w-[40%] 2xl:text-3xl 2xl:p-5 dark:bg-white dark:text-black">
              Reservar
            </button>
          </section>
        </form>
      )}
    </>
  );
}

export default ModalReservacion;
