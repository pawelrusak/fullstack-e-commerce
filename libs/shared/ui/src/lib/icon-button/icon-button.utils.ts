import { css } from 'styled-components';
import { getComponentThemeToken as getToken } from '@e-shop/theme';

import type {
  IconButtonVariantModifier,
  IconButtonVariantNamespaceKey,
  IconButtonState,
  IconButtonVariant as InternalIconButtonVariant,
  IconButtonSizeModifier,
  IconButtonSizeNamespaceKey,
  IconButtonSize as InternalIconButtonSize,
} from '@e-shop/theme/types';
import type { ObjectValues, PartialConstantCaseKeyMap } from '@e-shop/types';

const { root: rootToken } = getToken('iconButton');

/**
 * ******************************************************************************
 *                                   Size
 * ******************************************************************************
 */
const SIZE_NAMESPACE: IconButtonSizeNamespaceKey = 'size';

export const ICON_BUTTON_SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} satisfies PartialConstantCaseKeyMap<InternalIconButtonSize>;

export type IconButtonSize = ObjectValues<typeof ICON_BUTTON_SIZE>;

type IconButtonSizeProp = {
  size?: IconButtonSize;
};

function addSizeKey(size: IconButtonSize): IconButtonSizeModifier {
  return `${SIZE_NAMESPACE}-${size}`;
}

export function getSizeStyle(size: IconButtonSize) {
  const sizeKey = addSizeKey(size);

  return css`
    width: ${rootToken[sizeKey].initial.width};
    height: ${rootToken[sizeKey].initial.height};
  `;
}

/**
 * ******************************************************************************
 *                                   Variant
 * ******************************************************************************
 */
const VARIANT_NAMESPACE: IconButtonVariantNamespaceKey = 'variant';

export const ICON_BUTTON_VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  OUTLINE_PRIMARY: 'outline-primary',
  OUTLINE_SECONDARY: 'outline-secondary',
} satisfies PartialConstantCaseKeyMap<InternalIconButtonVariant>;

export type IconButtonVariant = ObjectValues<typeof ICON_BUTTON_VARIANT>;

type IconButtonVariantProp = {
  variant?: IconButtonVariant;
};

function getVariantPaletteProperties(
  modifierKey: IconButtonVariantModifier,
  state: IconButtonState,
) {
  return css`
    background-color: ${rootToken[modifierKey][state].backgroundColor};
    border-color: ${rootToken[modifierKey][state].borderColor};
    color: ${rootToken[modifierKey][state].color};
  `;
}

function addVariantKey(variant: IconButtonVariant): IconButtonVariantModifier {
  return `${VARIANT_NAMESPACE}-${variant}`;
}

export function getVariantStyle(variant: IconButtonVariant) {
  const variantKey = addVariantKey(variant);

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
export type InternalIconButtonProps = IconButtonVariantProp &
  IconButtonSizeProp;
