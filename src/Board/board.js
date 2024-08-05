import React from 'react';
import PropTypes from 'prop-types';
import Row from '../Row/row';
import './board.css';

const Board = ({ guesses, currentGuess, wordLength }) => {
  const rows = [];

  // Add the previous guesses
  for (let i = 0; i < guesses.length; i++) {
    rows.push(<Row key={i} guess={guesses[i]} wordLength={wordLength} />);
  }

  // Add the current guess
  if (guesses.length < 6) {
    rows.push(<Row key={guesses.length} guess={currentGuess.split('').map(letter => ({ letter, status: '' }))} wordLength={wordLength} />);
  }

  // Add the empty rows for the remaining attempts
  for (let i = guesses.length + 1; i < 6; i++) {
    rows.push(<Row key={i} guess={[]} wordLength={wordLength} />);
  }

  return (
    <div className="board">
      {rows}
    </div>
  );
};

Board.propTypes = {
  guesses: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
    letter: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['correct', 'misplaced', 'wrong', '']).isRequired,
  }))).isRequired,
  currentGuess: PropTypes.string.isRequired,
  wordLength: PropTypes.number.isRequired,
};

export default Board;
