import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginRequest, loginSuccess, loginFailure } from '../features/auth/authSlice';
import { register } from '../api';
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { formsAuthValidations } from '../validations/formAuthValidations';

function Registro() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({ name: '', email: '', password: '', repeatPassword: '' });
  const [errors, setErrors] = useState({ name: '', email: '', password: '', repeatPassword: '' });

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrors({ name: '', email: '', password: '', repeatPassword: '' });
    dispatch(loginRequest());

    // Validación de campos del formulario
    let formIsValid = true;
    const { name: nombre, email, password, repeatPassword } = userData;

    if (!formsAuthValidations.validateText(nombre)) {
      setErrors(prevErrors => ({ ...prevErrors, nombre: 'Por favor ingrese su nombre.' }));
      formIsValid = false;
    }

    if (!formsAuthValidations.validateEmail(email)) {
      setErrors(prevErrors => ({ ...prevErrors, email: 'Por favor ingrese su correo electrónico.' }));
      formIsValid = false;
    }

    if (!formsAuthValidations.validatePassword(password)) {
      setErrors(prevErrors => ({ ...prevErrors, password: 'incluir una mayúscula y un número, 6 caracteres min.' }));
      formIsValid = false;
    }

    if (!formsAuthValidations.validatePasswords(password, repeatPassword)) {
      setErrors(prevErrors => ({ ...prevErrors, repeatPassword: 'Las contraseñas no coinciden.' }));
      formIsValid = false;
    }

    if (formIsValid) {
      try {
        const responseData = await register({ nombre, email, password });
        dispatch(loginSuccess(responseData));
      } catch (error) {
        dispatch(loginFailure(error));
      }
    }
  };

  return (
    <>
      <Navbar />
      <section className="h-screen bg-fondoLogin bg-bottom bg-no-repeat bg-contain gap-6 flex flex-col justify-center items-center center">
        <div className="bg-azulClaro bg-opacity-70 w-[80%] flex flex-col justify-center items-center h-[90vh] rounded-2xl gap-6">
          <h1 className="text-4xl font-Montserrat font-bold">Registro</h1>
          <form className="flex flex-col justify-center items-center font-OpenSans gap-3 w-[80%] sm:w-[60%] sm:gap-5 md:w-[50%] lg:w-[40%] xl:w-[30%]">
            <div className="mb-2 block">
              <label className="w-full text-xl md:text-2xl 2xl:text-3xl ">Nombre</label>
              <input
                className={`w-full rounded-xl p-2 text-white bg-azulOscuro text-lg font-sans sm:p-3 2xl:text-2xl 2xl:p-4 ${errors.name ? 'border-red-500' : ''}`}
                name="name"
                type="text"
                placeholder="Oscar Williams"
                value={userData.name}
                onChange={(e) => { setUserData({ ...userData, name: e.target.value }) }}
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>

            <div className="mb-2 block">
              <label className="w-full text-xl md:text-2xl 2xl:text-3xl ">Correo</label>
              <input
                className={`w-full rounded-xl p-2 text-white bg-azulOscuro text-lg font-sans sm:p-3 2xl:text-2xl 2xl:p-4 ${errors.email ? 'border-red-500' : ''}`}
                name="email"
                placeholder="ejemplo@ejemplo.com"
                type="email"
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>

            <div className="mb-2 block">
              <label className="w-full text-xl md:text-2xl 2xl:text-3xl ">Contraseña</label>
              <input
                className={`w-full rounded-xl p-2 text-white bg-azulOscuro text-lg font-sans sm:p-3 2xl:text-2xl 2xl:p-4 ${errors.password ? 'border-red-500' : ''}`}
                name="password"
                type="password"
                value={userData.password}
                onChange={(e) => setUserData({ ...userData, password: e.target.value })}
              />
              {errors.password && <p className="text-red-500">{errors.password}</p>}
            </div>

            <div className="mb-2 block">
              <label className="w-full text-xl md:text-2xl 2xl:text-3xl ">Repetir Contraseña</label>
              <input
                className={`w-full rounded-xl p-2 text-white bg-azulOscuro text-lg font-sans sm:p-3 2xl:text-2xl 2xl:p-4 ${errors.repeatPassword ? 'border-red-500' : ''}`}
                name="repeat-password"
                type="password"
                value={userData.repeatPassword}
                onChange={(e) => setUserData({ ...userData, repeatPassword: e.target.value })}
              />
              {errors.repeatPassword && <p className="text-red-500">{errors.repeatPassword}</p>}
            </div>


            <button onClick={handleRegister} className="bg-verde p-3 text-xl rounded-xl m-8 sm:p-4 sm:text-2xl md:mb-20 xl:mb-40 2xl:text-3xl 2xl:p-5 ur:p-6 bg-azulOscuro text-white">
              Registrarse
            </button>

            <div className="w-full text-center text-lg font-bold font-OpenSans">
              <p>¿Ya tienes una cuenta?</p>
              <Link to={"/login"} className="text-white">
                ¡Inicia Sesión!
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Registro;
