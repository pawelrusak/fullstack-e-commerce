import { css } from 'styled-components';
import { getComponentThemeToken as getToken } from '@e-shop/theme';

import type {
  IconButtonVariantModifier,
  IconButtonVariantNamespaceKey,
  IconButtonState,
  IconButtonVariant as InternalIconButtonVariant,
} from '@e-shop/theme/types';
import type { ObjectValues, PartialConstantCaseKeyMap } from '@e-shop/types';

const { root: rootToken } = getToken('iconButton');

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

export type InternalIconButtonProps = IconButtonVariantProp;

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
