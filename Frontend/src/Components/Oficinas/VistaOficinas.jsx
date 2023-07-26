import CardOficina from "./CardOficina";
import NavBar from "../Navbar";
import Footer from "../Footer";
import Paginador from "../Paginador";
import ListaOficinas from "../Oficinas/ListaOficinas";

function VistaOficinas() {
  return (
    <>
      <NavBar />
      <section className="flex flex-col justify-center items-center">
        <h1 className="font-Montserrat font-bold text-3xl">Todas las oficinas</h1>
        {/* mapa */}
        <ListaOficinas />      
      </section>
      <Footer />
    </>
  );
}

export default VistaOficinas;
