import React from 'react';
import { useApiOperations } from '../services/apiFunction';
import CardList from '../components/CardList/CardList';
import InsertCard from '../components/InsertCard/InsertCard';
import useInsertCard from '../hooks/useInsertCard';
import CloseIcon from '../assets/close-icon';
import Header from '../components/Header/Header';
import '../styles/global.css';
import TitlePage from '../components/TitlePage/TitlePage';


function CardPage() {
    // Destructuring the state variables and functions from the custom hook
    const {
        newData,
        setNewData,
        allData,
        editingIndex,
        editedData,
        setEditedData,
        handleInsertData,
        handleStartEditing,
        handleSaveEditing,
        handleCancelEditing,
        handleDelete,
    } = useApiOperations();

    //  Handles the change in input fields and updates the corresponding state.
    const handleChange = (e) => {
        setNewData({ ...newData, [e.target.name]: e.target.value });
    };

    // Destructuring state and functions from the useInsertCard hook
    const { isInsertCardOpen, openInsertCard, closeInsertCard } = useInsertCard();

    return (
        <div id='testepdf'>
            {/* Header component with a button to open the insert card modal */}
            <Header openInsertCard={openInsertCard} />

            {/* Title page component with a descriptive content */}
            <TitlePage content={'Organize your holiday easily and save your time.'}/>

            {/* Modal for inserting a new card, displayed when isInsertCardOpen is true */}
            {isInsertCardOpen && (
                <div className={`overlay ${isInsertCardOpen ? 'active slide-down' : ''}`}>
                    <div className={`popup ${isInsertCardOpen ? 'active slide-down' : ''}`}>
                        <div className='close-div'>
                            {/* Button to close the insert card modal */}
                            <button onClick={closeInsertCard} className='delete-button'>
                                <CloseIcon width="20px" height="20px" color="#ffff" />
                            </button>
                        </div>

                        {/* InsertCard component with props */}
                        <InsertCard newData={newData} handleChange={handleChange} handleInsertData={() => {
                            handleInsertData();
                            closeInsertCard();
                        }}/>
                    </div>
                </div>
            )}

            {/* CardList component displaying all cards and managing card interactions */}
            <CardList
                allData={allData}
                editingIndex={editingIndex}
                editedData={editedData}
                setEditedData={setEditedData}
                handleStartEditing={handleStartEditing}
                handleSaveEditing={handleSaveEditing}
                handleCancelEditing={handleCancelEditing}
                handleDelete={handleDelete}
            />
        </div>
    );
}

export default CardPage;
