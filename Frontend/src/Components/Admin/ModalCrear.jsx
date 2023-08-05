import { FaWindowClose } from "react-icons/fa";
import { useState } from "react";

export default function ModalCrear({ elementName }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className="bg-azulOscuro p-3 text-xl rounded-xl text-white font-Montserrat hover:bg-azulClaro 2xl:p-5"
        onClick={() => setIsOpen(true)}
      >
        Agregar {elementName}
      </button>

      {isOpen && (
        <form className="fixed flex justify-center items-start inset-0 backdrop-blur-sm bg-black bg-opacity-30  min-h-screen overflow-scroll">
          <section className="bg-azulOscuro rounded-xl p-5 w-[90%] sm:w-[70%] lg:w-[50%] xl:w-[40%] text-white flex flex-col items-center gap-4 m-8 overflow-auto font-OpenSans">
            <div className="flex justify-end mb-3 w-full ">
              <FaWindowClose
                className="text-2xl cursor-pointer md:text-3xl"
                onClick={() => setIsOpen(false)}
              />
            </div>
            <label className="w-full text-xl md:text-2xl 2xl:text-3xl">
              Imagen
            </label>
            <input
              className="w-full rounded-xl p-2 text-white text-lg md:text-xl 2xl:text-2xl"
              type="file"
              name="image"
            />

            <label className="w-full text-xl md:text-2xl 2xl:text-3xl">
              Titulo de la oficina
            </label>
            <input
              className="w-full rounded-xl p-2 text-black text-lg font-sans 2xl:text-2xl 2xl:p-4"
              type="text"
            />

            <label className="w-full text-xl md:text-2xl 2xl:text-3xl">
              Descripcion
            </label>
            <textarea
              className="w-full rounded-xl p-2 text-black text-lg font-sans 2xl:text-2xl 2xl:p-4"
              type="text"
            ></textarea>

            <label className="w-full text-xl md:text-2xl 2xl:text-3xl">
              Precio
            </label>
            <input
              className="w-full rounded-xl p-2 text-black text-lg font-sans 2xl:text-2xl 2xl:p-4"
              type="number"
            />

            <label className="w-full text-xl md:text-2xl 2xl:text-3xl">
              Ubicacion
            </label>
            <input
              className="w-full rounded-xl p-2 text-black text-lg font-sans 2xl:text-2xl 2xl:p-4"
              type="text"
            />

            <button className="bg-azulClaro p-3 text-xl rounded-xl m-8 md:text-2xl md:w-[40%] 2xl:text-3xl 2xl:p-5 dark:bg-white dark:text-black">
              Agregar
            </button>
          </section>
        </form>
      )}
    </>
  );
}