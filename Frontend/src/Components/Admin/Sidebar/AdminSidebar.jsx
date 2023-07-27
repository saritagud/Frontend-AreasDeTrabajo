import { Transition } from "@headlessui/react";
import SideBar from './SideBar';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar, selectIsSidebarOpen } from '../../../features/sidebar/sidebarSlice';

export default function AdminSideBar() {
  const isSidebarOpen = useSelector(selectIsSidebarOpen);
  const dispatch = useDispatch();

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar())
  }

  return (
    <>
      {/* Barra lateral siempre presente */}
      <div className="hidden lg:block p-0 m-0 shadow-lg">
        <SideBar />
      </div>

      <Transition
        show={isSidebarOpen}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {/* Barra lateral para pantallas pequeñas */}
        <div className="lg:hidden fixed inset-0 z-50">
          <SideBar handleToggleSidebar={handleToggleSidebar} />
        </div>
      </Transition>
    </>
  );
}