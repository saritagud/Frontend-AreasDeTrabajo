import ModalCrear from "./ModalCrear";
import ModalEditar from "./ModalEditar";
import ModalEliminar from "./ModalEliminar";
import Footer from "../Footer";
import HeaderAdmin from "./HeaderAdmin";
import Navbar from "../Navbar";

export default function PanelAdmin() {
  return (
    <>
      <Navbar />
      <HeaderAdmin />
      <section className="flex flex-col justify-center items-center h-screen gap-8 p-5">
        <img />
        <h1 className="font-Montserrat font-bold text-3xl">Panel de Administración</h1>
        <div className="flex justify-end w-full">
          <ModalCrear />
        </div>

        <div className="bg-azulClaro  w-full p-4 rounded-xl text-azulOscuro font-OpenSans text-xl flex justify-between">
          <h1>hola</h1>
          <div className="flex gap-3">
            <ModalEditar />
            <ModalEliminar />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}