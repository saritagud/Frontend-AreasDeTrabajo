function Login() {
  return (
    <>
      <section className="h-screen  bg-fondoLogin bg-bottom bg-no-repeat bg-contain gap-6  flex flex-col justify-center items-center center">
        <h1 className="text-4xl font-Montserrat font-bold">Login</h1>
        <form className="flex flex-col justify-center items-center font-OpenSans gap-3 w-[80%] sm:w-[60%] sm:gap-5 md:w-[50%] lg:w-[40%] xl:w-[30%] ">
          <label className="w-full text-xl md:text-2xl 2xl:text-3xl ">
            Usuario
          </label>
          <input
            className="w-full  rounded-xl p-2 text-white bg-azulOscuro text-lg font-sans sm:p-3 2xl:text-2xl 2xl:p-4  "
            name="usuario"
            type="text"
          />

          <label className="w-full text-xl md:text-2xl 2xl:text-3xl ">
            Contraseña
          </label>
          <input
            className="w-full  rounded-xl p-2 text-white bg-azulOscuro text-lg font-sans sm:p-3 2xl:text-2xl 2xl:p-4  "
            name="contraseña"
            type="password"
          />

          <button className="bg-verde p-3 text-xl rounded-xl m-8 sm:p-4 sm:text-2xl md:mb-20 xl:mb-40 2xl:text-3xl 2xl:p-5 ur:p-6 bg-azulOscuro text-white">
            Ingresar
          </button>
        </form>
      </section>
    </>
  );
}

export default Login;
