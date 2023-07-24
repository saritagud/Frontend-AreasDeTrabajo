import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/auth/authSlice'
import { useLocation } from 'react-router-dom';

export default function ProtectedRoute({ component: Component, userComponent: UserComponent, adminComponent: AdminComponent }) {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const location = useLocation(); // Obtener la información de la ubicación actual
  const currentPath = location.pathname; // Acceder a la ruta actual

  useEffect(() => {
    // Si el usuario está logueado no se permite que entre al login o register
    if (user && (currentPath == '/login' || currentPath == '/register')) return navigate('/offices');

    // Si el usuario no está logueado se redirige al login
    if (!user) return navigate('/login');
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