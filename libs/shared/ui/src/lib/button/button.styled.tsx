import styled, { css } from 'styled-components';
import { getComponentThemeToken as getToken } from '@e-shop/theme';
import {
  BUTTON_VARIANT,
  BUTTON_COLOR_VARIANT,
  getPaletteStyles,
} from './button.utils';

import type { InternalButtonProps } from './button.utils';

const { root: rootToken } = getToken('button');

export type StyledButtonProps = InternalButtonProps;

export const Button = styled.button<StyledButtonProps>`
  all: unset;
  display: inline-block;
  box-sizing: border-box;
  font-family: ${rootToken._base.fontFamily};
  font-weight: ${rootToken._base.fontWeight};
  font-size: 2rem;
  padding: 1.5rem 3.9rem;
  line-height: 3rem;
  border-radius: 1rem;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;

  ${({
    variant = BUTTON_VARIANT.SOLID,
    colorVariant = BUTTON_COLOR_VARIANT.PRIMARY,
  }) => getPaletteStyles({ variant, colorVariant })}

  ${({ variant, colorVariant = BUTTON_COLOR_VARIANT.PRIMARY }) =>
    variant === BUTTON_VARIANT.OUTLINE &&
    getPaletteStyles({ variant, colorVariant })}

  &:focus {
    outline: auto;
  }

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      display: flex;
      width: 100%;
      justify-content: center;
    `}

  &:disabled,
  &[aria-disabled='true'] {
    cursor: default;
    pointer-events: none;
  }
`;
