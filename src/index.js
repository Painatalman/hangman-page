import React from 'react';
import ReactDOM from 'react-dom';
import { initReactI18next } from 'react-i18next';
import { Provider } from 'react-redux';

import i18n from 'i18next';
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';

import App from './App';
import store, { persistor } from './app/store';
import i18nConfig from './i18nConfig';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init(i18nConfig);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
