import { useState } from "react";
import { FaBars, FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";

function HeaderAdmin() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className=" flex justify-between items-center p-5 bg-azulOscuro">
        <nav>
          <FaBars
            onClick={() => setIsOpen(true)}
            className="text-2xl text-white cursor-pointer"
          />
        </nav>
      </header>

      {isOpen && (
        <div className="fixed inset-y-0 left-0 z-50 bg-gray-800 w-64 px-8 py-4 transition-transform duration-300 transform translate-x-0 md:translate-x-[-16rem]">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            <FaWindowClose />
          </button>

          <ul className="space-y-4 mt-10 font-Montserrat text-lg">
            <li>
              <Link to={""} className="text-white block hover:bg-white hover:text-black  hover:rounded-md w-full p-2" href="#home">
                Oficinas
              </Link>
            </li>
            <li>
              <Link to={""} className="text-white block hover:bg-white hover:text-black  hover:rounded-md w-full p-2" href="#about">
                Reservaciones
              </Link>
            </li>
            <li>
              <Link to={""}
                className="text-white block hover:bg-white hover:text-black  hover:rounded-md w-full p-2"
                href="#services"
              >
                Estadisticas
              </Link>
            </li>
            <li>
              <Link to={"/"}
                className="text-white block hover:bg-white hover:text-black  hover:rounded-md w-full p-2"
                href="#contact"
              >
                Inicio
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
export default HeaderAdmin;
