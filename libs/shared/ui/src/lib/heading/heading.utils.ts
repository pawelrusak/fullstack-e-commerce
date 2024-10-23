import { css } from 'styled-components';
import { getComponentThemeToken as getToken } from '@e-shop/theme';

import type {
  HeadingLevelModifier,
  HeadingLevelNamespaceKey,
  HeadingLevel as InternalHeadingLevel,
} from '@e-shop/theme/types';
import type { ObjectValues } from '@e-shop/types';

const { root: rootToken } = getToken('heading');

const HEADING_LEVEL_NAMESPACE: HeadingLevelNamespaceKey = 'level';

export const HEADING_LEVEL = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
} satisfies Partial<Record<number, InternalHeadingLevel>>;

type NumericHeadingLevel = ObjectValues<typeof HEADING_LEVEL>;

export type HeadingLevel = NumericHeadingLevel | `${NumericHeadingLevel}`;

function getLevelModifierKey(size: HeadingLevel): HeadingLevelModifier {
  return `${HEADING_LEVEL_NAMESPACE}-${size}`;
}

export function getLevelStyle(level: HeadingLevel = HEADING_LEVEL[1]) {
  const levelModifierKey = getLevelModifierKey(level);

  return css`
    font-size: ${rootToken[levelModifierKey].initial.fontSize};
    line-height: ${rootToken[levelModifierKey].initial.lineHeight};
    font-family: ${rootToken[levelModifierKey].initial.fontFamily};
    font-weight: ${rootToken[levelModifierKey].initial.fontWeight};
  `;
}
