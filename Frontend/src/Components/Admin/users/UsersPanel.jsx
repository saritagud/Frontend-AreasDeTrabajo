import React from 'react'
import HeaderAdmin from '../HeaderAdmin'
import AdminSideBar from '../Sidebar/AdminSidebar'
import Footer from '../../Footer';

export default function UsersPanel() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <HeaderAdmin />

        <div className="flex flex-1">
          <AdminSideBar />

          {/* Contenido principal */}
          <div className="flex flex-col flex-1">
            <section className="flex flex-col px-10 m-0 items-center gap-8 min-h-screen">
              <h1 className="font-Montserrat font-bold text-3xl mt-14">Usuarios</h1>

              {/* Colocar las cards aquí */}
            </section>
          </div>

        </div>
        <Footer />
      </div>
    </>
  )
}
