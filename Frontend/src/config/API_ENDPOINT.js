// Configurar la ruta con el puerto de la API
const PORT =  import.meta.env.VITE_PORT || 3000;
const API_ENDPOINT = `http://localhost:${PORT}`;
export default API_ENDPOINT;