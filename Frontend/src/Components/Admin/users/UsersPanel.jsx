import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import HeaderAdmin from "../HeaderAdmin";
import AdminSideBar from "../Sidebar/AdminSidebar";
import Footer from "../../Footer";
import UserCard from "./UserCard";
import Paginador from "../../Paginador";
import CenteredSpinner from "../../CenteredSpinner";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  usersRequest,
  selectIsLoadingUsers,
  getAllUsersSuccess,
  usersFailure,
  selectAllUsers,
  selectTotalPages,
  selectCurrentPage,
  setCurrentPage,
  deleteUserSuccess
} from "../../../features/user/userSlice";
import { getAllUsers, deleteUserById } from "../../../api/usersApi";
import { selectToken } from '../../../features/auth/authSlice';
import paths from "../../../config/routePaths";
import { toast } from "react-hot-toast";
import CustomToast, { typeToast } from "../../toast/CustomToast";

export default function UsersPanel() {
  const { pag } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(selectToken);

  const { t, i18n } = useTranslation();

  const users = useSelector(selectAllUsers);
  const totalPages = useSelector(selectTotalPages);
  const currentPage = useSelector(selectCurrentPage);
  const isLoadingUsers = useSelector(selectIsLoadingUsers);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const responseData = await getAllUsers();
        dispatch(getAllUsersSuccess(responseData));

        // Calcular totalPages y establecer currentPage después de obtener los datos
        const totalUsers = responseData.length;
        const calculatedTotalPages = Math.ceil(totalUsers / 6);
        const pagInt = parseInt(pag, 10); // Convertir pag a un número entero

        if (pag > 0 && pag <= calculatedTotalPages)
          dispatch(setCurrentPage(pagInt));
        else dispatch(setCurrentPage(0));
      } catch (error) {
        dispatch(usersFailure(error));
      }
    };

    dispatch(usersRequest());
    getUsers();
  }, []);

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  const handleDelete = async (id) => {
    try {
      dispatch(usersRequest());
      await deleteUserById(id, token);
      dispatch(deleteUserSuccess(id));

      toast.custom(
        (t) => (
          <CustomToast
            message="¡Usuario eliminada con éxito!"
            type={typeToast.success}
          />
        ),
        {
          duration: 3000,
          position: "top-right",
        }
      );

      dispatch(setCurrentPage(1));
      navigate(paths.ADMIN_USERS_PATH);
    } catch (error) {
      toast.custom(
        (t) => (
          <CustomToast
            message="No se logró eliminar el usuario."
            type={typeToast.error}
          />
        ),
        {
          duration: 3000,
          position: "top-right",
        }
      );
      dispatch(usersFailure(error));
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <HeaderAdmin />

        <div className="flex flex-1">
          <AdminSideBar />

          {/* Contenido principal */}
          <div className="flex flex-col flex-1">
            <section className="flex flex-col px-10 m-0 items-center gap-8 min-h-screen">
              <h1 className="font-Montserrat font-bold text-3xl mt-14">
                {t("users")}
              </h1>

              {isLoadingUsers ? (
                <CenteredSpinner />
              ) : (
                <>
                  {users.length === 0 ? (
                    <div className="text-center text-3xl text-gray-600 my-28 italic">
                      {t("reservationNotFound")}
                    </div>
                  ) : (
                    <div className="w-full flex flex-col justify-center items-center gap-5 lg:flex-row lg:flex-wrap">
                      {users.map((user) => (
                        <UserCard
                          key={user._id}
                          user={user}
                          handleDelete={handleDelete}
                        />
                      ))}
                      <Paginador
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                        route={paths.ADMIN_USERS_ROUTE_PATH}
                        setCurrentPage={setCurrentPage}
                      />
                    </div>
                  )}
                </>
              )}

            </section>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
