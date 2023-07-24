import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/auth/authSlice'
import { useLocation } from 'react-router-dom';
import paths from "../config/routePaths";

export default function ProtectedRoute({ component: Component, userComponent: UserComponent, adminComponent: AdminComponent }) {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const location = useLocation(); // Obtener la información de la ubicación actual
  const currentPath = location.pathname; // Acceder a la ruta actual

  useEffect(() => {
    // Si el usuario está logueado no se permite que entre al login o register
    if (user && (currentPath == paths.LOGIN_PATH || currentPath == paths.REGISTER_PATH)) return navigate(paths.OFFICES_PATH);
   
    // Si no es admin no permitir que entre al panel admin
    if (user && !user.admin && currentPath == paths.ADMIN_PATH) return navigate(paths.OFFICES_PATH);

    // Si el usuario no está logueado se redirige al login o register
    if (!user){
      if(currentPath == paths.REGISTER_PATH) return navigate(paths.REGISTER_PATH);
      return navigate(paths.LOGIN_PATH);
    } 
  }, []);

  return (
    <>
      {user ? (
        user.admin ? (AdminComponent ? <AdminComponent /> : <UserComponent />) : (UserComponent ? <UserComponent /> : <></>)
      ) : (
        Component ? <Component /> : <></>
      )}
    </>
  );
};