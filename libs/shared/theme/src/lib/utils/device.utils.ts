import { screens } from '../theme/tokens';

import type { AppScreens } from '../theme/tokens/types';

type Device = AppScreens;

function getMinWidthFeatures(minWidth: string) {
  return `min-width: ${minWidth}`;
}

export const device = {
  /**
   * @device min-width: 640px
   */
  sm: getMinWidthFeatures(screens.sm),
  /**
   * @device min-width: 768px
   */
  md: getMinWidthFeatures(screens.md),
  /**
   * @device min-width: 1024px
   */
  lg: getMinWidthFeatures(screens.lg),
  /**
   * @device min-width: 1280px
   */
  xl: getMinWidthFeatures(screens.xl),
  /**
   * @device min-width: 1536px
   */
  xxl: getMinWidthFeatures(screens.xxl),
} satisfies Partial<Device>;
