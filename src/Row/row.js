import React from 'react';
import PropTypes from 'prop-types';
import Tile from '../Tile/tile';
import './row.css';

const Row = ({ guess, wordLength }) => {
  const tiles = [];

  for (let i = 0; i < wordLength; i++) {
    const letter = guess[i] ? guess[i].letter : '';
    const status = guess[i] ? guess[i].status : '';
    tiles.push(<Tile key={i} letter={letter} status={status} />);
  }

  return (
    <div className="row">
      {tiles}
    </div>
  );
};

Row.propTypes = {
  guess: PropTypes.arrayOf(PropTypes.shape({
    letter: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['correct', 'misplaced', 'wrong', '']).isRequired,
  })).isRequired,
  wordLength: PropTypes.number.isRequired,
};

export default Row;
