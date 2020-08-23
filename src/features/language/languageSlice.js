import { createSlice } from '@reduxjs/toolkit';

import { DEFAULT_LANGUAGE } from './options';

const initialState = {
  language: DEFAULT_LANGUAGE,
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export const selectLanguage = state => {
  return state[languageSlice.name].language;
};

export default languageSlice.reducer;
