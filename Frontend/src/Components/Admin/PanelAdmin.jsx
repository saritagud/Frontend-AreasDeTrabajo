import ModalCrear from "./ModalCrear";
import ModalEditar from "./ModalEditar";
import ModalEliminar from "./ModalEliminar";
import HeaderAdmin from './HeaderAdmin';
import AdminSideBar from "./Sidebar/AdminSidebar";
import Footer from "../Footer";

export default function PanelAdmin() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderAdmin />

      <div className="flex flex-1">
        <AdminSideBar />

        {/* Contenido principal */}
        <div className="flex flex-col flex-1 p-5 m-2">
          <section className="flex flex-col justify-center items-center gap-8 min-h-screen">
            <h1 className="font-Montserrat font-bold text-3xl">Panel de Administración</h1>
            <div className="flex justify-end w-full">
              <ModalCrear />
            </div>

            <div className="bg-azulClaro  w-full p-4 rounded-xl text-azulOscuro font-OpenSans text-xl flex justify-between items-center md:h-20">
              <h1>Oficina</h1>
              <div className="flex gap-3">
                <ModalEditar />
                <ModalEliminar />
              </div>
            </div>
          </section>
        </div>

      </div>
      <Footer />
    </div>
  );
}