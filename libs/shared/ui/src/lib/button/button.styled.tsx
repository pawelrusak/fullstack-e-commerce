import styled, { css } from 'styled-components';
import { theme, getComponentThemeToken as getToken } from '@e-shop/theme';
import type { ButtonComponentPalette } from '@e-shop/theme/types';

export type ButtonProps = {
  variant?: 'outline' | 'solid';
  colorVariant?: 'primary' | 'secondary';
  fullWidth?: boolean;
};

const DISABLED_COLOR = '#cbcbcb';

type ColorVariant = Record<Required<ButtonProps>['colorVariant'], string>;

type PaletteVariant = Record<
  Required<ButtonProps>['colorVariant'],
  ButtonComponentPalette
>;

const defaultPalette: PaletteVariant = {
  primary: getToken('button.variant.primary.default.palette'),
  secondary: getToken('button.variant.secondary.default.palette'),
};

const defaultInteractPalette: PaletteVariant = {
  primary: getToken('button.variant.primary.defaultInteract.palette'),
  secondary: getToken('button.variant.secondary.defaultInteract.palette'),
};

const outlineFontColors: ColorVariant = {
  primary: theme.color.primary,
  secondary: theme.color.text,
};

export const Button = styled.button<ButtonProps>`
  all: unset;
  display: inline-block;
  box-sizing: border-box;
  font-family: ${getToken('button.base.fontFamily')};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 2rem;
  padding: 1.5rem 3.9rem;
  line-height: 3rem;
  border-radius: 1rem;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  ${({ colorVariant = 'primary' }) => defaultPalette[colorVariant]}

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      display: flex;
      width: 100%;
      justify-content: center;
    `}

  &:is(:hover, :focus) {
    ${({ colorVariant = 'primary' }) => defaultInteractPalette[colorVariant]}
  }

  &:focus {
    outline: auto;
  }

  &:disabled,
  &[aria-disabled='true'] {
    cursor: default;
    background: ${DISABLED_COLOR};
    border-color: ${DISABLED_COLOR};
    pointer-events: none;
  }

  ${({ variant = 'solid', colorVariant = 'primary' }) =>
    variant === 'outline' &&
    css`
      background: ${({ theme }) => theme.color.background};
      color: ${outlineFontColors[colorVariant]};

      &:disabled,
      &[aria-disabled='true'] {
        color: ${DISABLED_COLOR};
        background: ${({ theme }) => theme.color.background};
        pointer-events: none;
      }
    `}
`;
