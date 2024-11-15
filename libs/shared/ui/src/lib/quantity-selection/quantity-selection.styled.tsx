'use client';

import React from 'react';
import styled from 'styled-components';
import { getComponentThemeToken as getToken } from '@e-shop/theme';

const { button: buttonToken, input: inputToken } =
  getToken('quantitySelection');

export const RootFieldset = styled.fieldset`
  max-width: 31rem;
  width: 100%;
`;

export const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

type StyledButtonProps = {
  backgroundColor?: React.CSSProperties['backgroundColor'];
  order?: React.CSSProperties['order'];
  isAlter?: boolean;
};

export const Button = styled.button<StyledButtonProps>`
  all: unset;
  box-sizing: border-box;
  text-align: center;
  vertical-align: middle;
  padding: 1rem;
  border-radius: 9999px;
  height: 5.6rem;
  width: 100%;
  max-width: 5.6rem;
  cursor: pointer;
  order: ${({ order }) => order || 0};
  color: ${({ isAlter }) =>
    isAlter
      ? buttonToken.default['initial-alter'].color
      : buttonToken.default.initial.color};
  background-color: ${({ isAlter }) =>
    isAlter
      ? buttonToken.default['initial-alter'].backgroundColor
      : buttonToken.default.initial.backgroundColor};

  transition: all 0.2s ease-in;

  &:hover:enabled,
  &:focus:enabled {
    background-color: ${buttonToken.default.interact.backgroundColor};
    color: ${buttonToken.default.interact.color};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const Input = styled.input`
  all: unset;
  appearance: textfield;
  color: ${inputToken._base.color};
  font-family: ${inputToken._base.fontFamily};
  font-size: ${inputToken._base.fontSize};
  line-height: ${inputToken._base.lineHeight};
  font-weight: ${inputToken._base.fontWeight};
  width: 4ch;
  margin: 0 1rem;
  text-align: center;
  padding: 0.2rem;
  height: 100%;
  border: 1px solid ${inputToken.default.initial.borderColor};
  border-radius: 1rem;
  cursor: text;

  &:hover,
  &:focus {
    border-color: ${inputToken.default.interact.borderColor};
  }
`;
