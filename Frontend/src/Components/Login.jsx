import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginRequest, loginSuccess, loginFailure } from '../features/auth/authSlice';
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { toast } from 'react-hot-toast';
import CustomToast, { typeToast } from './toast/CustomToast';
import { login } from '../api/usersApi';
import formValidation from '../validations/formValidation';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrors({ email: '', password: '' });
    dispatch(loginRequest());

    // Validación de campos del formulario
    const { email, password } = userData;

    const validateEmail = formValidation.validateText(email);
    const validatePassword = formValidation.validateText(password);

    // Asignar mensajes si los campos están vacíos
    if (!validateEmail) setErrors(prevErrors => ({ ...prevErrors, email: 'Por favor ingrese su correo electrónico.' }));
    if (!validatePassword) setErrors(prevErrors => ({ ...prevErrors, password: 'Por favor ingrese su contraseña.' }));

    const formIsValid = validateEmail && validatePassword;

    if (formIsValid) {
      try {
        // Enviar solicitud de inicio de sesión al backend
        const responseData = await login({ email, password });

        if (responseData.error) {
          toast.custom((t) => <CustomToast message={responseData.error} type={typeToast.error} />, {
            duration: 3000,
            position: 'top-right',
          });

        } else {
          // Si no hay error, se muestra el toast de éxito y actualiza el estado con la información del usuario
          const { token } = responseData;
          dispatch(loginSuccess(token));

          toast.custom((t) => <CustomToast message='¡Inicio de sesión exitoso!' type={typeToast.success} />, {
            duration: 3000,
            position: 'top-right',
          });
          navigate('/offices');
        }
      } catch (error) {
        // Manejo de error en caso de que falle la solicitud al servidor
        dispatch(loginFailure(error));
        toast.custom((t) => <CustomToast message='Error al iniciar sesión. Por favor, inténtelo de nuevo.' type={typeToast.error} />, {
          duration: 3000,
          position: 'top-right',
        });
      }
    }
  };

  return (
    <>
      <Navbar />
      <section className="h-screen bg-fondoLogin bg-bottom bg-no-repeat bg-contain flex flex-col justify-center items-center w-screen">
        <div className="bg-azulClaro bg-opacity-70 w-[80%] flex flex-col justify-center items-center h-[90vh] rounded-2xl gap-6 ">
          <h1 className="text-4xl font-Montserrat font-bold">Login</h1>
          <form className="flex flex-col justify-center items-center font-OpenSans gap-3 w-[80%] sm:w-[60%] sm:gap-5 md:w-[50%] lg:w-[40%] xl:w-[30%] ">

            <div>
              <label className="w-full text-xl md:text-2xl 2xl:text-3xl ">
                Correo
              </label>
              <input
                className={`w-full rounded-xl p-2 text-white bg-azulOscuro text-lg font-sans sm:p-3 2xl:text-2xl 2xl:p-4 ${errors.email ? 'border-red-500' : ''}`}
                name="email"
                type="email"
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>

            <div>
              <label className="w-full text-xl md:text-2xl 2xl:text-3xl ">
                Contraseña
              </label>
              <input
                className={`w-full rounded-xl p-2 text-white bg-azulOscuro text-lg font-sans sm:p-3 2xl:text-2xl 2xl:p-4 ${errors.password ? 'border-red-500' : ''}`}
                name="password"
                type="password"
                value={userData.password}
                onChange={(e) => setUserData({ ...userData, password: e.target.value })}
              />
              {errors.password && <p className="text-red-500">{errors.password}</p>}
            </div>

            <button onClick={handleLogin} className="bg-verde p-3 text-xl rounded-xl m-8 sm:p-4 sm:text-2xl md:mb-20 xl:mb-40 2xl:text-3xl 2xl:p-5 ur:p-6 bg-azulOscuro text-white">
              Ingresar
            </button>
            <div className="w-full text-center text-lg font-bold font-OpenSans">
              <p>¿No tienes una cuenta?</p>
              <Link to={"/register"} className="text-white">¡Registrate!</Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}