import { createSlice } from '@reduxjs/toolkit';

import { GAME_STATUS } from './options';

const initialState = {
  playedLetters: '',
  solution: '',
  error: null,
  lastLetterPlayed: null,
  hasPlayedNewLetter: false,
  status: GAME_STATUS.IDLE,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    start: state => {
      state.playedLetters = '';
      state.solution = '';
      state.error = null;
      state.status = GAME_STATUS.LOADING;
      state.lastLetterPlayed = initialState.lastLetterPlayed;
      state.hasPlayedNewLetter = false;
    },
    startAfterFetch: (state, action) => {
      state.solution = action.payload;
      state.status = GAME_STATUS.PLAYING;
    },
    setGameError: (state, action) => {
      state.error = action.payload;
      state.status = GAME_STATUS.IDLE;
    },
    playLetter: (state, { payload: letter }) => {
      const { playedLetters } = state;

      state.lastLetterPlayed = letter;
      state.hasPlayedNewLetter = !playedLetters.includes(letter);
      state.playedLetters = [...new Set(`${playedLetters}${letter}`)]
        .sort()
        .join('');
    },
    win: state => {
      state.status = GAME_STATUS.WON;
    },
    lose: state => {
      state.status = GAME_STATUS.LOST;
    },
  },
});

export const {
  start,
  startAfterFetch,
  playLetter,
  setGameError,
  setMessage,
  win,
  lose,
} = gameSlice.actions;

// `useSelector((state) => state.counter.value)`
export const selectPlayedLetters = state => {
  return state[gameSlice.name].playedLetters;
};
export const selectSolution = state => {
  return state[gameSlice.name].solution;
};
export const selectStatus = state => {
  return state[gameSlice.name].status;
};
export const selectLastPlayedLetter = state => {
  return state[gameSlice.name].lastLetterPlayed;
};
export const selectHasPlayedNewLetter = state => {
  return state[gameSlice.name].hasPlayedNewLetter;
};
export const selectError = state => {
  return state[gameSlice.name].error;
};
export default gameSlice.reducer;
