import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, selectTokenExpiration, logout } from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom';
import paths from '../config/routePaths';
import { toast } from 'react-hot-toast';
import CustomToast, { typeToast } from './toast/CustomToast';

export default function SessionChecker() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(selectUser);
  const tokenExpiration = useSelector(selectTokenExpiration);

  useEffect(() => {
    const checkSession = () => {
      const currentTime = Date.now(); // Obtiener la marca de tiempo actual
      const tokenExpirationInMilliseconds = tokenExpiration * 1000; // Convertir a milisegundos
      const timeUntilExpiration = tokenExpirationInMilliseconds - currentTime; // Calcular la diferencia en milisegundos
      const minutesUntilExpiration = Math.ceil(timeUntilExpiration / 60000) - 18;

      if (user && tokenExpiration) {
        if (minutesUntilExpiration <= 0) {
          // El token ha expirado, se cierra la sesión y redirigir al usuario a la página de inicio de sesión
          dispatch(logout());
          navigate(paths.LOGIN_PATH);
          toast.custom((t) => <CustomToast message={'Tu sesión ha expirado.'} type={typeToast.error} />, {
            duration: 3000,
            position: 'top-right',
          });
        } else if (minutesUntilExpiration <= 5) {
          const stringMin = minutesUntilExpiration == 1 ? 'minuto' : 'minutos';
          toast.custom((t) => <CustomToast message={`Tu sesión expirará en ${minutesUntilExpiration} ${stringMin}.`} type={typeToast.warning} />, {
            duration: 3000,
            position: 'top-right',
          });
        }
      }

    };

    // Verificar el tiempo de expiración del token cada minuto
    const interval = setInterval(checkSession, 60000);
    return () => clearInterval(interval);

  }, [tokenExpiration]);

  return null;
};