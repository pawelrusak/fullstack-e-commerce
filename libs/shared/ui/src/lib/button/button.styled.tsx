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

export type StyledButtonProps = {
  variant?: ButtonVariant;
  colorVariant?: ButtonColorVariant;
  fullWidth?: boolean;
};

type PaletteVariant = Record<ButtonColorVariant, ButtonComponentPalette>;

const BUTTON_STATE = {
  BASE: 'base',
  INTERACT: 'interact',
  DISABLED: 'disabled',
} as const;

type ButtonState = ObjectValues<typeof BUTTON_STATE>;

type PaletteState = Record<ButtonState, PaletteVariant>;

type Palette = Record<ButtonVariant, PaletteState>;

const palette: Palette = {
  solid: {
    base: {
      primary: getToken('button.variant.primary.default.palette'),
      secondary: getToken('button.variant.secondary.default.palette'),
    },
    interact: {
      primary: getToken('button.variant.primary.defaultInteract.palette'),
      secondary: getToken('button.variant.secondary.defaultInteract.palette'),
    },
    disabled: {
      primary: getToken('button.variant.primary.defaultDisabled.palette'),
      secondary: getToken('button.variant.secondary.defaultDisabled.palette'),
    },
  },
  outline: {
    base: {
      primary: getToken('button.variant.primary.outline.palette'),
      secondary: getToken('button.variant.secondary.outline.palette'),
    },
    interact: {
      primary: getToken('button.variant.primary.outlineInteract.palette'),
      secondary: getToken('button.variant.secondary.outlineInteract.palette'),
    },
    disabled: {
      primary: getToken('button.variant.primary.outlineDisabled.palette'),
      secondary: getToken('button.variant.secondary.outlineDisabled.palette'),
    },
  },
};

type GetPaletteParam = {
  variant: ButtonVariant;
  state: ButtonState;
  colorVariant: ButtonColorVariant;
};

function getPalette({
  variant,
  state,
  colorVariant,
}: GetPaletteParam): ButtonComponentPalette {
  return palette[variant][state][colorVariant];
}

export const Button = styled.button<StyledButtonProps>`
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
    getPalette({
      colorVariant,
      variant: BUTTON_VARIANT.SOLID,
      state: BUTTON_STATE.BASE,
    })}

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      display: flex;
      width: 100%;
      justify-content: center;
    `}

  &:is(:hover, :focus) {
    ${({ colorVariant = BUTTON_COLOR_VARIANT.PRIMARY }) =>
      getPalette({
        colorVariant,
        variant: BUTTON_VARIANT.SOLID,
        state: BUTTON_STATE.INTERACT,
      })}
  }

  &:focus {
    outline: auto;
  }

  &:disabled,
  &[aria-disabled='true'] {
    cursor: default;
    ${({ colorVariant = BUTTON_COLOR_VARIANT.PRIMARY }) =>
      getPalette({
        colorVariant,
        variant: BUTTON_VARIANT.SOLID,
        state: BUTTON_STATE.DISABLED,
      })}
    pointer-events: none;
  }

  ${({ variant, colorVariant = BUTTON_COLOR_VARIANT.PRIMARY }) =>
    variant === BUTTON_VARIANT.OUTLINE &&
    css`
      ${getPalette({
        colorVariant,
        variant,
        state: BUTTON_STATE.BASE,
      })};

      $:is(:hover, :focus) {
        ${getPalette({
          colorVariant,
          variant,
          state: BUTTON_STATE.INTERACT,
        })}
      }

      &:disabled,
      &[aria-disabled='true'] {
        ${getPalette({
          colorVariant,
          variant,
          state: BUTTON_STATE.DISABLED,
        })}
        pointer-events: none;
      }
    `}
`;
