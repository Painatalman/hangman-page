import React from 'react';
import { Trans } from 'react-i18next';
import { useSelector } from 'react-redux';

import { selectSolution } from '../gameSlice';

const SolutionMessage = () => {
  const solution = useSelector(selectSolution);

  return (
    <Trans i18nKey="revealSolution" solution={solution}>
      The word was <strong>{{ solution }}</strong>
    </Trans>
  );
};

export default SolutionMessage;
