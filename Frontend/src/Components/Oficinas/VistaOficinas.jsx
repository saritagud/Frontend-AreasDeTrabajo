import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllOfficesRequest,
  getAllOfficesSuccess,
  getAllOfficesFailure,
  setCurrentPage,
  selectOffices,
  selectTotalPages,
  selectCurrentPage,
  selectIsLoadingOffices,
} from "../../features/office/officeSlice";
import { getAllOffices, getOfficesForMap } from "../../api/officeApi";
import CardOficina from "./CardOficina";
import Paginador from "../Paginador";
import NavBar from "../Navbar";
import Footer from "../Footer";
import CenteredSpinner from "../CenteredSpinner";
import paths from "../../config/routePaths";
import MapOfficeGlobal from "../Oficinas/MapOfficeGlobal";

export default function VistaOficinas() {
  const [mapOffices, setMapOffices] = useState([]);
  const { pag } = useParams();
  const dispatch = useDispatch();
  const offices = useSelector(selectOffices);
  const totalPages = useSelector(selectTotalPages);
  const currentPage = useSelector(selectCurrentPage);
  const isLoadingOffices = useSelector(selectIsLoadingOffices);

  useEffect(() => {
    const getOffices = async () => {
      try {
        // Enviar solicitud para taer las oficinas
        const responseData = await getAllOffices();
        dispatch(getAllOfficesSuccess(responseData.espacioTrabajo));

        // Calcular totalPages y establecer currentPage después de obtener los datos
        const totalOffices = responseData.espacioTrabajo.length;
        const calculatedTotalPages = Math.ceil(totalOffices / 6);
        const pagInt = parseInt(pag, 10); // Convertir pag a un número entero

        if (pag > 0 && pag <= calculatedTotalPages)
          dispatch(setCurrentPage(pagInt));
        else dispatch(setCurrentPage(0));
      } catch (error) {
        dispatch(getAllOfficesFailure(error));
      }
    };

    dispatch(getAllOfficesRequest());
    getOffices();
  }, []);

  useEffect(() => {
    getOfficesForMap().then(data => {
      setMapOffices(data.espaciosTrabajo);
      console.log(mapOffices); // Agregar este mensaje de depuración
    });
  }, []);

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };
  
  return (
    <>
      <NavBar />
      <section className="mt-12 flex flex-col justify-center items-center lg:space-y-10">
        <h1 className="font-Montserrat font-bold text-3xl ">
          Todas las oficinas
        </h1>
        {!isLoadingOffices && <MapOfficeGlobal offices={mapOffices} />}

        {isLoadingOffices ? (
          <>
            <CenteredSpinner />
          </>
        ) : (
          <>
            {offices.length === 0 ? (
              <div className="text-center text-3xl text-gray-600 my-28 italic">
                No se encontraron oficinas disponibles en este momento.
              </div>
            ) : (
              <div className="w-full flex flex-col justify-center items-center lg:flex-row lg:flex-wrap lg:gap-5">
                {offices.map((office) => (
                  <CardOficina
                    key={office._id}
                    id={office._id}
                    imagenReferencia={office.imagenReferencia}
                    titulo={office.titulo}
                    direccion={office.direccion}
                    precioDia={office.precioDia}
                  />
                ))}
              </div>
            )}
            <Paginador
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              route={paths.OFFICES_ROUTE_PATH}
            />
          </>
        )}
      </section>
      <Footer />
    </>
  );
}
