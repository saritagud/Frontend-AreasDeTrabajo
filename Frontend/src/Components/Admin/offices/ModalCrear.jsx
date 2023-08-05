import { FaWindowClose } from "react-icons/fa";
import { useState } from "react";
import MapGoogle from "./MapGoogle";
import { useDispatch, useSelector } from "react-redux";
import { addOffice, getAllOffices } from "../../../api/officeApi";
import { addOfficesFailure, addOfficesRequest, addOfficesSuccess, getAllOfficesSuccess, selectIsLoadingOffices } from "../../../features/office/officeSlice";
import { selectToken } from '../../../features/auth/authSlice';
import CenteredSpinner from "../../CenteredSpinner";
import { toast } from "react-hot-toast";
import CustomToast, { typeToast } from "../../toast/CustomToast";
import { useTranslation } from "react-i18next";
function ModalCrear() {
  const dispatch = useDispatch();
  const isLoadingOffices = useSelector(selectIsLoadingOffices);
  const token = useSelector(selectToken);

  const [state, setState] = useState({
    imagenReferencia: "",
    titulo: "",
    descripcion: "",
    precioDia: "",
    "ubicacion[latitud]": "",
    "ubicacion[longitud]": "",
    capacidad: "",
    direccion: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  const validacion = () => {
    let claves = Object.keys(state);
    for (let i = 0; i < claves.length; i++) {
      let clave = claves[i];
      if (state[clave].trim() === "") {
        return true;
      }
    }
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeImage = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const error = validacion();

      if (error) {
        alert("Ingresaste un campo inválido");
        toast.custom(
          (t) => (
            <CustomToast
              message="No se logró Agregar la Oficina"
              type={typeToast.error}
            />
          ),
          {
            duration: 3000,
            position: "top-right",
          }
        );
        return;
      }

      const data = e.currentTarget;
      const formData = new FormData(data);

      formData.append('ubicacion[latitud]', state['ubicacion[latitud]']);
      formData.append('ubicacion[longitud]', state['ubicacion[longitud]']);

      dispatch(addOfficesRequest());
      await addOffice(formData, token);
      const responseData = await getAllOffices()
      dispatch(getAllOfficesSuccess(responseData.espacioTrabajo));

      toast.custom(
        (t) => (
          <CustomToast
            message="¡Oficina Agregada con éxito!"
            type={typeToast.success}
          />
        ),
        {
          duration: 3000,
          position: "top-right",
        }
      );

      setState({
        imagenReferencia: "",
        titulo: "",
        descripcion: "",
        precioDia: "",
        "ubicacion[latitud]": "",
        "ubicacion[longitud]": "",
        capacidad: "",
        direccion: "",
      });
    } catch (error) {
      toast.custom(
        (t) => (
          <CustomToast
            message="No se logró Agregar la Oficina"
            type={typeToast.error}
          />
        ),
        {
          duration: 3000,
          position: "top-right",
        }
      );
      dispatch(addOfficesFailure(error));
    }
  };
  const { t, i18n } = useTranslation();
  return (
    <>
      <button
        className=" bg-azulOscuro p-3 text-xl rounded-xl m-5 text-white font-Montserrat hover:bg- md:text-2xl 2xl:text-3xl 2xl:p-5 "
        onClick={() => setIsOpen(true)}
      >
        {t("buttonAdd")}
      </button>

      {isOpen && (
        <form
          onSubmit={handleSubmit}
          className="fixed flex justify-center items-start inset-0 backdrop-blur-sm bg-black bg-opacity-30  min-h-screen overflow-scroll"
        >
          <section className="bg-azulOscuro rounded-xl p-5 w-[90%] sm:w-[70%] lg:w-[50%] xl:w-[40%] text-white flex flex-col items-center gap-4 m-8 overflow-auto font-OpenSans dark:bg-verde2">
            {isLoadingOffices ? (
              <CenteredSpinner />
            ) : (
              <>
                <div className="flex justify-end mb-3 w-full ">
                  <FaWindowClose
                    className="text-2xl cursor-pointer md:text-3xl"
                    onClick={() => setIsOpen(false)}
                  />
                </div>
                <label className="w-full text-xl md:text-2xl 2xl:text-3xl">
                  {t("image")}
                </label>
                <input
                  className="w-full rounded-xl p-2 text-white text-lg md:text-xl 2xl:text-2xl"
                  type="file"
                  name="imagenReferencia"
                  onChange={handleChangeImage}
                />

                <label className="w-full text-xl md:text-2xl 2xl:text-3xl">
                  {t("titleModal")}
                </label>
                <input
                  className="w-full rounded-xl p-2 text-black text-lg font-sans 2xl:text-2xl 2xl:p-4"
                  type="text"
                  name="titulo"
                  value={state.titulo}
                  onChange={handleChange}
                />

                <label className="w-full text-xl md:text-2xl 2xl:text-3xl">
                  {t("description")}
                </label>
                <textarea
                  className="w-full rounded-xl p-2 text-black text-lg font-sans 2xl:text-2xl 2xl:p-4"
                  type="text"
                  name="descripcion"
                  value={state.descripcion}
                  onChange={handleChange}
                ></textarea>

                <label className="w-full text-xl md:text-2xl 2xl:text-3xl">
                  {t("price")}
                </label>
                <input
                  className="w-full rounded-xl p-2 text-black text-lg font-sans 2xl:text-2xl 2xl:p-4"
                  type="number"
                  name="precioDia"
                  value={state.precioDia}
                  onChange={handleChange}
                />

                <label className="w-full text-xl md:text-2xl 2xl:text-3xl">
                  {t("capacity")}
                </label>
                <input
                  className="w-full rounded-xl p-2 text-black text-lg font-sans 2xl:text-2xl 2xl:p-4"
                  type="number"
                  name="capacidad"
                  value={state.capacidad}
                  onChange={handleChange}
                />

                <label className="w-full text-xl md:text-2xl 2xl:text-3xl">
                  {t("direction")}
                </label>
                <input
                  className="w-full rounded-xl p-2 text-black text-lg font-sans 2xl:text-2xl 2xl:p-4"
                  type="text"
                  name="direccion"
                  value={state.direccion}
                  onChange={handleChange}
                />

                <label className="w-full text-xl md:text-2xl 2xl:text-3xl">
                  {t("ubication")}
                </label>

                <input
                  className="w-full rounded-xl p-2 text-black text-lg font-sans 2xl:text-2xl 2xl:p-4"
                  type="number"
                  disabled
                  name="latitud"
                  value={state["ubicacion[latitud]"]}
                />
                <input
                  className="w-full rounded-xl p-2 text-black text-lg font-sans 2xl:text-2xl 2xl:p-4"
                  type="number"
                  disabled
                  name="longitud"
                  value={state["ubicacion[longitud]"]}
                />

                <MapGoogle state={state} setState={setState} ubicacion={false} />

                <button className="bg-azulClaro p-3 text-xl rounded-xl m-8 md:text-2xl md:w-[40%] 2xl:text-3xl 2xl:p-5 dark:bg-white dark:text-black">
                  {t("buttonAdd")}
                </button>
              </>
            )}
          </section>
        </form>
      )}
    </>
  );
}

export default ModalCrear;
