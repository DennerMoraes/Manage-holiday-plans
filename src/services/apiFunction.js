// apiFunctions.js
import { useState, useEffect } from 'react';
import { fetchData, insertData, updateData, deleteData } from './api';

export function useApiOperations() {
  const [newData, setNewData] = useState({});
  const [allData, setAllData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const data = await fetchData();
        setAllData(data);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    };

    fetchDataFromApi();
  }, []);

  const handleInsertData = async () => {
    try {
      const insertedData = await insertData(newData);
      setAllData(prevData => [...prevData, insertedData]);
    } catch (error) {
      console.error('Erro ao inserir dados:', error);
    }
  };

  const handleStartEditing = (index, data) => {
    setEditingIndex(index);
    setEditedData(data);
  };

  const handleSaveEditing = async () => {
    try {
      const updatedData = await updateData(editingIndex, editedData);
      const updatedAllData = [...allData];
      updatedAllData[editingIndex] = updatedData;
      setAllData(updatedAllData);
      setEditingIndex(null);
      setEditedData({});
    } catch (error) {
      console.error('Erro ao salvar edições:', error);
    }
  };

  const handleCancelEditing = () => {
    setEditingIndex(null);
    setEditedData({});
  };

  const handleDelete = async (id) => {
    try {
      await deleteData(id);
      setAllData(prevData => prevData.filter(item => item.id !== id));
    } catch (error) {
      console.error('Erro ao excluir dados:', error);
    }
  };

  return {
    newData,
    allData,
    editingIndex,
    editedData,
    setEditedData,
    setNewData,
    handleInsertData,
    handleStartEditing,
    handleSaveEditing,
    handleCancelEditing,
    handleDelete,
  };
}
