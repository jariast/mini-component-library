import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    iconSize: 16,
    fontSize: 14 / 16 + 'rem',
    borderSize: '1px',
    inputLeftMargin: 8,
    strokeWidth: 1,
    inputHeight: 24 / 16 + 'rem',
    iconTopPosition: '4px',
  },
  large: {
    iconSize: 24,
    fontSize: 18 / 16 + 'rem',
    borderSize: '2px',
    inputLeftMargin: 12,
    strokeWidth: 2,
    inputHeight: 36 / 16 + 'rem',
    iconTopPosition: '6px',
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = SIZES[size];

  if (!styles) {
    throw new Error('Styles not found');
  }

  return (
    <Wrapper
      style={{
        '--padding-left': styles.inputLeftMargin + styles.iconSize + 'px',
        '--border-size': styles.borderSize,
      }}
      width={width}
      htmlFor="text"
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper
        style={{
          '--iconTopPosition': styles.iconTopPosition,
        }}
      >
        <Icon
          id={icon}
          size={styles.iconSize}
          strokeWidth={styles.strokeWidth}
        ></Icon>
      </IconWrapper>
      <Input
        id="text"
        style={{
          '--input-left-margin':
            styles.inputLeftMargin + styles.iconSize + 'px',
          '--font-size': styles.fontSize,
          '--height': styles.inputHeight,
        }}
        placeholder={placeholder}
      ></Input>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  width: ${(p) => p.width}px;
  display: block;
  border-bottom: var(--border-size) solid ${COLORS.black};
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  border: 0;
  padding: 0;
  padding-left: var(--input-left-margin);
  font-size: var(--font-size);
  font-weight: 700;
  color: ${COLORS.gray700};
  height: var(--height);

  ::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:hover {
    color: ${COLORS.black};
  }

  &:focus {
    outline-offset: 4px;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: var(--iconTopPosition);
  color: ${COLORS.gray500};

  ${Wrapper}:hover & {
    color: ${COLORS.black};
  }
`;

export default IconInput;
