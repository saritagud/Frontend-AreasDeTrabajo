import { FaWindowClose } from "react-icons/fa";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addReservation } from '../../api/bookingsApi';
import { addBookingRequest, addBookingSuccess, addBookingFailure } from '../../features/bookings/bookingsSlice';
import { selectUser } from '../../features/auth/authSlice';
import { setEspacioId, selectEspacioId } from '../../features/office/officeSlice';

function ModalReservacion() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = !!user;
  const [isOpen, setIsOpen] = useState(false);
  const espacioId = useSelector(selectEspacioId);
  const [reservationData, setReservationData] = useState({
    fechaInicio: '',
    fechaFin: '',
    horaInicio: '',
    horaFin: '',
    detalles: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReservationData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isLoggedIn) {
      alert('Debes iniciar sesión para realizar una reserva.');    
      return;
    }
    try {
      dispatch(addBookingRequest());
      const response = await addReservation(espacioId, user.id, reservationData);
      if (response.error) {
        // manejar error
        alert('Ocurrió un error al agregar la reserva. Por favor intenta de nuevo.');
        dispatch(addBookingFailure(response.error));
      } else {
        // manejar éxito
        alert('La reserva fue agregada con éxito.');
        setIsOpen(false);
        dispatch(addBookingSuccess(response));
      }
    } catch (error) {
      // manejar error
      alert('Ocurrió un error al agregar la reserva. Por favor intenta de nuevo.');
      dispatch(addBookingFailure(error));
    }
  }
  
  return (
    <>
      <button
        className=" bg-azulOscuro p-3 text-xl rounded-xl mt-10 text-white font-Montserrat hover:bg-azulOscuro/60 md:text-2xl 2xl:text-3xl 2xl:p-5 "
        onClick={() => setIsOpen(true)}
      >
        Reserva ya!
      </button>

      {isOpen && (
        <form onSubmit={handleSubmit} className="fixed flex justify-center items-start inset-0 backdrop-blur-sm   bg-opacity-30 min-h-screen overflow-scroll ">
          <section className="bg-azulOscuro rounded-xl p-5 w-[90%] sm:w-[70%] lg:w-[50%] xl:w-[40%] flex flex-col items-center gap-4 justify-center font-OpenSans m-8 overflow-auto text-white">
            <div className="flex justify-end mb-3 w-full ">
              <FaWindowClose
                className="text-2xl cursor-pointer md:text-3xl"
                onClick={() => setIsOpen(false)}
              />
            </div>
            <label className="w-full text-xl md:text-2xl 2xl:text-3xl">
              Fecha del inicio reserva
            </label>
            <input type="date" name="fechaInicio" onChange={handleInputChange} className="w-full rounded-xl text-black"/>

            <label className="w-full text-xl md:text-2xl 2xl:text-3xl">
              Fecha del fin de la reserva
            </label>
            <input type="date" name="fechaFin" onChange={handleInputChange} className="w-full rounded-xl text-black"/>

            <label className="w-full text-xl md:text-2xl 2xl:text-3xl">
              Hora del inicio reserva
            </label>
            <input type="time" name="horaInicio" onChange={handleInputChange} className="w-full rounded-xl text-black"/>

            <label className="w-full text-xl md:text-2xl 2xl:text-3xl">
              Hora del fin de la reserva
            </label>
            <input type="time" name="horaFin" onChange={handleInputChange} className="w-full rounded-xl text-black"/>

            <label className="w-full text-xl md:text-2xl 2xl:text-3xl">
              Detalles de la reserva
            </label>
            <textarea name="detalles" onChange={handleInputChange} className="w-full rounded-xl text-black"></textarea>

            <button type="submit" className="bg-azulOscuro p-3 text-xl rounded-xl mt-10 text-white font-Montserrat hover:bg-azulOscuro/60 md:text-2xl 2xl:text-3xl 2xl:p-5 ">
              Reservar
            </button>
          </section>
        </form>
      )}
    </>
  );
}

export default ModalReservacion;
