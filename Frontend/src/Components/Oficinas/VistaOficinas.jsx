import CardOficina from "./CardOficina";
import NavBar from "../Navbar";
import Footer from "../Footer"

function VistaOficinas(){

    return(
        <>
        <NavBar/>
            <section className="flex flex-col justify-center items-center h-screen">
            <h1 className="font-Montserrat font-bold text-3xl">Todas las oficinas</h1>
            {/* mapa */}

                <CardOficina/>
            </section>
            <Footer/>
        </>
    )
}

export default VistaOficinas;