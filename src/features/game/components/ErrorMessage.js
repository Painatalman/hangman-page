import React from 'react';
import { useTranslation } from 'react-i18next';

import PropTypes from 'prop-types';

const ErrorMessage = ({ message }) => {
  const { t } = useTranslation();
  return (
    <div>
      {t('Error:')} {message}
    </div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
