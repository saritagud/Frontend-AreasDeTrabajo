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

export const getAllUsers = async () => {
  try {
    const response = await fetch(`${API_ENDPOINT}/users/all`, {
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

export const updateUserById = async (userId, userData, token) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/users/updateById/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
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

export const deleteUserById = async (userId, token) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/users/deleteById/${userId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
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
