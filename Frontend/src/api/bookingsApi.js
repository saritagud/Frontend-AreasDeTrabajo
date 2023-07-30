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

export const getBookingsByUser = async (userId) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/reservaciones/${userId}`, {
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
