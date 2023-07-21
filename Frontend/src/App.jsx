import { Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing";
import Login from "./Components/Login"
import Registro from "./Components/Registro"
import PerfilUsuario from "./Components/PerfilUsuario";
import Panel from "./Components/Admin/PanelAdmin"
import VistaOficinas from "./Components/Oficinas/VistaOficinas";
import DetallesOficina from "./Components/Oficinas/DetallesOficina";
function App() {
  return (
    <div className="h-screen">
    <Routes>
      <Route index element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/administrador" element={<Panel />} />
      <Route path="/usuario" element={<PerfilUsuario />} />
      <Route path="/oficinas" element={<VistaOficinas />} />
      <Route path="/detalles" element={<DetallesOficina />} />
    </Routes>
      
    </div>
  );
}

export default App;
