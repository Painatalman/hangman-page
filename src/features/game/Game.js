import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import GameScreen from './components/GameScreen';
import {
  playLetter,
  selectSolution,
  selectPlayedLetters,
  selectStatus,
} from './gameSlice';
import { GAME_STATUS } from './options';
import isLetter from './utils/isLetter';

export default () => {
  const solution = useSelector(selectSolution);
  const playedLetters = useSelector(selectPlayedLetters);

  const dispatch = useDispatch();
  const status = useSelector(selectStatus);

  useEffect(() => {
    const handleKeyDown = ({ key, ctrlKey, metaKey }) => {
      // CTRL+T and CMD+T don't count!
      if (metaKey || ctrlKey || status !== GAME_STATUS.PLAYING) {
        return;
      }

      const letterCandidate = key.toLowerCase();

      // eslint-disable-next-line no-unused-expressions
      isLetter(letterCandidate) && dispatch(playLetter(letterCandidate));
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch, status]);

  return <GameScreen solution={solution} playedLetters={playedLetters} />;
};
