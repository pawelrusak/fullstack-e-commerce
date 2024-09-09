import styled, { css } from 'styled-components';
import { getComponentThemeToken as getToken } from '@e-shop/theme';
import type { ButtonComponentPalette } from '@e-shop/theme/types';
import type { ObjectValues } from '@e-shop/types';

export const BUTTON_VARIANT = {
  OUTLINE: 'outline',
  SOLID: 'solid',
} as const;

export type ButtonVariant = ObjectValues<typeof BUTTON_VARIANT>;

export const BUTTON_COLOR_VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
} as const;

export type ButtonColorVariant = ObjectValues<typeof BUTTON_COLOR_VARIANT>;

export type ButtonProps = {
  variant?: ButtonVariant;
  colorVariant?: ButtonColorVariant;
  fullWidth?: boolean;
};

type PaletteVariant = Record<ButtonColorVariant, ButtonComponentPalette>;

const defaultPalette: PaletteVariant = {
  primary: getToken('button.variant.primary.default.palette'),
  secondary: getToken('button.variant.secondary.default.palette'),
};

const defaultInteractPalette: PaletteVariant = {
  primary: getToken('button.variant.primary.defaultInteract.palette'),
  secondary: getToken('button.variant.secondary.defaultInteract.palette'),
};

const defaultDisabledPalette: PaletteVariant = {
  primary: getToken('button.variant.primary.defaultDisabled.palette'),
  secondary: getToken('button.variant.secondary.defaultDisabled.palette'),
};

const outlinePalette: PaletteVariant = {
  primary: getToken('button.variant.primary.outline.palette'),
  secondary: getToken('button.variant.secondary.outline.palette'),
};

const outlineInteractPalette: PaletteVariant = {
  primary: getToken('button.variant.primary.outlineInteract.palette'),
  secondary: getToken('button.variant.secondary.outlineInteract.palette'),
};

const outlineDisabledPalette: PaletteVariant = {
  primary: getToken('button.variant.primary.outlineDisabled.palette'),
  secondary: getToken('button.variant.secondary.outlineDisabled.palette'),
};

export const Button = styled.button<ButtonProps>`
  all: unset;
  display: inline-block;
  box-sizing: border-box;
  font-family: ${getToken('button.base.fontFamily')};
  font-weight: ${getToken('button.base.fontWeight')};
  font-size: 2rem;
  padding: 1.5rem 3.9rem;
  line-height: 3rem;
  border-radius: 1rem;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  ${({ colorVariant = BUTTON_COLOR_VARIANT.PRIMARY }) =>
    defaultPalette[colorVariant]}

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      display: flex;
      width: 100%;
      justify-content: center;
    `}

  &:is(:hover, :focus) {
    ${({ colorVariant = BUTTON_COLOR_VARIANT.PRIMARY }) =>
      defaultInteractPalette[colorVariant]}
  }

  &:focus {
    outline: auto;
  }

  &:disabled,
  &[aria-disabled='true'] {
    cursor: default;
    ${({ colorVariant = BUTTON_COLOR_VARIANT.PRIMARY }) =>
      defaultDisabledPalette[colorVariant]}
    pointer-events: none;
  }

  ${({ variant, colorVariant = BUTTON_COLOR_VARIANT.PRIMARY }) =>
    variant === BUTTON_VARIANT.OUTLINE &&
    css`
      ${outlinePalette[colorVariant]};

      $:is(:hover, :focus) {
        ${outlineInteractPalette[colorVariant]}
      }

      &:disabled,
      &[aria-disabled='true'] {
        ${outlineDisabledPalette[colorVariant]}
        pointer-events: none;
      }
    `}
`;
