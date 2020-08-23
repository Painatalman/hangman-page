module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['~', './src/']],
      },
    },
    ecmaFeatures: {
      classes: true,
      jsx: true,
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:cypress/recommended',
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react', 'import-helpers', 'prettier', '@babel', 'import'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          '/^react/',
          '/^prop-types/',
          'module',
          '/^~/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
    'import/prefer-default-export': 0,
    'import/named': 0,
    'no-param-reassign': 0,
    'no-unused-vars': 1,
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        labelComponents: ['label', 'Label'],
        controlComponents: ['input', 'select'],
        assert: 'either',
      },
    ],
  },
};
