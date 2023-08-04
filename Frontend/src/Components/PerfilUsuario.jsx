import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../features/auth/authSlice";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { getBookingsByUser } from "../api/bookingsApi";
import { getUserBookingsSuccess, selectUserBookings } from "../features/bookings/bookingsSlice";

export default function PerfilUsuario() {
  const user = useSelector(selectUser);
  const bookings = useSelector(selectUserBookings); // Usa el selector para obtener las reservas del usuario desde el estado de Redux
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Obtiene las reservas del usuario al montar el componente
    getBookingsByUser(user.id).then((res) => dispatch(getUserBookingsSuccess(res)));
  }, [dispatch, user.id]);

  return (
    <>
      <Navbar />
      <section className="flex flex-col justify-center items-start min-h-screen p-10 font-Montserrat text-3xl gap-8 w-full xl:items-center xl:mb-10 mt-20 mb-20"> {/* Ajusta la altura del contenedor principal */}
        <h1 className="w-full xl:w-[70%] xl:text-left ">{t("profile")}</h1>

        <div className="bg-azulClaro p-5 w-full rounded-xl text-lg font-OpenSans flex flex-col gap-3 border-2 border-azulOscuro border-opacity-50 text-azulOscuro lg:w-[80%] lg:h-[50vh] lg:justify-center 2xl:w-[70%]">
          <h2 className="font-bold text-xl">{t("data")}</h2>
          <p>{user.nombre}</p>
          <p>{user.email}</p>
          <p>{user.id}</p>
        </div>

        <h2 className="wp-full xl:w-[70%] xl:text-left">{t("reservation")}</h2>

        <div className="grid grid-cols-3 gap-4">

          {bookings.length > 0 ? bookings.map((booking) => (
            // iteramos sobre el arreglo de reservas y muestra la información que desees
            <div key={booking._id} className="bg-azulClaro p-4 rounded-lg shadow-md my-4 border-2 border-azulOscuro border-opacity-50 max-w-xs">
              <p className="text-right text-sm">{booking.precioTotal}</p>
              <img src={booking.espacioId.imagenReferencia} alt={booking.espacioId.titulo} className="w-full rounded-lg" />
              <h3 className="font-bold text-lg">{booking.espacioId.titulo}</h3>
              <p className="text-sm mt-2 font-bold">Ubicacion:</p> {/* Agrega un margin-top y la clase font-bold */}
              <p className="text-sm">{booking.espacioId.direccion}</p>
              <p className="text-sm font-bold">Fecha:</p> {/* Agrega la clase font-bold */}
              <p className="text-sm">{new Date(booking.fechaInicioYFinal.fechaInicio).toLocaleDateString()} - {new Date(booking.fechaInicioYFinal.fechaFin).toLocaleDateString()}</p> {/* Usa toLocaleDateString para formatear las fechas */}
              <p className="text-sm font-bold">Hora:</p> {/* Agrega la clase font-bold */}
              <p className="text-sm">{new Date(booking.horaInicioYFinal.horaInicio).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {new Date(booking.horaInicioYFinal.horaFin).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p> {/* Usa toLocaleTimeString para formatear las horas */}
            </div>
          )) :
            <div className="text-center text-2xl text-gray-600 italic">
              No hay reservaciones
            </div>
          }
        </div>
      </section>
      <Footer />
    </>
  );
}
