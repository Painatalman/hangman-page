import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { initReactI18next } from 'react-i18next';

import { render } from '@testing-library/react';
import i18n from 'i18next';

import i18nConfig from '~/i18nConfig';

import AlreadyPlayedLetterMessage from './AlreadyPlayedLetterMessage';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init(i18nConfig);

describe('Message: Already played', () => {
  it('should display properly in EN', async () => {
    i18n.changeLanguage('en');

    const { getByTestId } = render(
      <div data-testid="warning">
        <AlreadyPlayedLetterMessage letter="a" />
      </div>
    );

    expect(getByTestId('warning').textContent).toEqual('a was already played.');
  });
  it('should display properly in PT', () => {
    i18n.changeLanguage('pt');

    const { getByTestId } = render(
      <div data-testid="warning">
        <AlreadyPlayedLetterMessage letter="a" id="test" />
      </div>
    );

    expect(getByTestId('warning').textContent).toEqual(
      'Letra a já foi jogada.'
    );
  });
});
