import getWrongLetters from './getWrongLetters';

export default (playedLetters, solution) => {
  const wrongLetters = getWrongLetters(playedLetters, solution);

  return wrongLetters.length > 5;
};
