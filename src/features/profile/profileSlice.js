import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  headSrc: '',
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setHeadSrc: (state, action) => {
      state.headSrc = action.payload;
    },
  },
});

export const { setHeadSrc } = profileSlice.actions;

export const selectHeadSrc = state => {
  return state[profileSlice.name].headSrc;
};

export default profileSlice.reducer;
