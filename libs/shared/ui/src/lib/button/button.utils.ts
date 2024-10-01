import { css } from 'styled-components';
import { getComponentThemeToken as getToken } from '@e-shop/theme';

import type {
  ButtonVariantModifier,
  ButtonSizeModifier,
  ButtonSize,
} from '@e-shop/theme/types';
import type { ObjectValues, ConstantCaseKeyMap } from '@e-shop/types';

const { root: rootToken } = getToken('button');

export const BUTTON_COLOR_VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
} as const;

export const BUTTON_VARIANT = {
  OUTLINE: 'outline',
  SOLID: 'solid',
} as const;

export const BUTTON_SIZE: ConstantCaseKeyMap<ButtonSize> = {
  SMALL: 'small',
  LARGE: 'large',
};

const VARIANT_KEY: ConstantCaseKeyMap<ButtonVariantModifier> = {
  VARIANT_PRIMARY: 'variant-primary',
  VARIANT_SECONDARY: 'variant-secondary',
  VARIANT_OUTLINE_PRIMARY: 'variant-outline-primary',
  VARIANT_OUTLINE_SECONDARY: 'variant-outline-secondary',
};

const SIZE_KEY: ConstantCaseKeyMap<ButtonSizeModifier> = {
  SIZE_SMALL: 'size-small',
  SIZE_DEFAULT: 'size-default',
  SIZE_LARGE: 'size-large',
};

export type ButtonColorVariant = ObjectValues<typeof BUTTON_COLOR_VARIANT>;

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

type ButtonSizeProp = {
  size?: ButtonSize;
};

export type InternalButtonProps = ButtonVariantProp &
  ButtonColorVariantProp &
  ButtonFullWidthProp &
  ButtonSizeProp;

type GetVariantKeyParam = ButtonVariantProp & ButtonColorVariantProp;

const VARIANT = BUTTON_VARIANT;
const COLOR_VARIANT = BUTTON_COLOR_VARIANT;

export function getVariantKey({
  variant = VARIANT.SOLID,
  colorVariant = COLOR_VARIANT.PRIMARY,
}: GetVariantKeyParam = {}) {
  if (variant === VARIANT.OUTLINE && colorVariant === COLOR_VARIANT.PRIMARY) {
    return VARIANT_KEY.VARIANT_OUTLINE_PRIMARY;
  }

  if (variant === VARIANT.OUTLINE && colorVariant === COLOR_VARIANT.PRIMARY) {
    return VARIANT_KEY.VARIANT_OUTLINE_SECONDARY;
  }

  if (variant === VARIANT.SOLID && colorVariant === COLOR_VARIANT.SECONDARY) {
    return VARIANT_KEY.VARIANT_SECONDARY;
  }

  return VARIANT_KEY.VARIANT_PRIMARY;
}

type GetVariantPaletteStyleParam = {
  colorVariant?: ButtonColorVariant;
  variant?: ButtonVariant;
};

export function getVariantPaletteStyle({
  colorVariant = COLOR_VARIANT.PRIMARY,
  variant = VARIANT.SOLID,
}: GetVariantPaletteStyleParam) {
  const variantKey = getVariantKey({
    colorVariant,
    variant,
  });

  return css`
    background-color: ${rootToken[variantKey].initial.backgroundColor};
    border-color: ${rootToken[variantKey].initial.borderColor};
    color: ${rootToken[variantKey].initial.color};

    &:is(:hover, :focus) {
      background-color: ${rootToken[variantKey].interact.backgroundColor};
      border-color: ${rootToken[variantKey].interact.borderColor};
      color: ${rootToken[variantKey].interact.color};
    }

    &:disabled,
    &[aria-disabled='true'] {
      background-color: ${rootToken[variantKey].disabled.backgroundColor};
      border-color: ${rootToken[variantKey].disabled.borderColor};
      color: ${rootToken[variantKey].disabled.color};
    }
  `;
}

type GetSizeKeyParam = {
  size?: ButtonSize;
};

export function getSizeKey({ size }: GetSizeKeyParam = {}) {
  if (size === BUTTON_SIZE.SMALL) {
    return SIZE_KEY.SIZE_SMALL;
  }

  if (size === BUTTON_SIZE.LARGE) {
    return SIZE_KEY.SIZE_LARGE;
  }

  return SIZE_KEY.SIZE_DEFAULT;
}

type GetSizeStyleParam = {
  size?: ButtonSize;
};

export function getSizeStyle({ size }: GetSizeStyleParam = {}) {
  const sizeKey = getSizeKey({
    size,
  });

  return css`
    font-size: ${rootToken[sizeKey].initial.fontSize};
    line-height: ${rootToken[sizeKey].initial.lineHeight};
    padding: ${rootToken[sizeKey].initial.padding};
  `;
}
