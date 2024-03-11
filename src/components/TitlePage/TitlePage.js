import React from 'react';
import './TitlePage.css'

// It takes a prop content for displaying the title content.
const TitlePage = ({content}) => (
    <div className='TitlePage'>
        <h1>{content}</h1>
    </div>
);

export default TitlePage;
