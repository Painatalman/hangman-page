import React from 'react';
import { Trans } from 'react-i18next';

import PropTypes from 'prop-types';

const RightLetterMessage = ({ letter }) => (
  <Trans i18nKey="rightLetterMessage" letter={letter.toUpperCase()}>
    <em>{{ letter }}</em> is <strong>correct</strong>.
  </Trans>
);

RightLetterMessage.propTypes = {
  letter: PropTypes.string.isRequired,
};

export default RightLetterMessage;
