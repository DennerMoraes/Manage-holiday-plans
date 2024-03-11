import { useState } from 'react';

const useInsertCard = () => {
    // State variable to track the visibility of the insert card modal.
    const [isInsertCardOpen, setInsertCardOpen] = useState(false);

    // Function to open the insert card modal.
    const openInsertCard = () => {
        setInsertCardOpen(true);
    };

    // Function to close the insert card modal.
    const closeInsertCard = () => {
        setInsertCardOpen(false);
    };

    return {
        isInsertCardOpen,
        openInsertCard,
        closeInsertCard,
    };
};

export default useInsertCard;