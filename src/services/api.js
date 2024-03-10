import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/data');
    return response.data.data;
  } catch (error) {
    console.error('Erro ao obter dados da API:', error);
    throw error; // Ou trate o erro de outra forma, dependendo do seu caso
  }
};

export const insertData = async (newData) => {
  try {
    const newDataWithId = { id: uuidv4(), ...newData };
    const response = await axios.post('http://localhost:3001/api/data', newDataWithId);
    return response.data.data;
  } catch (error) {
    console.error('Erro ao inserir dados:', error);
    throw error;
  }
};

export const updateData = async (index, editedData) => {
  try {
    const response = await axios.put(`http://localhost:3001/api/data/${index}`, editedData);
    return response.data.data;
  } catch (error) {
    console.error(`Erro ao editar dados no índice ${index}:`, error);
    throw error;
  }
};

export const deleteData = async (id) => {
  try {
    await axios.delete(`http://localhost:3001/api/data/${id}`);
  } catch (error) {
    console.error(`Erro ao excluir dados com ID ${id}:`, error);
    throw error;
  }
};