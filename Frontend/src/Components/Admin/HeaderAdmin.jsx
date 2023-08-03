import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../features/sidebar/sidebarSlice";
import { useTranslation } from "react-i18next";

export default function HeaderAdmin() {
  const dispatch = useDispatch();
  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  const { i18n, t } = useTranslation();

  return (
    <header className="shadow-lg flex items-center justify-between p-2 bg-azulOscuro">
      {/* Botón del menú hamburguesa (solo visible en pantallas pequeñas) */}
      <div className="lg:flex flex-1">
        <button
          onClick={handleToggleSidebar}
          className="lg:hidden rounded bg-azulOscuro text-white dark:text-white hover:text-gray-200 dark:hover:text-gray-200 focus:outline-none shadow-lg p-2"
        >
          <FaBars className="w-6 h-6" />
        </button>
      </div>

      <div className="font-Montserrat font-bold text-2xl text-center text-white flex items-center justify-center w-full mx-3">
        {t("adminPanel")}
      </div>

      <div className="flex items-end justify-end w-full mx-3">
        <NavLink to={"/"}>
          <img src="\src\assets\logo.png" alt="logo" className="h-20" />
        </NavLink>
      </div>
    </header>
  );
}
