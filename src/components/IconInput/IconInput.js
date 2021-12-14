import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--icon-size': 16,
    '--font-size': 14 / 16 + 'rem',
    '--border-size': '1px',
    '--input-left-margin': '8px',
    '--stroke-width': 1,
  },
  large: {
    '--icon-size': 24,
    '--font-size': 18 / 16 + 'rem',
    '--border-size': '2px',
    '--input-left-margin': '12px',
    '--stroke-width': 2,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = SIZES[size];

  return (
    <Wrapper style={styles} width={width}>
      <Icon
        id={icon}
        size={styles['--icon-size']}
        strokeWidth={styles['--stroke-width']}
      ></Icon>
      <Input style={styles} placeholder={placeholder}></Input>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: ${(p) => p.width}px;
  display: flex;
  border-bottom: var(--border-size) solid ${COLORS.black};
`;

const Input = styled.input`
  width: 100%;
  border: 0;
  padding: 0;
  margin-left: var(--input-left-margin);
  font-size: var(--font-size);
  font-weight: 700;
  color: ${COLORS.gray700};

  ::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

export default IconInput;
