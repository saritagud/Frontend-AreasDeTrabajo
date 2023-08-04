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

export const addOffice = async (oficina) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/espaciosTrabajo/nuevo`, {
      method: 'POST',
      body: oficina
    });
    const data = await response.json();
    if (data.ok === true) {
      return data
    }; // Se agrego con éxito la oficina

    console.log(data)
    return data.error;
  } catch (error) {
    throw error;
  }
}

export const deleteOffice = async (id) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/espaciosTrabajo/eliminar/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      const { mensaje } = await response.json();
      return { mensaje };
    }
    return response.json();
  } catch (error) {
    throw error;
  }
}

export const editOffice = async (office, id) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/espaciosTrabajo/editar/${id}`, {
      method: 'PUT',
      body: office
    });
    if (!response.ok) {
      return response.json()
    }
    return response.json();
  } catch (error) {
    throw error;
  }
}
