import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
} from "../features/auth/authSlice";
import { register } from "../api/usersApi";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import paths from "../config/routePaths";
import formValidation from "../validations/formValidation";
import { toast } from "react-hot-toast";
import CustomToast, { typeToast } from "./toast/CustomToast";
import { useTranslation } from "react-i18next";
export default function Registro() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrors({ name: "", email: "", password: "", repeatPassword: "" });
    dispatch(loginRequest());

    // Validación de campos del formulario
    const { name: nombre, email, password, repeatPassword } = userData;

    const validateName = formValidation.validateText(nombre);
    const validateEmail = formValidation.validateEmail(email);
    const validatePassword = formValidation.validatePassword(password);
    const validatePasswords = formValidation.validatePasswords(
      password,
      repeatPassword
    );

    // Asignar mensajes si se llena mal el campo
    if (!validateName)
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Por favor ingrese su nombre.",
      }));
    if (!validateEmail)
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Por favor ingrese un correo electrónico válido.",
      }));
    if (!validatePassword)
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "incluir una mayúscula y un número. 6 caracteres min.",
      }));
    if (!validatePasswords)
      setErrors((prevErrors) => ({
        ...prevErrors,
        repeatPassword: "Las contraseñas no coinciden.",
      }));

    const formIsValid =
      validateName && validateEmail && validatePassword && validatePasswords;

    if (formIsValid) {
      try {
        const responseData = await register({ nombre, email, password });

        if (responseData.error) {
          // Si hay un error en la respuesta, muestra el mensaje de error en el toast
          toast.custom(
            (t) => (
              <CustomToast
                message={responseData.error}
                type={typeToast.error}
              />
            ),
            {
              duration: 3000,
              position: "top-right",
            }
          );
        } else {
          // Si no hay error, se muestra el toast de éxito y actualiza el estado con la información del usuario
          const { token } = responseData;
          dispatch(loginSuccess(token));

          toast.custom(
            (t) => (
              <CustomToast
                message="¡Registro completado con éxito!"
                type={typeToast.success}
              />
            ),
            {
              duration: 3000,
              position: "top-right",
            }
          );
          navigate(paths.OFFICES_PATH);
        }
      } catch (error) {
        dispatch(loginFailure(error));
        toast.error();
        toast.custom(
          (t) => (
            <CustomToast
              message="Error al hacer el registro. Por favor, inténtelo de nuevo."
              type={typeToast.error}
            />
          ),
          {
            duration: 3000,
            position: "top-right",
          }
        );
      }
    }
  };

  const { t, i18n } = useTranslation();

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-fondoLogin bg-bottom bg-no-repeat bg-contain gap-6 flex flex-col justify-center items-center center lg:bg-none lg:flex-row">
        <div className="bg-azulClaro bg-opacity-80 w-[80%] flex flex-col justify-center items-center min-h-screen rounded-2xl gap-6 m-20 sm:pt-20 sm:pb-20 sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[35%]">
          <h1 className="text-4xl font-Montserrat font-bold ">{t("register")}</h1>
          <form className="flex flex-col justify-center items-center font-OpenSans gap-5 w-[80%] sm:gap-8">
            <div className="w-full">
              <label className="w-full text-xl md:text-2xl 2xl:text-3xl ">
              {t("name")}
              </label>
              <input
                className={`w-full rounded-xl p-2 text-white bg-azulOscuro text-lg font-sans sm:p-3 2xl:text-2xl 2xl:p-4 ${
                  errors.name ? "border-red-500" : ""
                }`}
                name="name"
                type="text"
                value={userData.name}
                onChange={(e) => {
                  setUserData({ ...userData, name: e.target.value });
                }}
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>

            <div className="w-full">
              <label className="w-full text-xl md:text-2xl 2xl:text-3xl ">
              {t("email1")}
              </label>
              <input
                className={`w-full rounded-xl p-2 text-white bg-azulOscuro text-lg font-sans sm:p-3 2xl:text-2xl 2xl:p-4 ${
                  errors.email ? "border-red-500" : ""
                }`}
                name="email"
                type="email"
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>

            <div className="w-full">
              <label className="w-full text-xl md:text-2xl 2xl:text-3xl ">
              {t("password1")}
              </label>
              <input
                className={`w-full rounded-xl p-2 text-white bg-azulOscuro text-lg font-sans sm:p-3 2xl:text-2xl 2xl:p-4 ${
                  errors.password ? "border-red-500" : ""
                }`}
                name="password"
                type="password"
                value={userData.password}
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              />
              {errors.password && (
                <p className="text-red-500">{errors.password}</p>
              )}
            </div>

            <div className="w-full">
              <label className="w-full text-xl md:text-2xl 2xl:text-3xl ">
              {t("repeatPassword")}
              </label>
              <input
                className={`w-full rounded-xl p-2 text-white bg-azulOscuro text-lg font-sans sm:p-3 2xl:text-2xl 2xl:p-4 ${
                  errors.repeatPassword ? "border-red-500" : ""
                }`}
                name="repeat-password"
                type="password"
                value={userData.repeatPassword}
                onChange={(e) =>
                  setUserData({ ...userData, repeatPassword: e.target.value })
                }
              />
              {errors.repeatPassword && (
                <p className="text-red-500">{errors.repeatPassword}</p>
              )}
            </div>

            <button
              onClick={handleRegister}
              className="bg-verde p-3 text-xl rounded-xl sm:p-4 2xl:text-3xl 2xl:p-5 ur:p-6 bg-azulOscuro text-white"
            >
              {t("buttonRegister")}
            </button>

            <div className="w-full text-center text-lg font-bold font-OpenSans sm:text-xl">
              <p>{t("linkLogin1")}</p>
              <Link to={"/login"} className="text-white">
              {t("linkLogin2")}
              </Link>
            </div>
          </form>
        </div>
        <div className="hidden lg:block">
          <img src="/src/assets/fondoLogin.jpg" />
        </div>
      </section>
    </>
  );
}
