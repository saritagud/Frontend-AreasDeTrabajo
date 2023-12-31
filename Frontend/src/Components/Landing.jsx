import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import paths from "../config/routePaths";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllOfficesRequest,
  getAllOfficesSuccess,
  getAllOfficesFailure,
  selectAllOffices,
} from "../features/office/officeSlice";
import { getAllOffices } from "../api/officeApi";
import Carrusel from "./Oficinas/Carrusel";
import CardOficina from "./Oficinas/CardOficina";
import { FaArrowRight } from "react-icons/fa";
import NavBar from "./Navbar";
import Footer from "./Footer";
import CarruselPrincipal from "./CarruselPrincipal";
import { useTranslation } from "react-i18next";
function Landing() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allOffices = useSelector(selectAllOffices);
  const { t, i18n } = useTranslation();

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
      <NavBar />
      <section className="flex justify-center items-center">
        <CarruselPrincipal />
      </section>
      <h1 className="font-Montserrat font-bold text-3xl text-center m-10 2xl:text-4xl">
        {t("title1")}
      </h1>
      <section className="bg-mapa h-screen bg-no-repeat bg-cover bg-fixed flex flex-col justify-around items-center p-5">
        <div className="flex items-center gap-4 w-full">
          <img
            src="\src\assets\iconoOficina.jpg"
            className="rounded-full w-14"
          />
          <h1 className="bg-azulOscuro p-3 rounded-xl text-white font-Montserrat text-xl text-right  xl:p-5">
            {t("subtitle1")}
          </h1>
        </div>

        <div className="flex justify-end items-center gap-4 w-full">
          <h1 className="bg-azulOscuro p-3 rounded-xl text-white font-Montserrat text-xl text-right sm:w-[70%] xl:w-[50%] xl:p-5 2xl:w-[40%]">
            {t("subtitle2")}
          </h1>
          <img
            src="\src\assets\iconoOficina.jpg"
            className="rounded-full w-14"
          />
        </div>
      </section>

      <section className="flex flex-col justify-start items-center w-full  bg-gris p-8 gap-10 mt-20 lg:flex-row lg:justify-center">
        <div className="w-full space-y-10 md:w-[50%]">
          <h1 className="font-Montserrat font-bold text-3xl text-center sm:mt-10 2xl:text-4xl">
            {t("title2")}
          </h1>
          <p className="font-OpenSans text-center text-lg sm:text-xl tracking-wide leading-loose h-full 2xl:text-2xl">
            {t("p1")}
          </p>
        </div>

        <Carrusel />
      </section>

      <section className="flex flex-col justify-center items-center mt-20 md:gap-10">
        <h1 className="font-Montserrat text-2xl font-bold sm:text-3xl 2xl:text-4xl">
          {t("title3")}
        </h1>
        <div className="w-full flex flex-col justify-center items-center lg:flex-row lg:flex-wrap lg:gap-5">
          {allOffices.slice(0, 6).map((office) => (
            <CardOficina
              key={office._id}
              id={office._id}
              imagenReferencia={office.imagenReferencia}
              titulo={office.titulo}
              direccion={office.direccion}
              precioDia={office.precioDia}
            />
          ))}
        </div>

        <button
          className="bg-azulOscuro p-5 text-white font-Montserrat text-xl rounded-xl mb-10 flex justify-center items-center gap-3"
          onClick={() => navigate(paths.OFFICES_PATH)}
        >
          {t("buttonAllOffices")}
          <FaArrowRight />
        </button>
      </section>

      <section className="flex flex-col justify-center items-center bg-gris p-8 gap-10 sm:p-14 lg:flex-row ">
        <div className="w-full space-y-10 md:w-[50%]">
          <h1 className="font-Montserrat text-3xl font-bold text-center 2xl:text-4xl">
            {t("title4")}
          </h1>
          <p className="font-OpenSans text-center text-lg sm:text-xl 2xl:text-2xl">
            {t("p2")}
          </p>
        </div>

        <img
          src="src\assets\equipo.jpg"
          className="rounded-3xl sm:h-[80vh] sm:w-[80%] md:w-[70%] lg:w-[50%] lg:h-[70vh] xl:w-[40%] 2xl:w-[30%]"
        />
      </section>
      <Footer />
    </>
  );
}

export default Landing;
