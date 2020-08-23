import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';

import {
  selectStatus,
  selectSolution,
  selectLastPlayedLetter,
  selectHasPlayedNewLetter,
  selectError,
} from '../gameSlice';
import { GAME_STATUS } from '../options';
import AlreadyPlayedLetterMessage from './AlreadyPlayedLetterMessage';
// eslint-disable-next-line import/extensions
import ErrorMessage from './ErrorMessage';
import IdleMessage from './IdleMessage';
import LoadingMessage from './LoadingMessage';
import LostMessage from './LostMessage';
import PlayLetterMessage from './PlayLetterMessage';
import RightLetterMessage from './RightLetterMessage';
import WonMessage from './WonMessage';
import WrongLetterMessage from './WrongLetterMessage';

const { IDLE, LOADING, LOST, WON } = GAME_STATUS;

const GameMessageWrapper = styled.div`
  font-family: 'Architects Daughter', cursive;
  margin: 1rem 0;
  text-align: center;
  em {
    display: inline;
    text-transform: uppercase;
  }
  strong {
    display: inline;
  }
`;

const GameMessage = () => {
  const solution = useSelector(selectSolution);
  const lastPlayedLetter = useSelector(selectLastPlayedLetter);
  const gameStatus = useSelector(selectStatus);
  const hasPlayedNewLetter = useSelector(selectHasPlayedNewLetter);
  const error = useSelector(selectError);

  const renderPlayingLetterStatus = useMemo(() => {
    if (!lastPlayedLetter) {
      return <></>;
    }

    if (!hasPlayedNewLetter) {
      return <AlreadyPlayedLetterMessage letter={lastPlayedLetter} />;
    }
    if (solution.includes(lastPlayedLetter)) {
      return <RightLetterMessage letter={lastPlayedLetter} />;
    }
    return <WrongLetterMessage letter={lastPlayedLetter} />;
  }, [hasPlayedNewLetter, lastPlayedLetter, solution]);

  function PlayingMessage() {
    // not playing? Return matching component
    if (gameStatus === WON) {
      return <WonMessage />;
    }
    if (gameStatus === LOST) {
      return <LostMessage solution={solution} />;
    }
    if (gameStatus === LOADING) {
      return <LoadingMessage />;
    }
    if (gameStatus === IDLE) {
      return <IdleMessage />;
    }
    if (!lastPlayedLetter) {
      return <PlayLetterMessage />;
    }

    return (
      <>
        {renderPlayingLetterStatus} <br />
        <PlayLetterMessage />
      </>
    );
  }

  return (
    <GameMessageWrapper role="alert">
      {error ? <ErrorMessage message={error} /> : ''}
      <PlayingMessage />
    </GameMessageWrapper>
  );
};

export default GameMessage;
