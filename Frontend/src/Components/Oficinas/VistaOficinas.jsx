import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOfficesRequest, getAllOfficesSuccess, getAllOfficesFailure, setCurrentPage, selectOffices, selectTotalPages, selectCurrentPage } from '../../features/office/officeSlice';
import { getAllOffices } from '../../api/officeApi';
import CardOficina from './CardOficina';
import Paginador from '../Paginador';
import NavBar from "../Navbar";
import Footer from "../Footer";
import paths from '../../config/routePaths';

function VistaOficinas() {
  const { pag } = useParams();
  const dispatch = useDispatch();
  const offices = useSelector(selectOffices);
  const totalPages = useSelector(selectTotalPages);
  const currentPage = useSelector(selectCurrentPage);
  const navigate = useNavigate();

  useEffect(() => {
    const getOffices = async () => {
      try {
        // Enviar solicitud de inicio de sesión al backend
        const responseData = await getAllOffices();
        console.log(responseData.espacioTrabajo);
        dispatch(getAllOfficesSuccess(responseData.espacioTrabajo));

        console.log(totalPages);
        dispatch(setCurrentPage(pag));
    
        dispatch(getAllOfficesSuccess(data.espacioTrabajo));

        // console.log(parseInt(pag));
        // console.log(totalPages);
        // const correctPag = pag > 0 && pag < totalPages;

        if (!correctPag) navigate(paths.ERROR404);
        // dispatch(setCurrentPage(pag));        
        // if (pag > totalPages) {
        //   navigate(paths.OFFICES_PATH);
        // }

      } catch (error) {
        dispatch(getAllOfficesFailure(error));
      }
    }
    dispatch(getAllOfficesRequest());
    getOffices();

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
