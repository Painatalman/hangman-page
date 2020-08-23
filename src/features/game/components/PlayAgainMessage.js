import React from 'react';
import { useTranslation } from 'react-i18next';

const PlayAgainMessage = () => {
  const { t } = useTranslation();

  return <p>{t('Try again?')}</p>;
};

export default PlayAgainMessage;
