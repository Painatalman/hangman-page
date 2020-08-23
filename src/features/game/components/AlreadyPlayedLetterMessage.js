import React from 'react';
import { Trans } from 'react-i18next';

import PropTypes from 'prop-types';

const AlreadyPlayedLetterMessage = ({ letter }) => {
  return (
    <Trans i18nKey="alreadyPlayedLetterMessage">
      <em>{{ letter }}</em> was already played.
    </Trans>
  );
};

AlreadyPlayedLetterMessage.propTypes = {
  letter: PropTypes.string.isRequired,
};

export default AlreadyPlayedLetterMessage;
