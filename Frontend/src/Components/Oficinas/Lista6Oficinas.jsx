import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOfficesRequest, getAllOfficesSuccess, getAllOfficesFailure, selectAllOffices } from '../../features/office/officeSlice';
import { getAllOffices } from '../../api/officeApi';
import CardOficina from './CardOficina';

const Lista6Oficinas = () => {
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
      {allOffices.slice(0, 6).map((office) => (
        <CardOficina
          key={office._id}
          imagenReferencia={office.imagenReferencia}
          titulo={office.titulo}
          direccion={office.direccion}
          precioDia={office.precioDia}
        />
      ))}
    </>
  );
};

export default Lista6Oficinas;
