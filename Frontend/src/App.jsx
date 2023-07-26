import { Route, Routes, Navigate } from "react-router-dom";
import paths from "./config/routePaths";
import { Provider } from 'react-redux';
import store from './app/store';
import SessionChecker from "./auth/SessionChecker";
import ProtectedRoute from "./auth/ProtectedRoute";
import Landing from "./components/Landing";
import Login from "./components/Login"
import Registro from "./components/Registro";
import PerfilUsuario from "./components/PerfilUsuario";
import Panel from "./components/Admin/PanelAdmin"
import VistaOficinas from "./components/Oficinas/VistaOficinas";
import DetallesOficina from "./components/Oficinas/DetallesOficina";
import Pagina404 from "./Components/Pagina404";
import { Toaster } from 'react-hot-toast';
import ScrollToTop from "./Components/ScrollToTop";

export default function App() {
  return (
    <Provider store={store}>
      <div className="h-screen">
        <Routes>
          <Route index element={<Landing />} />
          <Route path={paths.LOGIN_PATH} element={<ProtectedRoute component={Login} />} />
          <Route path={paths.REGISTER_PATH} element={<ProtectedRoute component={Registro} />} />
          <Route path={paths.ADMIN_PATH} element={<ProtectedRoute adminComponent={Panel} />} />
          <Route path={paths.PROFILE_PATH} element={<ProtectedRoute userComponent={PerfilUsuario} />} />
          <Route path={paths.OFFICES_PAG_PATH} element={<VistaOficinas />} />
          <Route path={paths.DETAILS_PATH} element={<DetallesOficina />} />
          <Route path={paths.ERROR404} element={<Pagina404 />} />
          <Route path="*" element={<Navigate to={paths.ERROR404} />} />
        </Routes>
      </div>
      <ScrollToTop />
      <SessionChecker />
      <Toaster />
    </Provider>
  );
}