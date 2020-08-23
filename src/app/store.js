import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import createSagaMiddleware from 'redux-saga';

import gameReducer from '../features/game/gameSlice';
import languageReducer from '../features/language/languageSlice';
import profileReducer from '../features/profile/profileSlice';
import appSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  game: gameReducer,
  language: languageReducer,
  profile: profileReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(appSaga);

export default store;
export const persistor = persistStore(store);
