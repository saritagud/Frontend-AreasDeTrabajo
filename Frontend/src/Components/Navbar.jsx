import { useState } from "react";
import { Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-verde">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end w-full h-20 lg:h-24">
            <div className="flex items-center justify-between w-full">
              <img
                src=""
                alt="logo"
                className="w-[40%] sm:w-[30%] md:w-[20%] xl:w-[15%]"
              />
              <div className="hidden lg:block w-full">
                <div className=" flex justify-end items-end w-full ">
                  <NavLink
                    to={"/login"}
                    className="text-azulOscuro   hover:bg-azulOscuro hover:text-white hover:rounded-md hover:transition-all block px-3 py-2 text-lg rounded-md font-Marcellus  text-center xl:text-lg "
                  >
                    Iniciar sesión
                  </NavLink>

                  <NavLink
                    to={"/register"}
                    className="text-azulOscuro   hover:bg-azulOscuro hover:text-white hover:rounded-md hover:transition-all block px-3 py-2 text-lg rounded-md font-Marcellus  text-center  "
                  >
                    Registro
                  </NavLink>

                  <NavLink
                    to={"/admin"}
                    className="text-azulOscuro   hover:bg-azulOscuro hover:text-white hover:rounded-md hover:transition-all block px-3 py-2 text-lg rounded-md font-Marcellus  text-center "
                  >
                    Administrador
                  </NavLink>

                  <NavLink
                    to={"/login"}
                    className="text-white hover:bg-white hover:text-azulOscuro block px-3 py-2  text-lg rounded-md font-Marcellus  text-left transition-all duration-500"
                  >
                    Cerrar Sesión
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-white inline-flex items-center justify-center p-2 rounded-md  "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {!isOpen ? (
                  <svg
                    className="block h-15 w-10 fill-black "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#2A3E59"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#2A3E59"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="lg:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-2 sm:px-3 ">
                <NavLink
                  to={"/offices"}
                  className="text-azulOscuro   hover:bg-azulOscuro hover:text-white hover:rounded-md hover:transition-all block px-3 py-2 text-lg rounded-md font-OpenSans w-full text-left"
                >
                  Oficinas
                </NavLink>

                <NavLink
                  to={"/login"}
                  className="text-azulOscuro   hover:bg-azulOscuro hover:text-white hover:rounded-md hover:transition-all block px-3 py-2 text-lg rounded-md font-OpenSans w-full text-left"
                >
                  Iniciar sesión
                </NavLink>

                <NavLink
                  to={"/register"}
                  className="text-azulOscuro   hover:bg-azulOscuro hover:text-white hover:rounded-md hover:transition-all block px-3 py-2 text-lg rounded-md font-OpenSans w-full text-left"
                >
                  Registro
                </NavLink>

                <NavLink
                  to={"/admin"}
                  className="text-azulOscuro   hover:bg-azulOscuro hover:text-white hover:rounded-md hover:transition-all block px-3 py-2 text-lg rounded-md font-OpenSans w-full text-left"
                >
                  Administrador
                </NavLink>

                <NavLink
                  to={"/login"}
                  className="text-azulOscuro   hover:bg-azulOscuro hover:text-white hover:rounded-md hover:transition-all block px-3 py-2  text-lg rounded-md font-Marcellus w-full text-left transition-all duration-500"
                >
                  Cerrar Sesión
                </NavLink>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;
