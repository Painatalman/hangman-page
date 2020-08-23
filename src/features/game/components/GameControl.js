import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';

import InvisibleButNavigable from '../../../components/InvisibleButNavigable';
import LanguageSelector from '../../language/LanguageSelector';
import { start } from '../gameSlice';
import GameHeadField from './GameHeadField';

const GameControlTitle = InvisibleButNavigable(styled.h2``);
const Wrapper = styled.section`
  display: flex;
  align-items: space-between;
`;

const Reset = styled.button`
  background: transparent;
  font-size: 1.5rem;
  text-decoration: underline;
  cursor: pointer;
  padding: 0.2rem 1rem;
  border: none;
  text-transform: uppercase;
  font-family: inherit;
`;

function GameControl() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <Wrapper>
      <GameControlTitle>{t('Game Controls')}</GameControlTitle>
      <Reset
        type="button"
        onClick={() => {
          dispatch(start());
        }}
      >
        {t('Reset game')}
      </Reset>
      <div>
        <LanguageSelector />
        <GameHeadField />
      </div>
    </Wrapper>
  );
}

export default GameControl;
