'use client';

import styled, { css } from 'styled-components';
import * as polished from 'polished';

const borderColor = '#cbcbcb';

export const FieldsetWrapper = styled.fieldset`
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;
`;

export const Input = styled.input`
  position: absolute;
  inset: 0;
  cursor: pointer;
  opacity: 0;
`;

export const Tile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid ${borderColor};
  width: 19rem;
  min-height: 19rem;
  border-radius: 1rem;
  text-align: center;
  padding: 2rem;

  &:has(${Input}:checked) {
    background-color: ${({ theme }) =>
      polished.lighten(0.3, theme.color.primary)};
    border-color: ${({ theme }) => theme.color.primary};
  }

  &:has(${Input}:hover) {
    border-color: ${({ theme }) => theme.color.primary};
  }

  &:has(${Input}:focus) {
    outline: auto;
  }
`;

const textStyles = css`
  font-size: 2rem;
  line-height: 3rem;
`;

export const Label = styled.label`
  display: block;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  ${textStyles}
`;

export const AdditionalText = styled.p`
  ${textStyles}
`;

export const Image = styled.img`
  object-fit: contain;
  display: inline-block;
  width: 12rem;
  height: 7.5rem;
  margin: 0.5rem 0;
`;
