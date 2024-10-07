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
import type { ObjectValues, ConstantCaseKeyMap } from '@e-shop/types';

const { root: rootToken } = getToken('button');

const SIZE_NAMESPACE: ButtonSizeNamespaceKey = 'size';

const VARIANT_NAMESPACE: `${ButtonVariantNamespaceKey}-` = 'variant-';

type PartialConstantCaseKeyMap<T extends string> = Partial<
  ConstantCaseKeyMap<T>
>;

export const BUTTON_COLOR_VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
} satisfies PartialConstantCaseKeyMap<ButtonBaseColorVariant>;

type Variant = ButtonOutlineNamespaceKey | 'solid';

export const BUTTON_VARIANT = {
  OUTLINE: 'outline',
  SOLID: 'solid',
} satisfies PartialConstantCaseKeyMap<Variant>;

export const BUTTON_SIZE = {
  SMALL: 'small',
  LARGE: 'large',
} satisfies PartialConstantCaseKeyMap<ButtonSize>;

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
