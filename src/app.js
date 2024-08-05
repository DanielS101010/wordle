import React, { useState, useEffect } from 'react';
import Board from './Board/board';
import Keyboard from './Keyboard/keyboard';
import Login from './LogIn/login';
import { checkGuess, generateWord } from './GameLogic/gameLogic';

const App = () => {
  const wordLength = 5;
  const maxAttempts = 6;
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [word, setWord] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (user) {
      setWord(generateWord());
    }
  }, [user]);

  const handleKeyPress = (key) => {
    if (key === 'Enter') {
      if (currentGuess.length === wordLength) {
        const evaluatedGuess = checkGuess(currentGuess, word);
        setGuesses([...guesses, evaluatedGuess]);
        setCurrentGuess('');
      }
    } else if (key === 'Backspace') {
      setCurrentGuess(currentGuess.slice(0, -1));
    } else if (currentGuess.length < wordLength && /^[A-Z]$/.test(key)) {
      setCurrentGuess(currentGuess + key);
    }
  };

  const handleLogin = (username) => {
    setUser(username);
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="app">
      <Board guesses={guesses} currentGuess={currentGuess} wordLength={wordLength} />
      <Keyboard onKeyPress={handleKeyPress} />
      {guesses.length === maxAttempts && (
        <div className="game-over">Game Over! The word was: {word}</div>
      )}
    </div>
  );
};

export default App;
