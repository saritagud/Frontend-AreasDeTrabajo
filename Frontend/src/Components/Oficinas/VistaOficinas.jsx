import CardOficina from "./CardOficina";

function VistaOficinas(){

    return(
        <>
            <section className="flex flex-col justify-center items-center h-screen">
            <h1 className="font-Montserrat font-bold text-3xl">Todas las oficinas</h1>
            {/* mapa */}

                <CardOficina/>
            </section>
        </>
    )
}

export default VistaOficinas;