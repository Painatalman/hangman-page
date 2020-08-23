import i18n from 'i18next';
import { call, put, takeEvery, all, select } from 'redux-saga/effects';

import {
  startAfterFetch,
  start,
  win,
  lose,
  setGameError,
  playLetter,
  selectSolution,
  selectPlayedLetters,
} from '../features/game/gameSlice';
import hasLost from '../features/game/utils/hasLost';
import hasWon from '../features/game/utils/hasWon';
import {
  setLanguage,
  selectLanguage,
} from '../features/language/languageSlice';
import WordService from '../services/WordService';

function* fetchWord() {
  let word;

  const language = yield select(selectLanguage);

  try {
    word = yield call(WordService.getWord, language);
    yield put(startAfterFetch(word));
  } catch (e) {
    yield put(setGameError(e.message));
  }
}

function* startAfterSetLanguage() {
  const language = yield select(selectLanguage);

  yield call(() => i18n.changeLanguage(language));
  yield put(start());
}

function* setLanguageOnRehydrate() {
  const language = yield select(selectLanguage);

  yield call(() => i18n.changeLanguage(language));
}

function* checkGameEnd() {
  const playedLetters = yield select(selectPlayedLetters);
  const solution = yield select(selectSolution);

  if (hasWon(playedLetters, solution)) {
    yield put(win());
  } else if (hasLost(playedLetters, solution)) {
    yield put(lose());
  }
}

export default function* gameSaga() {
  yield all([
    takeEvery(start().type, fetchWord),
    takeEvery(setLanguage().type, startAfterSetLanguage),
    takeEvery(playLetter().type, checkGameEnd),
    takeEvery('persist/REHYDRATE', setLanguageOnRehydrate),
  ]);
}
