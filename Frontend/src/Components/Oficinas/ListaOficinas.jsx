import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOfficesRequest, getAllOfficesSuccess, getAllOfficesFailure, setCurrentPage, selectOffices, selectTotalPages, selectCurrentPage } from '../../features/office/officeSlice';
import { getAllOffices } from '../../api/officeApi';
import CardOficina from './CardOficina';
import Paginador from '../Paginador';

const ListaOficinas = () => {
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
      {offices.map((office) => (
        <CardOficina
          key={office._id}
          imagenReferencia={office.imagenReferencia}
          titulo={office.titulo}
          direccion={office.direccion}
          precioDia={office.precioDia}
        />
      ))}
      <Paginador currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </>
  );
};

export default ListaOficinas;
