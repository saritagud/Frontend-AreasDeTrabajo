import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import paths from '../config/routePaths';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOfficesRequest, getAllOfficesSuccess, getAllOfficesFailure, selectAllOffices } from '../features/office/officeSlice';
import { getAllOffices } from '../api/officeApi';
import Carrusel from "./Oficinas/Carrusel";
import CardOficina from "./Oficinas/CardOficina";
import { FaArrowRight } from "react-icons/fa";
import NavBar from "./Navbar";
import Footer from "./Footer";
import CarruselPrincipal from "./CarruselPrincipal";

function Landing() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allOffices = useSelector(selectAllOffices);

  useEffect(() => {
    dispatch(getAllOfficesRequest());
    getAllOffices()
      .then((data) => {
        dispatch(getAllOfficesSuccess(data.espacioTrabajo));
      })
      .catch((error) => dispatch(getAllOfficesFailure(error)));
  }, []);

  return (
    <>
      <NavBar />
      <section className="flex justify-center items-center">
        <CarruselPrincipal />
      </section>
      <h1 className="font-Montserrat font-bold text-3xl text-center m-10">Prueba Nuestro Mapa Interactivo</h1>
      <section className="bg-mapa h-screen bg-no-repeat bg-cover bg-fixed flex flex-col justify-around items-center p-5">

        <div className="flex items-center gap-4 w-full">

          <img src="\src\assets\iconoOficina.jpg" className="rounded-full w-14" />
          <h1 className="bg-azulOscuro p-3 rounded-xl text-white font-Montserrat text-xl text-right ">Tu espacio de éxito, la oficina perfecta.</h1>
        </div>

        <div className="flex items-center gap-4 w-full">

          <h1 className="bg-azulOscuro p-3 rounded-xl text-white font-Montserrat text-xl text-right ">Transforma tu visión en realidad, en nuestra oficina ideal.</h1>
          <img src="\src\assets\iconoOficina.jpg" className="rounded-full w-14" />
        </div>

      </section>

      <section className="flex flex-col justify-start items-center w-full  bg-gris p-8 gap-10 mt-20">
        <h1 className="font-Montserrat font-bold text-3xl text-center">
          ¿Necesitas una oficina?
        </h1>
        <p className="font-OpenSans text-center text-lg">
          Nuestra empresa ofrece oficinas de alquiler flexibles diseñadas para
          satisfacer todas tus necesidades empresariales. ¡No pierdas más tiempo
          buscando, ven a experimentar el futuro del trabajo con nosotros hoy
          mismo!
        </p>

        <Carrusel />
      </section>

      <section className="flex flex-col justify-center items-center mt-20">
        <h1 className="font-Montserrat text-2xl font-bold">
          Encuentra mas oficinas
        </h1>

        {allOffices.slice(0, 6).map((office) => (
          <CardOficina
            key={office._id}
            imagenReferencia={office.imagenReferencia}
            titulo={office.titulo}
            direccion={office.direccion}
            precioDia={office.precioDia}
          />
        ))}

        <button
          className="bg-azulOscuro p-5 text-white font-Montserrat text-xl rounded-xl mb-10 flex justify-center items-center gap-3"
          onClick={() => navigate(paths.OFFICES_PATH)}>
          Ver mas
          <FaArrowRight />
        </button>
      </section>

      <section className="flex flex-col justify-center items-center bg-gris p-8 gap-10">
        <h1 className="font-Montserrat text-3xl font-bold text-center">
          ¿Por que buscar con nosotros?
        </h1>
        <p className="font-OpenSans text-center text-lg">
          Nuestra empresa ofrece una experiencia única, pensando en tu comodidad
          y productividad. Disfrutarás de la máxima flexibilidad en términos de
          duración de alquiler, sin preocupaciones por compromisos a largo
          plazo. Nuestras oficinas están completamente equipadas con una moderna
          infraestructura y todas las comodidades que necesitas para impulsar tu
          rendimiento.
        </p>

        <img src="src\assets\equipo.jpg" className="rounded-3xl" />
      </section>
      <Footer />
    </>
  );
}

export default Landing;
