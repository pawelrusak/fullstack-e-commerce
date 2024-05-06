'use client';

import React from 'react';
import styled from 'styled-components';

export const Fieldset = styled.fieldset`
  max-width: 31rem;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

type StyledButtonProps = {
  backgroundColor?: React.CSSProperties['backgroundColor'];
  order?: React.CSSProperties['order'];
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
  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'transparent'};

  transition: all 0.2s ease-in;

  &:hover:enabled,
  &:focus:enabled {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.background};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const Input = styled.input`
  all: unset;
  appearance: textfield;
  font-size: 3.6rem;
  line-height: 4.6rem;
  width: 4ch;
  margin: 0 1rem;
  text-align: center;
  padding: 0.2rem;
  height: 100%;
  border: 1px solid transparent;
  border-radius: 1rem;
  cursor: text;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-family: ${({ theme }) => theme.fontFamily.poppins};

  &:hover,
  &:focus {
    border-color: #cbcbcb;
  }
`;
