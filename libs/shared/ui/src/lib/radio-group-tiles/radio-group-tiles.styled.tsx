'use client';

import styled from 'styled-components';
import { getComponentThemeToken as getToken } from '@e-shop/theme';

const {
  tile: tileToken,
  label: labelToken,
  additionalText: additionalTextToken,
} = getToken('radioGroupTiles');

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
  color: ${tileToken.default.initial.color};
  background-color: ${tileToken.default.initial.backgroundColor};
  border: 1px solid ${tileToken.default.initial.borderColor};
  width: 19rem;
  min-height: 19rem;
  border-radius: 1rem;
  text-align: center;
  padding: 2rem;

  &:has(${Input}:checked) {
    color: ${tileToken.default.checked.color};
    background-color: ${tileToken.default.checked.backgroundColor};
    border-color: ${tileToken.default.checked.borderColor};
  }

  &:has(${Input}:hover) {
    color: ${tileToken.default.interact.color};
    background-color: ${tileToken.default.interact.backgroundColor};
    border-color: ${tileToken.default.interact.borderColor};
  }

  &:has(${Input}:focus) {
    outline: auto;
  }
`;

export const Label = styled.label`
  display: block;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-family: ${labelToken._base.fontFamily};
  font-size: ${labelToken._base.fontSize};
  line-height: ${labelToken._base.lineHeight};
  font-weight: ${labelToken._base.fontWeight};
`;

export const AdditionalText = styled.p`
  font-family: ${additionalTextToken._base.fontFamily};
  font-size: ${additionalTextToken._base.fontSize};
  line-height: ${additionalTextToken._base.lineHeight};
  font-weight: ${additionalTextToken._base.fontWeight};
`;

export const Image = styled.img`
  object-fit: contain;
  display: inline-block;
  width: 12rem;
  height: 7.5rem;
  margin: 0.5rem 0;
`;

export const RootFieldset = styled.fieldset`
  display: flex;
  flex-wrap: wrap;
  gap: 2.2rem;

  &[aria-invalid='true'] ${Tile} {
    color: ${tileToken.default.invalid.color};
    background-color: ${tileToken.default.invalid.backgroundColor};
    border-color: ${tileToken.default.invalid.borderColor};
  }
`;
