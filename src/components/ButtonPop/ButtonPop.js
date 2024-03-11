import React from 'react';
import './ButtonPop.css';

// It takes three props: onClick (click event handler), children (inner content), and backgroundColor (background color).
const ButtonPop = ({ onClick, children, backgroundColor }) => (
    <button className="button-pop" onClick={onClick} style={{ backgroundColor: backgroundColor }}>
        {children}
    </button>
);

export default ButtonPop;
