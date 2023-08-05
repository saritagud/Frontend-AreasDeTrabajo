import React from "react";

function StatisticsCard({ statistics }) {
  const {
    espaciosTrabajoMasReservado,
    espaciosTrabajoMejorRendimiento,
    espaciosTrabajoPeorRendimiento,
    ingresosTotales,
    totalEspaciosTrabajo,
    totalReservaciones,
  } = statistics;

  // Asegurarse de que las propiedades sean arreglos válidos antes de usar el método "map"
  const espaciosTrabajoMejorRendimientoArray = Array.isArray(
    espaciosTrabajoMejorRendimiento
  )
    ? espaciosTrabajoMejorRendimiento
    : [];
  const espaciosTrabajoPeorRendimientoArray = Array.isArray(
    espaciosTrabajoPeorRendimiento
  )
    ? espaciosTrabajoPeorRendimiento
    : [];
  const espaciosTrabajoMasReservadoArray = Array.isArray(
    espaciosTrabajoMasReservado
  )
    ? espaciosTrabajoMasReservado
    : [];

  return (
    <div className="flex flex-col justify-start min-h-screen gap-10 m-10">
      <div className="flex flex-col w-full gap-10 sm:flex-row">
        <div className="bg-blue-100 border-r-4 border-b-4 border-blue-200 w-full p-4 rounded-xl text-azulOscuro font-OpenSans text-xl flex flex-col items-start justify-center h-32 sm:w-[50%] gap-3">
          <h1 className="font-extralight">Ingresos totales:</h1>
          <h2 className="text-5xl font-extrabold sm:text-4xl ">
            {ingresosTotales}
          </h2>
        </div>

        <div className="bg-blue-100 border-r-4 border-b-4 border-blue-200 w-full p-4 rounded-xl text-azulOscuro font-OpenSans text-xl flex flex-col items-start justify-center h-32 sm:w-[50%] gap-3">
          <h1 className="font-extralight">Oficinas totales:</h1>
          <h2 className="text-5xl font-extrabold">{totalEspaciosTrabajo}</h2>
        </div>
      </div>

      <div className="bg-blue-100 border-r-4 border-b-4 border-blue-200 w-full p-5 rounded-xl text-azulOscuro font-OpenSans text-xl flex flex-col items-start justify-center min-h-min  gap-3">
        <h1 className="font-extralight">Reservaciones Totales:</h1>
        <h2 className="text-5xl font-extrabold">{totalReservaciones}</h2>
      </div>
      <div className="bg-blue-100 border-r-4 border-b-4 border-blue-200 w-full p-10 rounded-xl text-azulOscuro font-Montserrat text-xl flex flex-col items-center justify-center sm:text-2xl">
        <h1 className="font-medium  m-10 text-center  w-full">Oficinas con mejor rendimiento:</h1>

        <ul className="bg-blue-200 flex flex-col justify-start w-full rounded-xl p-10 gap-4 font-Montserrat font-semibold text-lg">
          {espaciosTrabajoMejorRendimientoArray.map(
            (espaciosTrabajoMejorRendimiento) => (
              <li
                key={espaciosTrabajoMejorRendimiento._id}
                className="list-disc"
              >
                <p>{espaciosTrabajoMejorRendimiento.titulo}</p>
              </li>
            )
          )}
        </ul>
      </div>

      <div className="bg-blue-100 border-r-4 border-b-4 border-blue-200 w-full p-10 rounded-xl text-azulOscuro font-Montserrat text-xl flex flex-col items-center justify-center sm:text-2xl">
        <h1 className="font-medium  m-10 text-center w-full">Oficinas con peor rendimiento:</h1>

        <ul className="bg-blue-200 flex flex-col justify-start w-full rounded-xl p-10 gap-4 font-Montserrat font-semibold text-lg">
          {espaciosTrabajoPeorRendimientoArray.map(
            (espaciosTrabajoPeorRendimientoss) => (
              <li
                key={espaciosTrabajoPeorRendimientoss._id}
                className="list-disc"
              >
                <p>{espaciosTrabajoPeorRendimientoss.titulo}</p>
              </li>
            )
          )}
        </ul>
      </div>

      <div className="bg-blue-100 border-r-4 border-b-4 border-blue-200 w-full p-10 rounded-xl text-azulOscuro font-Montserrat text-xl flex flex-col items-center justify-center min-h-min  sm:text-2xl">
        <h1 className="font-medium  m-10 w-full text-center">Oficinas mas reservadas:</h1>

        <ul className="bg-blue-200 flex flex-col justify-start w-full rounded-xl p-10 gap-4 font-Montserrat font-semibold text-lg">
          {espaciosTrabajoMasReservadoArray.map(
            (espaciosTrabajoMasReservado) => (
              <li key={espaciosTrabajoMasReservado._id} className="list-disc">
                <p>{espaciosTrabajoMasReservado.titulo}</p>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default StatisticsCard;
