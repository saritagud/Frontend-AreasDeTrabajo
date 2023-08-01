import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BookingCard from './BookingCard';
import { useDispatch, useSelector } from "react-redux";
import {
  getBookingsRequest,
  getBookingsFailure,
  selectAllBookings,
  getAllBookingsSuccess,
  setCurrentPage,
  selectTotalPages,
  selectCurrentPage,
  selectIsLoadingBookings,
  deleteBookingRequest,
  deleteAllBookingSuccess,
  deleteBookingFailure
} from "../../../features/bookings/bookingsSlice";
import { getAllBookings, deleteBooking } from "../../../api/bookingsApi";
import Paginador from "../../Paginador";
import paths from "../../../config/routePaths";
import CenteredSpinner from "../../CenteredSpinner";
import HeaderAdmin from "../HeaderAdmin";
import AdminSideBar from "../Sidebar/AdminSidebar";
import Footer from "../../Footer";
import { toast } from "react-hot-toast";
import CustomToast, { typeToast } from "../../toast/CustomToast";

export default function BookingsPanel() {
  const { pag } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const bookings = useSelector(selectAllBookings);
  const totalPages = useSelector(selectTotalPages);
  const currentPage = useSelector(selectCurrentPage);
  const isLoadingBookings = useSelector(selectIsLoadingBookings);

  useEffect(() => {
    const getBookings = async () => {
      try {
        const responseData = await getAllBookings();
        dispatch(getAllBookingsSuccess(responseData.reservaciones));

        // Calcular totalPages y establecer currentPage después de obtener los datos
        const totalBookings = responseData.reservaciones.length;
        const calculatedTotalPages = Math.ceil(totalBookings / 6);
        const pagInt = parseInt(pag, 10); // Convertir pag a un número entero

        if (pag > 0 && pag <= calculatedTotalPages)
          dispatch(setCurrentPage(pagInt));
        else dispatch(setCurrentPage(0));
      } catch (error) {
        dispatch(getBookingsFailure(error));
      }
    };

    dispatch(getBookingsRequest());
    getBookings();
  }, []);

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  const handleDelete = async (id) => {
    try {
      dispatch(deleteBookingRequest());
      await deleteBooking(id);
      dispatch(deleteAllBookingSuccess(id));

      toast.custom(
        (t) => (
          <CustomToast
            message="¡Reservación eliminada con éxito!"
            type={typeToast.success}
          />
        ),
        {
          duration: 3000,
          position: "top-right",
        }
      );

      dispatch(setCurrentPage(1));
      navigate(paths.ADMIN_BOOKINGS_PATH);

    } catch (error) {
      toast.custom(
        (t) => (
          <CustomToast
            message="No se logró eliminar la reservación"
            type={typeToast.error}
          />
        ),
        {
          duration: 3000,
          position: "top-right",
        }
      );
      dispatch(deleteBookingFailure(error));
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
              <h1 className="font-Montserrat font-bold text-3xl mt-14">Reservaciones</h1>

              {isLoadingBookings ? (
                <CenteredSpinner />
              ) : (
                <>
                  {bookings.length === 0 ? (
                    <div className="text-center text-3xl text-gray-600 my-28 italic">
                      No se encontraron reservaciones disponibles en este momento.
                    </div>
                  ) : (
                    <div className="w-full flex flex-col justify-center items-center gap-5 lg:flex-row lg:flex-wrap">
                      {bookings.map((booking) => (
                        <BookingCard key={booking._id} booking={booking} handleDelete={handleDelete} />
                      ))}
                      <Paginador
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                        route={paths.ADMIN_BOOKINGS_ROUTE_PATH}
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
  )
}