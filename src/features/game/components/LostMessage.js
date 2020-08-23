import React from 'react';
import { useTranslation } from 'react-i18next';

import SolutionMessage from './SolutionMessage';

const LostMessage = () => {
  const { t } = useTranslation();

  return (
    <>
      {t('You lose!')} <SolutionMessage />
    </>
  );
};

export default LostMessage;
