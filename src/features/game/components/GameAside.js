import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import styled from 'styled-components';

const Wrapper = styled.aside`
  position: absolute;
  right: 0;
  color: gray;
  top: 8rem;
  transform: rotate(-20deg);
  width: 8rem;
  text-align: center;
  text-decoration: underline;
  font-family: 'Architects Daughter';
`;

function GameAside() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <a
        href={t('hangmanPageAsideLink')}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Trans i18nKey="hangmanPageAside">
          Who is <br />
          Hangman Page?
        </Trans>
      </a>
    </Wrapper>
  );
}

export default GameAside;
