import { Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './app/store';
import SessionChecker from './components/SessionChecker';
import Landing from "./components/Landing";
import Login from "./components/Login"
import Registro from "./components/Registro";
import PerfilUsuario from "./components/PerfilUsuario";
import Panel from "./components/Admin/PanelAdmin"
import VistaOficinas from "./components/Oficinas/VistaOficinas";
import DetallesOficina from "./components/Oficinas/DetallesOficina";
import ProtectedRoute from "./auth/ProtectedRoute";
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <Provider store={store}>
      <div className="h-screen">
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/login" element={<ProtectedRoute component={Login} />} />
          <Route path="register" element={<ProtectedRoute component={Registro} />} />
          <Route path="/admin" element={<ProtectedRoute adminComponent={Panel} />} />
          <Route path="/profile" element={<ProtectedRoute userComponent={PerfilUsuario} />} />
          <Route path="/offices" element={<VistaOficinas />} />
          <Route path="/details" element={<DetallesOficina />} />
        </Routes>
      </div>
      <SessionChecker />
      <Toaster />
    </Provider>
  );
}