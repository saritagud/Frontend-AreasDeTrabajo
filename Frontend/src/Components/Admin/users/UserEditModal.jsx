import { useState } from "react";
import { FaWindowClose, FaPencilAlt } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { updateUserById } from "../../../api/usersApi";
import { usersRequest, usersFailure, updateUserSuccess } from "../../../features/user/userSlice";
import { selectToken } from '../../../features/auth/authSlice';
import { toast } from "react-hot-toast";
import CustomToast, { typeToast } from "../../toast/CustomToast";
import formValidation from "../../../validations/formValidation";

export default function UserEditModal({ user }) {
  const { _id, email } = user;
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState({
    email: email,
    password: "",
    repeatPassword: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  const handleUpdate = async (e) => {
    try {
      e.preventDefault();
      setErrors({ email: "", password: "", repeatPassword: "" });

      // Validación de campos del formulario
      const { email, password, repeatPassword } = userData;

      const validateEmail = formValidation.validateEmail(email);
      const validatePassword = formValidation.validatePassword(password);
      const validateTextPassword = formValidation.validateText(password);
      const validatePasswords = formValidation.validatePasswords(
        password,
        repeatPassword
      );

      // Asignar mensajes si se llena mal el campo
      if (!validateEmail)
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Por favor ingrese un correo electrónico válido.",
        }));
      if (!validatePassword && validateTextPassword)
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: "Incluir una mayúscula y un número. 6 caracteres min.",
        }));
      if (!validatePasswords)
        setErrors((prevErrors) => ({
          ...prevErrors,
          repeatPassword: "Las contraseñas no coinciden.",
        }));

      const formIsValid =
        validateEmail && (!validateTextPassword || (validatePassword && validatePasswords));

      if (formIsValid) {
        const newUserData = {
          email,
        };

        // Agregar la contraseña al objeto newUserData si es válida
        if (validateTextPassword) newUserData.password = password; 

        dispatch(usersRequest());
        const response = await updateUserById(_id, newUserData, token);

        toast.custom(
          (t) => (
            <CustomToast
              message="¡Usuario editado con éxito!"
              type={typeToast.success}
            />
          ),
          {
            duration: 3000,
            position: "top-right",
          }
        );

        dispatch(updateUserSuccess(response));
        setIsOpen(false); // Cerrar el modal después de la actualización exitosa
      }

    } catch (error) {
      toast.custom(
        (t) => (
          <CustomToast
            message="No se logró actualizar el usuario"
            type={typeToast.error}
          />
        ),
        {
          duration: 3000,
          position: "top-right",
        }
      );
      dispatch(usersFailure(error));
    }
  };

  return (
    <>
      <FaPencilAlt
        className="text-right text-2xl text-azulOscuro flex items-end justify-end cursor-pointer hover:text-white 2xl:text-3xl"
        onClick={() => setIsOpen(true)}
      />
      {isOpen && (
        <form className="fixed flex justify-center items-start inset-0 backdrop-blur-sm bg-black bg-opacity-30  min-h-screen overflow-scroll">
          <section className="bg-azulOscuro rounded-xl p-5 w-[90%] sm:w-[70%] lg:w-[50%] xl:w-[40%] text-white flex flex-col items-center gap-4 m-8 overflow-auto font-OpenSans dark:bg-verde2">
            <div className="flex justify-end mb-3 w-full ">
              <FaWindowClose
                className="text-2xl cursor-pointer md:text-3xl"
                onClick={() => setIsOpen(false)}
              />
            </div>

            <label className="w-full text-xl md:text-2xl 2xl:text-3xl">
              Correo
            </label>
            <input
              className="w-full rounded-xl p-2 text-black text-lg font-sans 2xl:text-2xl 2xl:p-4"
              type="text"
              value={userData.email}
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}

            <label className="w-full text-xl md:text-2xl 2xl:text-3xl">
              Nueva Contraseña
            </label>
            <input
              className="w-full rounded-xl p-2 text-black text-lg font-sans 2xl:text-2xl 2xl:p-4"
              type="password"
              placeholder="Dejar vacío si no actualizas"
              value={userData.password}
              onChange={(e) => setUserData({ ...userData, password: e.target.value })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}

            <label className="w-full text-xl md:text-2xl 2xl:text-3xl">
              Confirmar Contraseña
            </label>
            <input
              className="w-full rounded-xl p-2 text-black text-lg font-sans 2xl:text-2xl 2xl:p-4"
              type="password"
              value={userData.repeatPassword}
              onChange={(e) => setUserData({ ...userData, repeatPassword: e.target.value })}
            />
            {errors.repeatPassword && (
              <p className="text-red-500">{errors.repeatPassword}</p>
            )}

            <button
              className="bg-azulClaro p-3 text-xl rounded-xl m-8 md:text-2xl md:w-[40%] 2xl:text-3xl 2xl:p-5 dark:bg-white dark:text-black"
              onClick={handleUpdate}
            >
              Actualizar
            </button>
          </section>
        </form>
      )}
    </>
  );
}
