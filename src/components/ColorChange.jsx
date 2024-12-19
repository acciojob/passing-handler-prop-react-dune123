import React from 'react';
import './ColorChange.css';

const ColorChange = ({ chosenColor, onClick }) => {
  return (
    <div
      className='containerClass'
      style={{ backgroundColor: chosenColor || 'transparent' }}
      onClick={onClick}
    >
      Selection
    </div>
  );
};

export default ColorChange;
