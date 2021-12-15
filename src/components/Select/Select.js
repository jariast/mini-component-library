import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NaviteSelect value={value} onChange={onChange}>
        {children}
      </NaviteSelect>
      <StyledSelect>
        <span>{displayedValue}</span>
        <IconWrapper>
          <Icon id="chevron-down" size="14" strokeWidth="2"></Icon>
        </IconWrapper>
      </StyledSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const NaviteSelect = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const StyledSelect = styled.div`
  background-color: ${COLORS.transparentGray15};
  width: fit-content;
  height: 100%;
  padding: 12px 16px;
  color: ${COLORS.gray700};
  border-radius: 8px;

  ${NaviteSelect}:hover + & {
    color: ${COLORS.black};
  }

  ${NaviteSelect}:focus + & {
    outline: auto;
  }
`;

const IconWrapper = styled.div`
  display: inline-block;
  margin-left: 24px;
`;

export default Select;
