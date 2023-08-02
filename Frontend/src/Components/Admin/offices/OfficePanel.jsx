import React from 'react'
import HeaderAdmin from '../HeaderAdmin'
import AdminSideBar from '../Sidebar/AdminSidebar'
import Footer from '../../Footer';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOfficeFailure, deleteOfficesRequest, deleteOfficesSuccess, getAllOfficesFailure, getAllOfficesRequest, getAllOfficesSuccess, selectCurrentPage, selectIsLoadingOffices, selectOffices, selectTotalPages, setCurrentPage } from '../../../features/office/officeSlice';
import { deleteOffice, getAllOffices } from '../../../api/officeApi';
import CenteredSpinner from '../../CenteredSpinner';
import Paginador from '../../Paginador';
import paths from '../../../config/routePaths';
import { useEffect } from 'react';
import ModalEliminar from '../ModalEliminar';
import ModalEditar from './ModalEditar';
import ModalCrear from './ModalCrear';
import { toast } from 'react-hot-toast';
import CustomToast, { typeToast } from "../../toast/CustomToast";

export default function OfficePanel() {
  const { pag } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const offices = useSelector(selectOffices);
  const totalPages = useSelector(selectTotalPages);
  const currentPage = useSelector(selectCurrentPage);
  const isLoadingOffices = useSelector(selectIsLoadingOffices);

  useEffect(() => {
    const getOffices = async () => {
      try {
        dispatch(getAllOfficesRequest());
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

    getOffices();
  }, []);

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  const handleDelete = async (id) => {
    try {
      dispatch(deleteOfficesRequest());
      await deleteOffice(id);
      dispatch(deleteOfficesSuccess(id));

      toast.custom(
        (t) => (
          <CustomToast
            message="¡Oficina eliminada con éxito!"
            type={typeToast.success}
          />
        ),
        {
          duration: 3000,
          position: "top-right",
        }
      );

      dispatch(setCurrentPage(1));
      navigate(paths.ADMIN_OFFICES_PATH);

    } catch (error) {
      toast.custom(
        (t) => (
          <CustomToast
            message="No se logró eliminar la Oficina"
            type={typeToast.error}
          />
        ),
        {
          duration: 3000,
          position: "top-right",
        }
      );
      dispatch(deleteOfficeFailure(error));
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <HeaderAdmin />

        <div className="flex flex-1">
          <AdminSideBar />

          {/* Contenido principal */}
          <div className="flex flex-col flex-1">
            <section className="flex flex-col px-10 m-0 items-center gap-8 min-h-screen">
              <h1 className="font-Montserrat font-bold text-3xl mt-14">Oficinas</h1>
              <div className="flex justify-end w-full">
                <ModalCrear />
              </div>

              {isLoadingOffices ? (
                <CenteredSpinner />
              ) : (
                <>
                  {offices.length === 0 ? (
                    <div className="text-center text-3xl text-gray-600 my-28 italic">
                      No se encontraron Oficinas disponibles en este momento.
                    </div>
                  ) : (
                    <div className="w-full flex flex-col justify-center items-center gap-5 lg:flex-row lg:flex-wrap">
                      {offices.map((office) => (
                        <div key={office._id} className="bg-azulClaro  w-full p-4 rounded-xl text-azulOscuro font-OpenSans text-xl flex justify-between items-center md:h-20">
                          <h1>{office.titulo}</h1>
                          <div className="flex gap-3">
                            <ModalEditar id={office._id} />
                            <ModalEliminar
                              elementName={"Oficina"}
                              handleDelete={() => handleDelete(office._id)}
                            />
                          </div>
                        </div>
                      ))}
                      <Paginador
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                        route={paths.ADMIN_OFFICES_ROUTE_PATH}
                      />
                    </div>
                  )}

                </>
              )}

            </section>
          </div>

        </div>
        <Footer />
      </div>
    </>
  )
}
