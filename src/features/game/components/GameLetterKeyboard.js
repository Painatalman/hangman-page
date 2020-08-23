import React from 'react';

import styled from 'styled-components';

import GameLetterKeyboardButton from './GameLetterKeyboardButton';

const Ol = styled.ol`
  list-style-type: none;
  padding: 0;
  display: grid;
  margin: 1rem auto;
  grid-template-columns: repeat(9, minmax(1rem, 1fr));
  text-align: center;
  background-color: black;
  grid-area: 1 / 1 / 2 / 3;
`;

const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

function GameLetterKeyboard() {
  return (
    <Ol>
      {letters.map(letter => (
        <li key={letter}>
          <GameLetterKeyboardButton letter={letter} />
        </li>
      ))}
    </Ol>
  );
}

export default GameLetterKeyboard;
