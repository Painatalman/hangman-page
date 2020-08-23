import React from 'react';
import { useTranslation } from 'react-i18next';

import styled from 'styled-components';

const Title = styled.h1`
  font-family: 'Architects Daughter', cursive;
  text-transform: none;
  text-align: center;
  font-size: 1rem;
  line-height: 1;
`;

const MainTitle = styled.i`
  text-transform: uppercase;
  font-size: 1.5rem;
  font-style: normal;
`;

const Subtitle = styled.span`
  display: inline-block;
  margin-left: 1rem;
`;

export default () => {
  const { t } = useTranslation();

  return (
    <Title>
      <MainTitle lang="en">Hangman (Page)</MainTitle>
      <Subtitle>{t('The Game')}</Subtitle>
    </Title>
  );
};
