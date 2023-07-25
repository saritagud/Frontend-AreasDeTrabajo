import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOfficesRequest, getOfficesSuccess, getOfficesFailure, selectOffices } from '../../features/office/officeSlice';
import { getOffices } from '../../api/officeApi';


// Definimos nuestro CardOficina
const CardOficina = () => {
  // Usamos hooks de eedux para interactuar con la tienda de redux
  const dispatch = useDispatch();
  const offices = useSelector(selectOffices);

  // useEffect para obtener oficinas cuando el componente se monta o se actualiza
  useEffect(() => {
    const fetchOffices = async () => {
      dispatch(getOfficesRequest());
      try {
        const response = await getOffices();
        dispatch(getOfficesSuccess(response.espaciosTrabajo));
      } catch (error) {
        dispatch(getOfficesFailure(error));
      }
    };
    fetchOffices();
  }, [dispatch]);

  // Devuelve una sección por cada oficina
  return (
    <>
      {offices.map((espacio) => {
        const { titulo, direccion, precioDia, imagenReferencia } = espacio;
        return (
          <section
            className="h-[60vh] rounded-2xl mb-10 flex flex-col justify-end w-[80%] m-10"
            key={titulo}
            style={{ backgroundImage: `url(${imagenReferencia})` }}
          >
            <div className="w-full font-OpenSans text-left text-xl p-3 bg-azulClaro bg-opacity-40 mb-10 flex flex-col gap-2">
              <h1 className="font-bold">{titulo}</h1>
              <p>{direccion}</p>
              <p>{precioDia}</p>
            </div>
          </section>
        );
      })}
    </>
  );
};



export default CardOficina;

