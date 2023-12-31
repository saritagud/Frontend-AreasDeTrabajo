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
import { useTranslation } from "react-i18next";
import SearchOffice from '../Oficinas/SearhOffice';

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
        // enviamos la solicitud para taer las oficinas
        const responseData = await getAllOffices();
        dispatch(getAllOfficesSuccess(responseData.espacioTrabajo));

        // calulamos totalPages y establecmos currentPage luego de obtener los datos
        const totalOffices = responseData.espacioTrabajo.length;
        const calculatedTotalPages = Math.ceil(totalOffices / 6);
        const pagInt = parseInt(pag, 10);

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
    getOfficesForMap().then((data) => {
      setMapOffices(data.espaciosTrabajo);
      console.log(mapOffices);
    });
  }, []);

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };
  const { t } = useTranslation();

  return (
    <>
      <NavBar />
      <section className="mt-12 flex flex-col justify-center items-center lg:space-y-10">
        <h1 className="font-Montserrat font-bold text-3xl ">
        {t("allOffices")}
        </h1>
        {!isLoadingOffices && <MapOfficeGlobal offices={mapOffices} />}
        <SearchOffice />
        {isLoadingOffices ? (
          <>
            <CenteredSpinner />
          </>
        ) : (
          <>
            {offices.length === 0 ? (
              <div className="text-center text-3xl text-gray-600 my-28 italic">
                {t("officesNotFound")}
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
