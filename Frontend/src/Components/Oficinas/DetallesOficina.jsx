import NavBar from "../Navbar";
import Footer from "../Footer";
import ModalReservacion from "./ModalReservacion";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getOfficeDetails } from '../../api/officeApi';
import CenteredSpinner from '../CenteredSpinner';
import MapOffice from './MapOffice';

function DetallesOficina() {
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);
  const [mapsLoaded, setMapsLoaded] = useState(false);
  
  const { id } = useParams();

  useEffect(() => {
    getOfficeDetails(id)
      .then((data) => setDetails(data.espacioTrabajo))
      .catch((error) => setError(error));
  }, [id]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik`;
    script.async = true;
    script.onload = () => setMapsLoaded(true);
    document.body.appendChild(script);
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!details) {
    return <CenteredSpinner />;
  }

  return (
    <>
      <NavBar />
      <section className="flex flex-col justify-center items-start min-h-screen bg-azulClaro m-10 rounded-3xl text-xl font-OpenSans p-5 gap-5 text-azulOscuro">
        <h1 className="w-full text-2xl text-center font-bold mt-10">{details.titulo}</h1>
        <img src={details.imagenReferencia} className="rounded-3xl" />

        <div className="space-y-4 ">
          <p className="font-bold">Precio de alquiler</p>
          <p>{details.precioDia}</p>

          <p className="font-bold">Descripción</p>
          <p>{details.descripcion}</p>

          <p className="font-bold">Dirección</p>
          <p>{details.direccion}</p>

          <p className="font-bold">Capacidad</p>
          <p>{details.capacidad}</p>

          <ModalReservacion />

          <p className="font-bold">Ubicación</p>
          {mapsLoaded ? (
            <MapOffice lat={details.ubicacion.latitud} lng={details.ubicacion.longitud} />
          ) : (
            <div>Loading map...</div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default DetallesOficina;
