import { useState, useEffect } from 'react';
import { fetchData, insertData, updateData, deleteData } from './api';

export function useApiOperations() {
  // State variables for managing new data, all data, editing index, and edited data
  const [newData, setNewData] = useState({});
  const [allData, setAllData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedData, setEditedData] = useState({});

  // Fetch data from the API on component mount
  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const data = await fetchData();
        setAllData(data);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    fetchDataFromApi();
  }, []);

  const handleInsertData = async () => {
    if (!newData.title || !newData.date || !newData.local) {
      alert('Fill in the mandatory fields (title, date, location)');
      return;
    } else {
      try {
        const insertedData = await insertData(newData);
        // Update state with the newly inserted data
        setAllData(prevData => [...prevData, insertedData]);
        alert('Created successfully');
      } catch (error) {
        console.error('Error inserting data:', error);
      }
    }
  };

  //Sets the index and data for starting the editing process.
  const handleStartEditing = (index, data) => {
    setEditingIndex(index);
    setEditedData(data);
  };

  //Handles saving the edited data to the API.

  const handleSaveEditing = async () => {
    try {
      const updatedData = await updateData(editingIndex, editedData);
      const updatedAllData = [...allData];
      updatedAllData[editingIndex] = updatedData;
      // Update state with the edited data and reset editing state
      setAllData(updatedAllData);
      setEditingIndex(null);
      setEditedData({});
    } catch (error) {
      console.error('Error saving edits:', error);
    }
  };

  //Cancels the editing process and resets editing state.

  const handleCancelEditing = () => {
    setEditingIndex(null);
    setEditedData({});
  };


  //Handles the deletion of data from the API.

  const handleDelete = async (id) => {
    try {
      await deleteData(id);
      // Update state by removing the deleted data
      setAllData(prevData => prevData.filter(item => item.id !== id));
      alert('Deleted card')
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  // Return the state variables and functions for API operations
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