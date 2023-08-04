import Navbar from "./Navbar";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { selectUser } from "../features/auth/authSlice";
import { useTranslation } from "react-i18next";

export default function PerfilUsuario() {
  const user = useSelector(selectUser);

  const { t, i18n } = useTranslation();

  return (
    <>
      <Navbar />
      <section className="flex flex-col justify-center items-start h-screen p-10 font-Montserrat text-3xl gap-8 w-full xl:items-center xl:mb-10">
        <h1 className="w-full xl:w-[70%] xl:text-left ">{t("profile")}</h1>

        <div className="bg-azulClaro p-5 w-full rounded-xl text-lg font-OpenSans flex flex-col gap-3 border-2 border-azulOscuro border-opacity-50 text-azulOscuro lg:w-[80%] lg:h-[50vh] lg:justify-center 2xl:w-[70%]">
          <h2 className="font-bold text-xl">{t("data")}</h2>
          <p>{user.nombre}</p>
          <p>{user.email}</p>
          <p>{user.id}</p>
        </div>

        <h2 className="wp-full xl:w-[70%] xl:text-left">{t("reservation")}</h2>

        <div className="bg-azulClaro p-5 w-full rounded-xl text-lg font-OpenSans flex flex-col gap-3 border-2 border-azulOscuro border-opacity-50 text-azulOscuro lg:w-[80%] lg:h-[50vh] lg:justify-center 2xl:w-[70%]">
          <h2 className="font-bold text-xl">Datos</h2>
          <div className="flex justify-between">
            <p>Fecha</p>
            <p>Precio</p>
          </div>
          <p>Ubicacion</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
