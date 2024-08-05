export const checkGuess = (guess, word) => {
    return guess.split('').map((letter, index) => {
      if (word[index] === letter) {
        return { letter, status: 'correct' };
      } else if (word.includes(letter)) {
        return { letter, status: 'misplaced' };
      } else {
        return { letter, status: 'wrong' };
      }
    });
  };
  
  export const generateWord = () => {
    const words = ['APFEL', 'BLUME', 'LAMPE', 'HAFEN', 'FRUST', 'GABEL', 'TEICH', 'WETTE','TORTE'];
    //const words = ['TORTE'];
    return words[Math.floor(Math.random() * words.length)];
  };
  