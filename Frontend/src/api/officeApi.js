import API_ENDPOINT from '../config/API_ENDPOINT';

export const getOffices = async () => {
  try {
    const response = await fetch(`${API_ENDPOINT}/espaciosTrabajo/espacios`);
    if (!response.ok) {
      const { error } = await response.json();
      return { error };
    }
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const getAllOffices = async () => {
  try {
    const response = await fetch(`${API_ENDPOINT}/espaciosTrabajo/?limit=100`);
    if (!response.ok) {
      const { error } = await response.json();
      return { error };
    }
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const getOfficeDetails = async (id) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/espaciosTrabajo/buscar/${id}`);
    if (!response.ok) {
      const { error } = await response.json();
      return { error };
    }
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const addReservation = async (espacioId, usuarioId, reservationData) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/nuevaReservacion/${espacioId}/${usuarioId}`, {
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

export const getOfficesForMap = async () => {
  try {
    const response = await fetch(`${API_ENDPOINT}/espaciosTrabajo/mapa`);
    if (!response.ok) {
      const { error } = await response.json();
      return { error };
    }
    return response.json();
  } catch (error) {
    throw error;
  }
};
