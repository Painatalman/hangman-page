import React, { useMemo } from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';

import HangmanPage from '~/components/HangmanPage';
import { useYourHead } from '~/features/profile/hooks';

import getWordWithSpaces from '../utils/getWordWithSpaces';
import getWrongLetters from '../utils/getWrongLetters';
import GameAside from './GameAside';
import GameControl from './GameControl';
import GameLetterKeyboard from './GameLetterKeyboard';
import GameMessage from './GameMessage';
import GameTitle from './GameTitle';

const SolutionWrapper = styled.div`
  letter-spacing: 0.5rem;
  font-family: 'Architects Daughter', cursive;
  text-transform: uppercase;
  font-size: 2.25rem;
  text-align: center;
  font-weight: bold;
`;

const GameScreenWrapper = styled.article`
  position: relative;
  max-width: 560px;
  width: 100%;
  margin: 1rem auto;
  font-family: 'Architects Daughter', cursive;
`;

const GameScreen = ({ playedLetters, solution }) => {
  const wrongLetters = useMemo(() => getWrongLetters(playedLetters, solution), [
    playedLetters,
    solution,
  ]);
  const [headSrc] = useYourHead();

  const wordWithSpaces = useMemo(
    () => getWordWithSpaces(playedLetters, solution),
    [solution, playedLetters]
  );

  return (
    <GameScreenWrapper>
      <header>
        <GameTitle />
      </header>
      <GameAside />
      <main>
        <GameMessage />
        <HangmanPage nErrors={wrongLetters.length} headSrc={headSrc} />
        <SolutionWrapper>{wordWithSpaces}</SolutionWrapper>
        <GameLetterKeyboard />
      </main>
      <GameControl />
    </GameScreenWrapper>
  );
};

GameScreen.propTypes = {
  playedLetters: PropTypes.string.isRequired,
  solution: PropTypes.string.isRequired,
};

export default GameScreen;
