import { css } from 'styled-components';
import { getComponentThemeToken as getToken } from '@e-shop/theme';

import type {
  PanelTitleSizeModifier,
  PanelTitleSizeNamespaceKey,
  PanelTitleSize as InternalPanelTitleSize,
} from '@e-shop/theme/types';
import type { ObjectValues, PartialConstantCaseKeyMap } from '@e-shop/types';

const { title: titleToken } = getToken('panel');

/**
 * ******************************************************************************
 *                                   Size
 * ******************************************************************************
 */
const TITLE_SIZE_NAMESPACE: PanelTitleSizeNamespaceKey = 'size';

export const PANEL_TITLE_SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
} satisfies PartialConstantCaseKeyMap<InternalPanelTitleSize>;

export type PanelTitleSize = ObjectValues<typeof PANEL_TITLE_SIZE>;

export function getTitleSizeModifierKey(
  size: PanelTitleSize,
): PanelTitleSizeModifier {
  return `${TITLE_SIZE_NAMESPACE}-${size}`;
}

export function getTitleSizeStyle(
  size: PanelTitleSize = PANEL_TITLE_SIZE.MEDIUM,
) {
  const sizeModifierKey = getTitleSizeModifierKey(size);

  return css`
    font-family: ${titleToken[sizeModifierKey].initial.fontFamily};
    font-size: ${titleToken[sizeModifierKey].initial.fontSize};
    font-weight: ${titleToken[sizeModifierKey].initial.fontWeight};
    line-height: ${titleToken[sizeModifierKey].initial.lineHeight};
  `;
}

/**
 * ******************************************************************************
 *                                   Rest
 * ******************************************************************************
 */
type PanelTitleSizeProp = {
  size?: PanelTitleSize;
};

export type InternalPanelTitleProps = PanelTitleSizeProp;
