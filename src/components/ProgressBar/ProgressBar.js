/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--borderRadius': 2 + 'px',
    '--height': 8 + 'px',
  },
  medium: {
    '--borderRadius': 4 + 'px',
    '--height': 12 + 'px',
  },
  large: {
    '--borderRadius': 8 + 'px',
    '--height': 16 + 'px',
    '--padding': 4 + 'px',
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  // styles.append('value', value);
  if (value < 0 || value > 100) {
    throw new Error('Value must be within 0-100');
  }

  return (
    <Wrapper style={styles}>
      <InnerBar style={styles} value={value}></InnerBar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* min-height: var(--height); */
  border-radius: var(--borderRadius);
  width: 100%;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
  overflow: hidden;
  /* background: linear-gradient(
    90deg,
    ${COLORS.primary} ${(props) => props.value}%,
    ${COLORS.transparentGray15} ${(props) => 100 - props.value}%
  ); */
`;

const InnerBar = styled.div`
  min-height: var(--height);
  width: ${(props) => props.value}%;
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
