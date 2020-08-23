import React from 'react';
import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import i18nConfig from '../../i18nConfig';
import HangmanPage from './HangmanPage';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init(i18nConfig);

export default {
  title: 'Hangman Page Doll',
  component: HangmanPage,
  argTypes: {
    nErrors: {
      name: 'Nr. Errors',
    },
    headSrc: {
      name: 'Head image URL',
    },
  },
};

// eslint-disable-next-line react/jsx-props-no-spreading
const HangmanPageStory = args => <HangmanPage {...args} />;

export const NoErrors = HangmanPageStory.bind({});
NoErrors.args = {
  nErrors: 0,
};

export const OneError = HangmanPageStory.bind({});
OneError.args = {
  nErrors: 1,
};

export const CompleteDoll = HangmanPageStory.bind({});
CompleteDoll.args = {
  nErrors: 6,
};

export const CustomHead = HangmanPageStory.bind({});
CustomHead.args = {
  nErrors: 6,
  headSrc: 'http://placekitten.com/200/200',
};
