const paths = {
  LOGIN_PATH: "/login",
  REGISTER_PATH: "/register",
  PROFILE_PATH: "/profile",

  OFFICE_ROUTE_PATH: "/office",
  OFFICE_PATH: "/office/:id", // Ruta para los detalles de una oficina
  
  OFFICES_PATH: "/offices/1", // Ruta predeterminada para los nav
  OFFICES_ROUTE_PATH: "/offices", //Ruta para controlar el paginador
  OFFICES_PAG_PATH: "/offices/:pag", // Ruta para obtener la pág actual
  
  ADMIN_PATH: "/admin",
  
  ADMIN_OFFICES_PATH: "/admin/offices/1",
  ADMIN_OFFICES_ROUTE_PATH: "/admin/offices",
  ADMIN_OFFICES_PAG_PATH: "/admin/offices/:pag",

  ADMIN_BOOKINGS_PATH: "/admin/bookings/1",
  ADMIN_BOOKINGS_ROUTE_PATH: "/admin/bookings",
  ADMIN_BOOKINGS_PAG_PATH: "/admin/bookings/:pag",

  ADMIN_STATISTICS_PATH: "/admin/statistics/1",
  ADMIN_STATISTICS_ROUTE_PATH: "/admin/statistics",
  ADMIN_STATISTICS_PAG_PATH: "/admin/statistics/:pag",

  ADMIN_USERS_PATH: "/admin/users/1",
  ADMIN_USERS_ROUTE_PATH: "/admin/users",
  ADMIN_USERS_PAG_PATH: "/admin/users/:pag",

  ERROR404: "/error-404",
};

export default paths;