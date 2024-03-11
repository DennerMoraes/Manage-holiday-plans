import React from 'react';
import PdfGenerator from '../PdfGenerator/PdfGenerator';
import ButtonPop from '../ButtonPop/ButtonPop';
import './Header.css'

const Header = ({ openInsertCard }) => (
    // Render the header section with the application title and action buttons.
    <div className='Header'>
        <h1>Holiday Plan ✈</h1>
        <div>
            {/* ButtonPop component for creating a new card. */}
            <ButtonPop onClick={openInsertCard} >Create Card</ButtonPop>
            
            {/* PdfGenerator component for generating a PDF document. */}
            <PdfGenerator contentId="testepdf" fileName="document"></PdfGenerator>
        </div>
    </div>
);

export default Header;
