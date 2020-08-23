import getLowerNoAccentWord from './getLowerNoAccentWord';

export default (playedLetters, solution) => {
  const solutionWithoutAccents = getLowerNoAccentWord(solution);

  return [...playedLetters].reduce((errors, letter) => {
    if (!solutionWithoutAccents.includes(letter)) {
      errors += letter;
    }

    return errors;
  }, '');
};
