import API_ENDPOINT from "../config/API_ENDPOINT";
export const getStatistics = async (token) => {
  try {

    const response = await fetch(`${API_ENDPOINT}/informes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`, 
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};