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
  ButtonSize as InternalButtonSize,
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
  MEDIUM: 'medium',
  LARGE: 'large',
} satisfies PartialConstantCaseKeyMap<InternalButtonSize>;

export type ButtonSize = ObjectValues<typeof BUTTON_SIZE>;

export function getSizeModifierKey(size: ButtonSize): ButtonSizeModifier {
  return `${SIZE_NAMESPACE}-${size}`;
}

export function getSizeStyle(size: ButtonSize = BUTTON_SIZE.MEDIUM) {
  const sizeModifierKey = getSizeModifierKey(size);

  return css`
    font-size: ${rootToken[sizeModifierKey].initial.fontSize};
    line-height: ${rootToken[sizeModifierKey].initial.lineHeight};
    padding: ${rootToken[sizeModifierKey].initial.padding};
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

type ButtonSizeProp = {
  size?: ButtonSize;
};

type ButtonFullWidthProp = {
  fullWidth?: boolean;
};

export type InternalButtonProps = ButtonVariantProp &
  ButtonColorVariantProp &
  ButtonFullWidthProp &
  ButtonSizeProp;
