export const GAME_STATUS = {
  // can start game, not ready yet. Cannot play letters
  IDLE: 'idle',
  // can play letters
  PLAYING: 'playing',
  // fetching content, playing animation. No interaction
  LOADING: 'loading',
  // like IDLE, but counts as victory
  WON: 'won',
  // like IDLE, but counts as loss
  LOST: 'lost',
};
