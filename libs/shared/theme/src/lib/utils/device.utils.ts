import { screens } from '../theme/tokens';

import type { AppScreens } from '../theme/tokens/types';

type Device = AppScreens;

function getMaxWidthFeatures(maxWidth: string) {
  return `(max-width: ${maxWidth})`;
}

export const device: Partial<Device> = {
  sm: getMaxWidthFeatures(screens.sm),
  md: getMaxWidthFeatures(screens.md),
  lg: getMaxWidthFeatures(screens.lg),
  xl: getMaxWidthFeatures(screens.xl),
  xxl: getMaxWidthFeatures(screens.xxl),
} satisfies Partial<Device>;
