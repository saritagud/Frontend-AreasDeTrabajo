const paths = {
  LOGIN_PATH: '/login',
  REGISTER_PATH: '/register',
  ADMIN_PATH: '/admin',
  PROFILE_PATH: '/profile',
  OFFICE_PATH: '/office/:id', // Ruta para los detalles de una oficina
  OFFICES_PATH: '/offices/1', // Ruta predeterminada para los nav
  OFFICES_ROUTE_PATH: '/offices', //Ruta para controlar el paginador
  OFFICES_PAG_PATH: '/offices/:pag', // Ruta para obtener la pág actual
  DETAILS_PATH: '/details',
  ERROR404: '/error-404',
};

export default paths;