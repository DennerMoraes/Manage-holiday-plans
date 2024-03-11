import React, { useState } from 'react';
import './CardList.css';
import { format } from 'date-fns';
import PinIcon from '../../assets/pin-icon';
import CloseIcon from '../../assets/close-icon';
import PencilIcon from '../../assets/pencil-icon';
import EditModal from '../CardEdit/CardEdit';

const CardList = ({
    allData,
    editingIndex,
    editedData,
    setEditedData,
    handleStartEditing,
    handleSaveEditing,
    handleCancelEditing,
    handleDelete,
}) => {
    const [isEditingModalOpen, setEditingModalOpen] = useState(false);

    const handleOpenEditingModal = (index) => {
        handleStartEditing(index);
        setEditingModalOpen(true);
    };

    return (
        <div className='container' id='container'>
            {allData.map((item, index) => (
                <div key={index} className='body-card'>
                    {editingIndex === index ? (
                        // Check if editingIndex matches the current index and if the editing modal is open.
                        isEditingModalOpen && (
                            // Render the overlay and editing modal.
                            <div className={`overlay ${isEditingModalOpen ? 'active slide-down' : ''}`}>
                                <div className={`popup ${isEditingModalOpen ? 'active slide-down' : ''}`}>
                                    <div className='close-div'>
                                        <button onClick={() => {
                                            handleCancelEditing();
                                            setEditingModalOpen(false);
                                        }} className='delete-button'>
                                            <CloseIcon width="20px" height="20px" color="#ffff" />
                                        </button>
                                    </div>
                                    <EditModal
                                        editedData={editedData}
                                        setEditedData={setEditedData}
                                        handleSaveEditing={handleSaveEditing}
                                        placeholderTitle={item.title}
                                        placeholderLocal={item.local}
                                        placeholderParticipants={item.people}
                                        placeholderDescription={item.description}
                                    />
                                </div>
                            </div>
                        )
                    ) : (
                        // If not in editing mode, render edit and delete buttons.
                        <div>
                            <button onClick={() => handleOpenEditingModal(index)}
                                className='edit-button'>
                                <PencilIcon width="25px" height="25px" color="#ffff" />
                            </button>
                            <button onClick={() => handleDelete(item.id)} className='delete-button'><CloseIcon width="20px" height="20px" color="#ffff" /></button>
                        </div>
                    )}
                    {/* Render card details: title, location, date, participants, and description. */}
                    <p className='title-card'>
                        {item.title}
                    </p>
                    <div className='local-div'>
                        <PinIcon width="24px" height="35px" color="#5A5B7C" className={"pin-icon"} />
                        <p className='local-card'>
                            {item.local}
                        </p>
                    </div>
                    <p className='date-card'>
                        {format(new Date(item.date || ''), 'EEE, dd MMM')}
                    </p>
                    <p className='sub-title-card'>
                        Participants
                    </p>
                    <p className='text-card'>
                        {item.people ? item.people : 'No participants assigned'}
                    </p>
                    <p className='sub-title-card'>
                        Description
                    </p>
                    <p className='text-card'>
                        {item.description ? item.description : 'No description, put one in the edit button 😉'}
                    </p>

                </div>
            ))}

        </div>
    );
};

export default CardList;
