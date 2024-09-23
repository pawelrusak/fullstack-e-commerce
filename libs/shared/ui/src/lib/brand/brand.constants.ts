import type { UppercaseKeyMap } from '@e-shop/types';
import type {
  BrandAccentThemeVariant,
  BrandBaseThemeVariant,
} from '@e-shop/theme/types';

export const ACCENT_THEME: UppercaseKeyMap<BrandAccentThemeVariant> = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

export const BASE_THEME: UppercaseKeyMap<BrandBaseThemeVariant> = {
  DEFAULT: 'default',
  INVERT: 'invert',
};
