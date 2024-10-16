import { css } from 'styled-components';
import { getComponentThemeToken as getToken } from '@e-shop/theme';

import type {
  ButtonBaseColorVariant,
  ButtonVariantModifier,
  ButtonVariantNamespaceKey,
  ButtonSizeModifier,
  ButtonSizeNamespaceKey,
  ButtonOutlineNamespaceKey,
  ButtonState,
  ButtonSize,
} from '@e-shop/theme/types';
import type { ObjectValues, PartialConstantCaseKeyMap } from '@e-shop/types';

const { root: rootToken } = getToken('button');

/**
 * ******************************************************************************
 *                                   Size
 * ******************************************************************************
 */
const SIZE_NAMESPACE: ButtonSizeNamespaceKey = 'size';

export const BUTTON_SIZE = {
  SMALL: 'small',
  LARGE: 'large',
} satisfies PartialConstantCaseKeyMap<ButtonSize>;

const SIZE_KEY = {
  SIZE_SMALL: 'size-small',
  SIZE_DEFAULT: 'size-default',
  SIZE_LARGE: 'size-large',
} satisfies PartialConstantCaseKeyMap<ButtonSizeModifier>;

type ButtonFullWidthProp = {
  fullWidth?: boolean;
};

type ButtonSizeProp = {
  size?: ButtonSize;
};

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

/**
 * ******************************************************************************
 *                                   Variant
 * ******************************************************************************
 */
const VARIANT_NAMESPACE: `${ButtonVariantNamespaceKey}-` = 'variant-';

type ButtonVariantProp = {
  variant?: ButtonVariant;
};

type ButtonColorVariantProp = {
  colorVariant?: ButtonColorVariant;
};

export const BUTTON_COLOR_VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
} satisfies PartialConstantCaseKeyMap<ButtonBaseColorVariant>;

type Variant = ButtonOutlineNamespaceKey | 'solid';

export const BUTTON_VARIANT = {
  OUTLINE: 'outline',
  SOLID: 'solid',
} satisfies PartialConstantCaseKeyMap<Variant>;

export type ButtonColorVariant = ObjectValues<typeof BUTTON_COLOR_VARIANT>;

export type ButtonVariant = ObjectValues<typeof BUTTON_VARIANT>;

type GetVariantKeyParam = ButtonVariantProp & ButtonColorVariantProp;

const VARIANT = BUTTON_VARIANT;
const COLOR_VARIANT = BUTTON_COLOR_VARIANT;

type VariantMiddleTypeNamespace<TVariant extends string> = `${TVariant}-` | '';

export function getVariantKey({
  variant = VARIANT.SOLID,
  colorVariant = COLOR_VARIANT.PRIMARY,
}: GetVariantKeyParam = {}) {
  const VARIANT_TYPE_NAMESPACE = VARIANT_NAMESPACE;
  const VARIANT_MIDDLE_TYPE_NAMESPACE: VariantMiddleTypeNamespace<
    typeof variant
  > = variant !== VARIANT.SOLID ? `${variant}-` : '';

  const buttonVariantModifierKey: ButtonVariantModifier = `${VARIANT_TYPE_NAMESPACE}${VARIANT_MIDDLE_TYPE_NAMESPACE}${colorVariant}`;

  return buttonVariantModifierKey;
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

    &:hover,
    &:focus {
      ${getVariantPaletteProperties(variantKey, 'interact')};
    }

    &:disabled,
    &[aria-disabled='true'] {
      ${getVariantPaletteProperties(variantKey, 'disabled')};
    }
  `;
}

/**
 * ******************************************************************************
 *                                   Rest
 * ******************************************************************************
 */
export type InternalButtonProps = ButtonVariantProp &
  ButtonColorVariantProp &
  ButtonFullWidthProp &
  ButtonSizeProp;
