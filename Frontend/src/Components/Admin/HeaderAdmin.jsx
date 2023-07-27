import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../../features/sidebar/sidebarSlice';

export default function HeaderAdmin() {
  const dispatch = useDispatch();
  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <header className="shadow-lg flex items-center justify-between p-5 bg-azulOscuro">

      {/* Botón del menú hamburguesa (solo visible en pantallas pequeñas) */}
      <div className="lg:flex flex-1">
        <button
          onClick={handleToggleSidebar}
          className="lg:hidden rounded bg-azulOscuro text-white dark:text-white hover:text-gray-200 dark:hover:text-gray-200 focus:outline-none shadow-lg p-2"
        >
          <FaBars className="w-6 h-6" />
        </button>
      </div>


      <div className="flex items-center">
        <NavLink to={"/"}>
          <img
            src=""
            alt="logo"
          // className="w-[40%] sm:w-[30%] md:w-[20%] xl:w-[15%]"
          />
        </NavLink>
      </div>
    </header>
  );
}