import React from 'react';
import PropTypes from 'prop-types';
import './keyboard.css';

 const Keyboard = ({ onKeyPress }) => {
  const keys = [
    'QWERTZUIOP',
    'ASDFGHJKL',
    'YXCVBNM'
  ]; 
  

 /* const Keyboard = ({ onKeyPress }) => {
    const keys = [
      'ABCDEFGH',
      'IJKLMOPQR',
      'STUVWXYZ'
    ]; 
*/
  const handleKeyClick = (key) => {
    onKeyPress(key);
  };
  return (
    <div className="keyboard">
      {keys.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.split('').map((key) => (
            <button
              key={key}
              className="keyboard-key"
              onClick={() => handleKeyClick(key)}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
      <div className="keyboard-row">
        <button className="keyboard-key special-key" onClick={() => handleKeyClick('Enter')}>Enter</button>
        <button className="keyboard-key special-key" onClick={() => handleKeyClick('Backspace')}>Backspace</button>
      </div>
    </div>
  );
};

Keyboard.propTypes = {
  onKeyPress: PropTypes.func.isRequired,
};

export default Keyboard;
