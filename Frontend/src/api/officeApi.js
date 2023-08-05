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

export const addOffice = async (oficina, token) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/espaciosTrabajo/nuevo`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: oficina
    });
    const data = await response.json();
    if (data.ok === true) {
      return data
    }; // Se agrego con éxito la oficina
    
    return data.error;
  } catch (error) {
    throw error;
  }
}

export const deleteOffice = async (id, token) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/espaciosTrabajo/eliminar/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
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

export const editOffice = async (office, id, token) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/espaciosTrabajo/editar/${id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
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

//Consulra para buscar una oficina
export const searchOffices = async (keyword) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/espaciosTrabajo/buscar`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ palabraClave: keyword }),
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
