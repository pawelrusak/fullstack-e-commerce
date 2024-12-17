import { screens } from '../theme/tokens';

import type { AppScreens } from '../theme/tokens/types';

type Device = AppScreens;

function getMaxWidthFeatures(maxWidth: string) {
  return `min-width: ${maxWidth}`;
}

export const device = {
  /**
   * @device min-width: 640px
   */
  sm: getMaxWidthFeatures(screens.sm),
  /**
   * @device min-width: 768px
   */
  md: getMaxWidthFeatures(screens.md),
  /**
   * @device min-width: 1024px
   */
  lg: getMaxWidthFeatures(screens.lg),
  /**
   * @device min-width: 1280px
   */
  xl: getMaxWidthFeatures(screens.xl),
  /**
   * @device min-width: 1536px
   */
  xxl: getMaxWidthFeatures(screens.xxl),
} satisfies Partial<Device>;
