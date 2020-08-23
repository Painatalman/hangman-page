import React, { useMemo } from 'react';
import { Trans } from 'react-i18next';

import PropTypes from 'prop-types';

import styled from 'styled-components';

import InvisibleButNavigable from '../InvisibleButNavigable';
import hangmanPageHead from './page-head.png';

const bodyColor = 'black';
const opacityTransition = 'opacity 250ms ease-in-out';

const Doll = styled.figure`
  width: 120px;
  padding-bottom: 35px;
  position: relative;
  margin: auto;
`;

const DollCaption = InvisibleButNavigable(styled.figcaption``);

const Head = styled.img`
  width: 50%;
  display: block;
  margin: auto;
  opacity: ${({ nErrors }) => (nErrors > 0 ? '1' : '0')};
  transition: ${opacityTransition};
`;

const Torso = styled.div`
  width: 5px;
  border-radius: 5px;
  margin: 5px auto;
  height: 90px;
  background: ${bodyColor};
  opacity: ${({ nErrors }) => (nErrors > 1 ? '1' : '0')};
  transition: ${opacityTransition};
`;

const Limb = styled.div`
  width: 5px;
  border-radius: 5px;
  height: 30px;
  background: ${bodyColor};
  position: absolute;
  transition: ${opacityTransition};
`;

const LeftArm = styled(Limb)`
  transform: rotate(30deg);
  top: 85px;
  left: 35px;
  opacity: ${({ nErrors }) => (nErrors > 2 ? '1' : '0')};
`;

const RightArm = styled(Limb)`
  transform: rotate(-30deg);
  top: 85px;
  right: 35px;
  opacity: ${({ nErrors }) => (nErrors > 3 ? '1' : '0')};
`;

const LeftLeg = styled(Limb)`
  transform: rotate(20deg);
  top: 155px;
  left: 45px;
  opacity: ${({ nErrors }) => (nErrors > 4 ? '1' : '0')};
`;

const RightLeg = styled(Limb)`
  transform: rotate(-20deg);
  top: 155px;
  right: 45px;
  opacity: ${({ nErrors }) => (nErrors > 5 ? '1' : '0')};
`;

function HangmanPage({ nErrors, headSrc }) {
  const chancesLeft = useMemo(() => 6 - nErrors, [nErrors]);

  return (
    <Doll>
      <Head nErrors={nErrors} src={headSrc || hangmanPageHead} alt="" />
      <Torso nErrors={nErrors} />
      <LeftArm nErrors={nErrors} />
      <RightArm nErrors={nErrors} />
      <LeftLeg nErrors={nErrors} />
      <RightLeg nErrors={nErrors} />
      <DollCaption>
        <Trans i18nKey="nrErrorsFigCaption">
          Chances left: {{ chancesLeft }}
        </Trans>
      </DollCaption>
    </Doll>
  );
}

HangmanPage.propTypes = {
  nErrors: PropTypes.number,
  headSrc: PropTypes.string,
};

HangmanPage.defaultProps = {
  nErrors: 0,
  headSrc: hangmanPageHead,
};

export default HangmanPage;
