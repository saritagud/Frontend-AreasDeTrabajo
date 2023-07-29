const paths = {
  LOGIN_PATH: '/login',
  REGISTER_PATH: '/register',
  PROFILE_PATH: '/profile',
  OFFICE_ROUTE_PATH: '/office',
  OFFICE_PATH: '/office/:id', // Ruta para los detalles de una oficina
  OFFICES_PATH: '/offices/1', // Ruta predeterminada para los nav
  OFFICES_ROUTE_PATH: '/offices', //Ruta para controlar el paginador
  OFFICES_PAG_PATH: '/offices/:pag', // Ruta para obtener la pág actual
  ADMIN_PATH: '/admin',
  ADMIN_OFFICES_PATH: `/admin/offices`,
  ADMIN_BOOKINGS_PATH: `/admin/bookings`,
  ADMIN_STATISTICS_PATH: `/admin/statistics`,
  ADMIN_USERS_PATH: `/admin/users`,
  DETAILS_PATH: '/details',
  ERROR404: '/error-404',
};

export default paths;