import { getComponentThemeToken as getToken } from '@e-shop/theme';

import type { ButtonComponentPalette } from '@e-shop/theme/types';
import type { ObjectValues } from '@e-shop/types';

export const BUTTON_COLOR_VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
} as const;

export const _BUTTON_STATE = {
  BASE: 'base',
  INTERACT: 'interact',
  DISABLED: 'disabled',
} as const;

export const BUTTON_VARIANT = {
  OUTLINE: 'outline',
  SOLID: 'solid',
} as const;

export type ButtonColorVariant = ObjectValues<typeof BUTTON_COLOR_VARIANT>;

export type ButtonState = ObjectValues<typeof _BUTTON_STATE>;

export type ButtonVariant = ObjectValues<typeof BUTTON_VARIANT>;

type ButtonVariantProp = {
  variant?: ButtonVariant;
};

type ButtonColorVariantProp = {
  colorVariant?: ButtonColorVariant;
};

type ButtonFullWidthProp = {
  fullWidth?: boolean;
};

export type InternalButtonProps = ButtonVariantProp &
  ButtonColorVariantProp &
  ButtonFullWidthProp;

type PaletteVariant = Record<ButtonColorVariant, ButtonComponentPalette>;

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

type GetPaletteStateParam = {
  state: ButtonState;
};

type GetPaletteParam = Required<
  GetPaletteStateParam & ButtonVariantProp & ButtonColorVariantProp
>;

export function getPalette({
  variant,
  state,
  colorVariant,
}: GetPaletteParam): ButtonComponentPalette {
  return palette[variant][state][colorVariant];
}
