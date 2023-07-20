import NavBar from "../Navbar"
import Footer from "../Footer"

function DetallesOficina(){
    return(
        <>
        <NavBar/>
            <section className="flex flex-col justify-center items-start min-h-screen  bg-azulClaro m-10 rounded-3xl text-xl font-OpenSans p-5 gap-5 text-azulOscuro">
                <h1 className="w-full text-2xl text-center font-bold mt-10">Titulos</h1>
                <img src="\src\assets\oficina5.jpg" className="rounded-3xl"/>

                <div className="space-y-4 ">
                    <p className="font-bold">Precio de alquiler</p>
                    <p>Precio</p>

                    <p className="font-bold">Descripción</p>
                    <p>Descripcion</p>

                    <p className="font-bold">Disponibilidad</p>
                    <p>Disponibilidad</p>

                    <p className="font-bold">Ubicación</p>
                    {/* mapa */}
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default DetallesOficina