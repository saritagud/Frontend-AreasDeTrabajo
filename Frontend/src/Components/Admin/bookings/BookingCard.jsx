import React from 'react'
import ModalEliminar from '../ModalEliminar'

export default function BookingCard({ booking, handleDelete }) {
  const { _id, detalles, espacioId, usuarioId } = booking;
  return (
    <div className="bg-azulClaro  w-full p-4 rounded-xl text-azulOscuro font-OpenSans text-xl flex flex-col md:h-20 md:flex-row md:items-center md:justify-between">


      <h1 className='my-2 mx-2 font-bold'>{detalles}</h1>
      <p className="my-2 mx-2">{espacioId.titulo}</p>
      <p className="my-2 mx-2">{usuarioId.email}</p>

      <div className="flex items-center justify-center gap-3 mt-4 mx-2 md:mt-0">
        <ModalEliminar
          elementName="reservación"
          handleDelete={() => handleDelete(_id)}
        />
      </div>
    </div>
  )
}