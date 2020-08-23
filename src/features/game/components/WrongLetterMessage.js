import React from 'react';
import { Trans } from 'react-i18next';

import PropTypes from 'prop-types';

const WrongLetterMessage = ({ letter }) => (
  <Trans i18nKey="wrongLetterMessage">
    <em>{{ letter }}</em> is <strong>wrong</strong>
  </Trans>
);

WrongLetterMessage.propTypes = {
  letter: PropTypes.string.isRequired,
};

export default WrongLetterMessage;
