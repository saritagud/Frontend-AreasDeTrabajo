import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

export default function SessionChecker() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tokenExpiration = useSelector((state) => state.auth.tokenExpiration);

  useEffect(() => {
    const checkSession = () => {
      const currentTime = Date.now();
      if (tokenExpiration && currentTime > tokenExpiration) {
        // El token ha expirado, cerrar la sesión y redirigir al usuario a la página de inicio de sesión
        dispatch(logout());
        navigate('/login');
      }
    };

    // Verificar el tiempo de expiración del token cada minuto
    const interval = setInterval(checkSession, 60000);

    return () => clearInterval(interval);
  }, [dispatch, navigate, tokenExpiration]);

  return null;
};