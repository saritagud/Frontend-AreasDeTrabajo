import React from "react";
import {
  FiHome,
  FiCalendar,
  FiUsers,
  FiBarChart2,
  FiLogOut,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";
import paths from "../../../config/routePaths";
import CloseButton from "./CloseButton";
import { useDispatch } from "react-redux";
import { logout } from "../../../features/auth/authSlice";
import { useTranslation } from "react-i18next";
import ButtonLenguage from "/src/Components/ButtonLenguage.jsx";
export default function SideBar({ handleToggleSidebar }) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  const { t } = useTranslation();

  return (
    <aside
      className="shadow-lg top-0 left-0 z-40 w-64 h-full"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-200 dark:bg-gray-800">
        <div className="flex items-center justify-between mb-2">
          <h5 className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
            {t("menu")}
          </h5>
          {handleToggleSidebar && (
            <CloseButton handleClose={handleToggleSidebar} />
          )}
        </div>

        <ul className="space-y-2 font-medium">
          <li className="mb-2">
            <span className="text-xs text-gray-500 uppercase dark:text-gray-400">
              {t("sectionAdmin")}
            </span>
          </li>
          <li>
            <ButtonLenguage />
            <NavLink
              to={paths.ADMIN_OFFICES_PATH}
              onClick={handleToggleSidebar}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              activeClassName="bg-blue-500 dark:bg-blue-600"
            >
              <FiHome className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="flex-1 ml-3 whitespace-nowrap">
                {t("offices")}
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={paths.ADMIN_BOOKINGS_PATH}
              onClick={handleToggleSidebar}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              activeClassName="bg-blue-500 dark:bg-blue-600"
            >
              <FiCalendar className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="flex-1 ml-3 whitespace-nowrap">
                {t("reservation")}
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={paths.ADMIN_STATISTICS_PATH}
              onClick={handleToggleSidebar}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              activeClassName="bg-blue-500 dark:bg-blue-600"
            >
              <FiBarChart2 className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="flex-1 ml-3 whitespace-nowrap">
                {t("statistics")}
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to={paths.ADMIN_USERS_PATH}
              onClick={handleToggleSidebar}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              activeClassName="bg-blue-500 dark:bg-blue-600"
            >
              <FiUsers className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="flex-1 ml-3 whitespace-nowrap">
                {t("users")}
              </span>
            </NavLink>
          </li>

          {/* Sección 2 */}
          <li className="mt-5 mb-2">
            <span className="text-xs text-gray-500 uppercase dark:text-gray-400">
              {t("browse")}
            </span>
          </li>

          <li>
            <NavLink
              to="/"
              onClick={handleToggleSidebar}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              activeClassName="bg-blue-500 dark:bg-blue-600"
            >
              <FiHome className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="flex-1 ml-3 whitespace-nowrap">
                {t("start")}
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to={paths.PROFILE_PATH}
              onClick={handleToggleSidebar}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              activeClassName="bg-blue-500 dark:bg-blue-600"
            >
              <FiUsers className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="flex-1 ml-3 whitespace-nowrap">
                {t("profile")}
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to={paths.LOGIN_PATH}
              onClick={() => {
                handleToggleSidebar;
                handleLogout();
              }}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              activeClassName="bg-blue-500 dark:bg-blue-600"
            >
              <FiLogOut className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="flex-1 ml-3 whitespace-nowrap">
                {t("logout")}
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
}
