import { css } from 'styled-components';
import { getComponentThemeToken as getToken } from '@e-shop/theme';

import type {
  ButtonBaseColorVariant,
  ButtonVariantModifier,
  ButtonSizeModifier,
  ButtonSizeNamespaceKey,
  ButtonState,
  ButtonSize,
} from '@e-shop/theme/types';
import type { ObjectValues, ConstantCaseKeyMap } from '@e-shop/types';

const { root: rootToken } = getToken('button');

const SIZE_NAMESPACE: ButtonSizeNamespaceKey = 'size';

export const BUTTON_COLOR_VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
} satisfies ConstantCaseKeyMap<ButtonBaseColorVariant>;

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

// TODO: Apply Open–closed principle like in getSizeKey function
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

function getVariantPaletteProperties(
  modifierKey: ButtonVariantModifier,
  state: ButtonState,
) {
  return css`
    background-color: ${rootToken[modifierKey][state].backgroundColor};
    border-color: ${rootToken[modifierKey][state].borderColor};
    color: ${rootToken[modifierKey][state].color};
  `;
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
    ${getVariantPaletteProperties(variantKey, 'initial')};

    &:is(:hover, :focus) {
      ${getVariantPaletteProperties(variantKey, 'interact')};
    }

    &:disabled,
    &[aria-disabled='true'] {
      ${getVariantPaletteProperties(variantKey, 'disabled')};
    }
  `;
}

function addSizeNamespaceKeyPrefix(size: ButtonSize): ButtonSizeModifier {
  return `${SIZE_NAMESPACE}-${size}`;
}

export function getSizeKey(size?: ButtonSize): ButtonSizeModifier {
  return size ? addSizeNamespaceKeyPrefix(size) : SIZE_KEY.SIZE_DEFAULT;
}

export function getSizeStyle(size?: ButtonSize) {
  const sizeKey = getSizeKey(size);

  return css`
    font-size: ${rootToken[sizeKey].initial.fontSize};
    line-height: ${rootToken[sizeKey].initial.lineHeight};
    padding: ${rootToken[sizeKey].initial.padding};
  `;
}
