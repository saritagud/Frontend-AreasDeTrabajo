import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function Pagina404() {
  const { i18n, t } = useTranslation();

  return (
    <>
      <Navbar />
      <main className="grid place-items-center bg-fondo px-6 py-24 sm:py-32 lg:px-8 min-h-screen">
        <div className="text-center">
          <p className="text-5xl font-semibold text-verde">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-azulOscuro sm:text-5xl font-Montserrat">
            {t("error404")}
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600 font-OpenSans font-bold md:text-xl">
            {t("error404-2")}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to={"/"}
              className="rounded-md bg-azulOscuro  px-3.5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-azulClaro hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 md:text-xl "
            >
              {t("buttonBackStart")}
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default Pagina404;
