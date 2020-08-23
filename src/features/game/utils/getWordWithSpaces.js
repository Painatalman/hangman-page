import getLowerNoAccentWord from './getLowerNoAccentWord';

export default (playedLetters, solution) =>
  [...solution].reduce((acc, char) => {
    const noAccentChar = getLowerNoAccentWord(char);
    const isLetter = noAccentChar.match(/[A-Z|a-z]/i);

    if (!isLetter) {
      return acc + char;
    }

    const wasPlayed = playedLetters.includes(noAccentChar);

    acc += wasPlayed ? char : '_';
    return acc;
  }, '');
