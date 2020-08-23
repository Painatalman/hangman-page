import React from 'react';
import { useTranslation } from 'react-i18next';

const LoadingMessage = () => {
  const { t } = useTranslation();
  return <span>{t("Press 'Reset Game' to start.")}</span>;
};

export default LoadingMessage;
