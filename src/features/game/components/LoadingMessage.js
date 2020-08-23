import React from 'react';
import { useTranslation } from 'react-i18next';

const LoadingMessage = () => {
  const { t } = useTranslation();

  return <span>{t('Starting game, please wait')}</span>;
};

export default LoadingMessage;
