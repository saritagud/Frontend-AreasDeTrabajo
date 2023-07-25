// Importamos la configuracion del endpoitn para hacer la solicitud 
import API_ENDPOINT from '../config/API_ENDPOINT';

// Funcion asincrona  para obtener oficinas
export const getOffices = async () => {
    try {
        // Optenemos los datos del endpont
        const response = await fetch(`${API_ENDPOINT}/espaciosTrabajo/espacios`);
    
        // Aplicamos manejo de errores y devolvemos el json si todo es exitoso
        if (!response.ok) {
            const { error } = await response.json();
            return { error };
        }
        return response.json();
        
    } catch (error) {
        throw error;
    }
};


// Funcion asincrona para obtener todas las oficinas
export const getAllOffices = async () => {
    try {
        // Optenemos los datos del endpont
        const response = await fetch(`${API_ENDPOINT}/espaciosTrabajo`);
    
        // Aplicamos manejo de errores y devolvemos el json si todo es exitoso
        if (!response.ok) {
            const { error } = await response.json();
            return { error };
        }
        return response.json();
        
    } catch (error) {
        throw error;
    }
};



