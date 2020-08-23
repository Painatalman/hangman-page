import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { initReactI18next } from 'react-i18next';

import { render } from '@testing-library/react';
import i18n from 'i18next';

import i18nConfig from '~/i18nConfig';

import IdleMessage from './IdleMessage';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init(i18nConfig);

describe('Message: Idle', () => {
  it('should display properly in EN', async () => {
    i18n.changeLanguage('en');

    const { getByTestId } = render(
      <div data-testid="warning">
        <IdleMessage />
      </div>
    );

    expect(getByTestId('warning').textContent).toEqual(
      "Press 'Reset Game' to start."
    );
  });
  it('should display properly in PT', () => {
    i18n.changeLanguage('pt');

    const { getByTestId } = render(
      <div data-testid="warning">
        <IdleMessage />
      </div>
    );

    expect(getByTestId('warning').textContent).toEqual(
      "Carregue 'Reiniciar' para começar."
    );
  });
});
