import React from 'react';
import './CardEdit.css'
import ButtonPop from '../ButtonPop/ButtonPop';

// It takes several props for handling edited data, saving edits, and placeholder values for inputs.
const EditModal = ({
    editedData,
    setEditedData,
    handleSaveEditing,
    placeholderTitle,
    placeholderLocal,
    placeholderDate,
    placeholderParticipants,
    placeholderDescription,
}) => {
    return (
        <div className='modal'>
            <h2>Edit card<br />information</h2>
            <input
                type="text"
                value={editedData?.title || ''}
                onChange={(e) => setEditedData({ ...editedData, title: e.target.value })}
                placeholder={placeholderTitle}
            />
            <input
                type="text"
                value={editedData?.local || ''}
                onChange={(e) => setEditedData({ ...editedData, local: e.target.value })}
                placeholder={placeholderLocal}
            />
            <input
                type="date"
                value={editedData?.date || ''}
                onChange={(e) => setEditedData({ ...editedData, date: e.target.value })}
                placeholder={placeholderDate}
            />
            <input
                type="text"
                value={editedData?.people || ''}
                onChange={(e) => setEditedData({ ...editedData, people: e.target.value })}
                placeholder={placeholderParticipants}
            />
            <input
                type="text"
                value={editedData?.description || ''}
                onChange={(e) => setEditedData({ ...editedData, description: e.target.value })}
                placeholder={placeholderDescription}
            />
            {/* Save Edit button using the ButtonPop component. */}
            <ButtonPop onClick={handleSaveEditing} backgroundColor={'#9BB3E7'}>Save Edit</ButtonPop>
        </div>
    );
};

export default EditModal;