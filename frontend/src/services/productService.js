import axios from 'axios';

const api = import.meta.env.VITE_API_URL;

export const getProducts = async (params = {}) => {
  try {
    const response = await axios.get(`${api}/products`, { params });
    return response.data;
  } catch (error) {
    console.error('Error al obtener productos:', error);
    throw error;
  }
};