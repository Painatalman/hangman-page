import getWordWithSpaces from './getWordWithSpaces';

export default (playedLetters, solution) => {
  return !getWordWithSpaces(playedLetters, solution).includes('_');
};
