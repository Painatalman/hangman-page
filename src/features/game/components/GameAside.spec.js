import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { initReactI18next } from 'react-i18next';

import { render } from '@testing-library/react';
import i18n from 'i18next';

import i18nConfig from '~/i18nConfig';

import GameAside from './GameAside';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init(i18nConfig);

describe('Aside about Hangman Page', () => {
  it('should display message and link properly in EN', async () => {
    i18n.changeLanguage('en');

    const { getByRole, container } = render(<GameAside />);
    const link = getByRole('link');

    expect(container.textContent).toEqual('Who is Hangman Page?');
    expect(link.href).toEqual('https://en.wikipedia.org/wiki/Adam_Page');
    expect(link.getAttribute('rel')).toContain('noopener');
    expect(link.getAttribute('rel')).toContain('noreferrer');
  });
  it('should display properly in PT', () => {
    i18n.changeLanguage('pt');

    const { getByRole, container } = render(<GameAside />);

    expect(container.textContent).toEqual('Quem é Hangman Page?');
    expect(getByRole('link').href).toEqual(
      'https://pt.wikipedia.org/wiki/Adam_Page'
    );
  });
});
