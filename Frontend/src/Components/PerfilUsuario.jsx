import Navbar from "./Navbar";
import Footer from "./Footer"
import { useSelector } from 'react-redux';
import { selectUser } from '../features/auth/authSlice'

export default function PerfilUsuario() {
  const user = useSelector(selectUser);

  return (
    <>
      <Navbar />
      <section className="flex flex-col justify-center items-start h-screen p-10 font-Montserrat text-3xl gap-8 w-full xl:items-center xl:mb-10">
        <h1 className="w-full xl:w-[75%] xl:text-left">Perfil</h1>

        <div className="bg-azulClaro p-5 w-full rounded-xl text-lg font-OpenSans flex flex-col gap-3 border-2 border-azulOscuro border-opacity-50 text-azulOscuro lg:w-[80%] lg:h-[50vh] lg:justify-center">
          <h2 className="font-bold text-xl">Datos:</h2>
          <p>{user.nombre}</p>
          <p>{user.email}</p>
        </div>

        <h2 className="w-full xl:w-[75%] xl:text-left">Reservaciones</h2>

        <div className="bg-azulClaro p-5 w-full rounded-xl text-lg font-OpenSans flex flex-col gap-3 border-2 border-azulOscuro border-opacity-50 text-azulOscuro lg:w-[80%] lg:h-[50vh] lg:justify-center">
          <h2 className="font-bold text-xl">Datos</h2>
          <div className="flex justify-between">
            <p>Fecha</p>
            <p>Precio</p>
          </div>
          <p>Ubicacion</p>
        </div>

      </section>
        <Footer/>
    </>
  );
}