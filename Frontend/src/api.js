import API_ENDPOINT from '../config/API_ENDPOINT';

export const login = async (userData) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw errorData.message || 'Error inesperado al iniciar sesión';
    }

    return response.json();
  } catch (error) {
    throw error;
  }
};

export const register = async (userData) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/users/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.log(errorData.error);
      throw errorData.message || 'Error inesperado al registrarse';
    }

    return response.json();
  } catch (error) {
    throw error;
  }
};