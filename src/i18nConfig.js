import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  pt: {
    translation: {
      alreadyPlayedLetterMessage: 'Letra <0>{{ letter }}</0> já foi jogada.',
      'Change language:': 'Mudar língua:',
      'Game controls': 'Comandos de jogo',
      nrErrorsFigCaption: 'Tentativas: {{ chancesLeft }}',
      "Press 'Reset Game' to start.": "Carregue 'Reiniciar' para começar.",
      'Reset game': 'Recomeçar',
      revealSolution: 'A palavra era <1>{{ solution }}</1>.',
      rightLetterMessage: '<0>{{ letter }}</0> está <2>correto</2>.',
      'Starting game, please wait': 'A começar o jogo. Aguarde, por favor',
      'The Game': 'O Jogo',
      'Try again?': 'Tentar de novo?',
      'Type or select a letter': 'Tecle ou carregue numa letra',
      hangmanPageAside: 'Quem é <1 />Hangman Page?',
      hangmanPageAsideLink: 'https://pt.wikipedia.org/wiki/Adam_Page',
      wrongLetterMessage: '<0>{{ letter }}</0> está <2>errado</2>.',
      'You win!': 'Ganhaste!',
      'You lose!': 'Perdeste!',
    },
  },
  en: {
    translation: {
      hangmanPageAsideLink: 'https://en.wikipedia.org/wiki/Adam_Page',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',
    // for colons
    nsSeparator: false,
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
