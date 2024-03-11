import React from 'react';
import './InsertCard.css';
import ButtonPop from '../ButtonPop/ButtonPop';

// It takes props for new data, change event handling, and inserting data.
const InsertCard = ({ newData, handleChange, handleInsertData }) => {
  return (
    // Render the section for entering new card information.
    <div className='insert-card-body'>
      <h2>Enter the card information</h2>
        <input type="text" name="title" value={newData.title} onChange={handleChange} placeholder='Title'/>
        <input type="text" name="description" value={newData.description} onChange={handleChange} placeholder='Description'/>
        <input type="date" name="date" value={newData.date} onChange={handleChange} placeholder='Date'/>
        <input type="text" name="local" value={newData.local} onChange={handleChange} placeholder='Local'/>
        <input type="text" name="people" value={newData.people} onChange={handleChange} placeholder='Participants'/>
      <ButtonPop onClick={handleInsertData}>Create card</ButtonPop>
    </div>
  );
};

export default InsertCard;