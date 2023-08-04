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
      const { error } = await response.json();
      return { error };
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
      const { error } = await response.json();
      return { error };
    }

    return response.json();
  } catch (error) {
    throw error;
  }
};

export const getUserById = async (userId) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/users/getbyid/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
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
