import React from 'react';
import PropTypes from 'prop-types';
import './tile.css';

const Tile = ({ letter, status }) => {
  return (
    <div className={`tile ${status}`}>
      {letter}
    </div>
  );
};

Tile.propTypes = {
  letter: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['correct', 'misplaced', 'wrong', '']).isRequired,
};

export default Tile;
