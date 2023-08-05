import React from 'react'
import ModalEliminar from '../ModalEliminar'
import UserEditModal from './UserEditModal'

export default function UserCard({ user, handleDelete }) {
  const { _id, email, admin } = user;
  return (
    <div className="bg-azulClaro  w-full p-1 m-0 py-3 rounded-xl text-azulOscuro font-OpenSans text-xl flex flex-col md:h-20 md:flex-row md:items-center md:justify-between">

      <h1 className='my-2 mx-2 font-bold'>{email}</h1>
      {admin && <p className="my-2 mx-2">Admin</p>}


      <div className="flex items-center justify-center gap-3 mt-4 mx-2 md:mt-0">
        <UserEditModal
          user={user}
          elementName="usuario"
        />
        <ModalEliminar
          elementName="usuario"
          handleDelete={() => handleDelete(_id)}
        />
      </div>
    </div>
  )
}