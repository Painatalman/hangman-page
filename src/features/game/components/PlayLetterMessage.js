import React from 'react';
import { useTranslation } from 'react-i18next';

import styled from 'styled-components';

const Message = styled.span``;

const SolutionMessage = () => {
  const { t } = useTranslation();

  return <Message>{t('Type or select a letter')}</Message>;
};

export default SolutionMessage;
