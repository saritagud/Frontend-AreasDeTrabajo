import NavBar from "../Navbar";
import Footer from "../Footer";
import ModalReservacion from "./ModalReservacion";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getOfficeDetails } from "../../api/officeApi";
import CenteredSpinner from "../CenteredSpinner";
import MapOffice from "./MapOffice";
import { useTranslation } from "react-i18next";

//Funcion para renderizar los detalles de una oficina
function DetallesOficina() {
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    getOfficeDetails(id)
      .then((data) => setDetails(data.espacioTrabajo))
      .catch((error) => setError(error));
  }, [id]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!details) {
    return <CenteredSpinner />;
  }
  
  return (
    <>
      <NavBar />
      <section className="flex flex-col justify-center items-center min-h-screen bg-azulClaro m-10 rounded-3xl text-xl font-OpenSans p-5 gap-5 text-azulOscuro sm:p-10 ">
        <div className="flex flex-col justify-center items-center w-full lg:flex-row lg:items-start lg:justify-start lg:gap-10">
          <div className="w-full  flex flex-col justify-center items-center gap-10 ">
            <h1 className="w-full text-2xl text-center font-bold mt-10 lg:mt-0">
              {details.titulo}
            </h1>
            <img
              src={details.imagenReferencia}
              className="rounded-3xl min-h-[50vh] object-cover sm:w-[80%] sm:h-[70vh]"
            />
          </div>

          <div className="space-y-4 ">
            <p className="font-bold">{t("priceOffice")}</p>
            <p>{details.precioDia}</p>

            <p className="font-bold">{t("description")}</p>
            <p>{details.descripcion}</p>

            <p className="font-bold">{t("direction")}</p>
            <p>{details.direccion}</p>

            <p className="font-bold">{t("capacity")}</p>
            <p>{details.capacidad}</p>

            <ModalReservacion />
          </div>
        </div>
        <p className="font-bold lg:w-full lg:text-left lg:mt-10">{t("ubication")}</p>
        <MapOffice
          lat={details.ubicacion.latitud}
          lng={details.ubicacion.longitud}
          titulo={details.titulo}
          descripcion={details.descripcion}
          imagenReferencia={details.imagenReferencia}
          direccion={details.direccion}
          precioDia={details.precioDia}
        />
      </section>
      <Footer />
    </>
  );
}

export default DetallesOficina;
