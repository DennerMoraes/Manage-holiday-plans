import React from 'react';

const PinIcon = ({ width, height, color, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="5 0 26 35"
        width={width}
        height={height}
        fill={color}
        className={className}
    >
        <path d="M16.001 5c-4.216 0-7.714 3.418-7.634 7.634.029 1.578.719 2.824 1.351 4.024.242.461 6.264 10.332 6.264 10.332V27l.001-.007.002.007v-.01l6.531-10.377c.407-.703.793-1.771.793-1.771A7.631 7.631 0 0 0 16.001 5zM16 16.019a3.895 3.895 0 0 1-3.896-3.897A3.898 3.898 0 1 1 16 16.019z" />
    </svg>
);

export default PinIcon;