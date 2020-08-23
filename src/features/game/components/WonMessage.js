import React from 'react';
import { useTranslation } from 'react-i18next';

const WonMessage = () => {
  const { t } = useTranslation();

  return <strong>{t('You win!')}</strong>;
};

export default WonMessage;
