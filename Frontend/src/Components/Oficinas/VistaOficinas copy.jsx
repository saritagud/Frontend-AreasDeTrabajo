import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOfficesRequest, getAllOfficesSuccess, getAllOfficesFailure, setCurrentPage, selectOffices, selectTotalPages, selectCurrentPage } from '../../features/office/officeSlice';
import { getAllOffices } from '../../api/officeApi';
import CardOficina from './CardOficina';
import Paginador from '../Paginador';
import NavBar from "../Navbar";
import Footer from "../Footer";
import paths from '../../config/routePaths';

function VistaOficinas() {
  // const { pag } = useParams();
  const dispatch = useDispatch();
  const offices = useSelector(selectOffices);
  const totalPages = useSelector(selectTotalPages);
  const currentPage = useSelector(selectCurrentPage);


  useEffect(() => {
    dispatch(getAllOfficesRequest());

    getAllOffices()
      .then((data) => {
        dispatch(getAllOfficesSuccess(data.espacioTrabajo));
      })
      .catch((error) => dispatch(getAllOfficesFailure(error)));
  }, []);

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };
  return (
    <>
      <NavBar />
      <section className="flex flex-col justify-center items-center">
        <h1 className="font-Montserrat font-bold text-3xl">Todas las oficinas</h1>
        {/* mapa */}

        {offices.map((office) => (
          <CardOficina
            key={office._id}
            imagenReferencia={office.imagenReferencia}
            titulo={office.titulo}
            direccion={office.direccion}
            precioDia={office.precioDia}
          />
        ))}
        <Paginador currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} route={paths.OFFICES_ROUTE_PATH} />
      </section>
      <Footer />
    </>
  );
}

export default VistaOficinas;
