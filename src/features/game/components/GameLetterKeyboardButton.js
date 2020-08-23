import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import styled from 'styled-components';

import { selectPlayedLetters, playLetter, selectStatus } from '../gameSlice';
import { GAME_STATUS } from '../options';

const Wrapper = styled.button`
  appearance: none;
  border: none;
  background: transparent;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-family: 'Architects Daughter', cursive;
  padding: 1rem;
  cursor: pointer;
  text-decoration: underline;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: 100%;
`;
const AlreadyPlayedWrapper = styled(Wrapper)`
  text-decoration: line-through;
  text-decoration-color: red;
`;

function GameLetterKeyboardButton({ letter }) {
  const playedLetters = useSelector(selectPlayedLetters);
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  const Letter = playedLetters.includes(letter)
    ? AlreadyPlayedWrapper
    : Wrapper;

  return (
    <Letter
      type="button"
      onClick={() => {
        if (status !== GAME_STATUS.PLAYING) {
          return;
        }
        dispatch(playLetter(letter));
      }}
    >
      {letter}
    </Letter>
  );
}

GameLetterKeyboardButton.propTypes = {
  letter: PropTypes.string.isRequired,
};

export default GameLetterKeyboardButton;
