import API_ENDPOINT from '../config/API_ENDPOINT';

export const getAllBookings = async () => {
  try {
    const response = await fetch(`${API_ENDPOINT}/reservaciones`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const { mensaje } = await response.json();
      return { error: mensaje };
    }

    return response.json();
  } catch (error) {
    throw error;
  }
};

// Peticion para traer todos las reservaciones de un usuario
export const getBookingsByUser = async (userId) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/reservaciones/2/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const { mensaje } = await response.json();
      return { error: mensaje };
    }

    const data = await response.json();
    return data.reservaciones; // Devuelve el arreglo de reservaciones
  } catch (error) {
    throw error;
  }
};

export const deleteBooking = async (bookingId) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/reservaciones/eliminarReservacion/${bookingId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const { mensaje } = await response.json();
      return { error: mensaje };
    }

    return response.json();
  } catch (error) {
    throw error;
  }
};

// Peticion para añadir una reservacion
export const addReservation = async (espacioId, usuarioId, reservationData) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/reservaciones/nuevaReservacion/${espacioId}/${usuarioId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reservationData)
    });
    if (!response.ok) {
      const { error } = await response.json();
      return { error };
    }
    return response.json();
  } catch (error) {
    throw error;
  }
};
