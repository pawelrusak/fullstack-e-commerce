import { colorPalette } from './color-palette.reference.tokens';

import type {
  AppColor,
  AppFontFamily,
  AppFontWeight,
  AppLineHeights,
  AppFontSizes,
  AppScreens,
  AppSpace,
} from './system.tokens.types';

/**
 * TODO: Add colors: danger, attention, success.
 */
export const color: AppColor = {
  primary: colorPalette.primary[500],
  onPrimary: colorPalette.neutral[0],
  primaryBorder: colorPalette.primary[500],
  primaryInteract: colorPalette.primary[600],
  primaryBorderInteract: colorPalette.primary[600],
  onPrimaryDisabled: colorPalette.neutral[0],
  primaryDisabled: colorPalette.primary[300],
  primaryBorderDisabled: colorPalette.primary[300],

  primaryOutline: 'transparent',
  onPrimaryOutline: colorPalette.primary[500],
  primaryOutlineBorder: colorPalette.primary[500],
  onPrimaryOutlineInteract: colorPalette.neutral[0],
  primaryOutlineInteract: colorPalette.primary[600],
  primaryOutlineBorderInteract: colorPalette.primary[600],
  primaryOutlineDisabled: 'transparent',
  onPrimaryOutlineDisabled: colorPalette.neutral[300],
  primaryOutlineBorderDisabled: colorPalette.neutral[300],

  primaryContainer: colorPalette.primary[50],
  onPrimaryContainer: colorPalette.primary[500],

  secondary: colorPalette.secondary[500],
  onSecondary: colorPalette.neutral[0],
  secondaryBorder: colorPalette.secondary[500],
  secondaryInteract: colorPalette.secondary[600],
  secondaryBorderInteract: colorPalette.secondary[600],
  onSecondaryDisabled: colorPalette.neutral[0],
  secondaryDisabled: colorPalette.secondary[50],
  secondaryBorderDisabled: colorPalette.secondary[50],

  secondaryOutline: 'transparent',
  onSecondaryOutline: colorPalette.secondary[500],
  secondaryOutlineBorder: colorPalette.secondary[500],
  onSecondaryOutlineInteract: colorPalette.neutral[0],
  secondaryOutlineInteract: colorPalette.secondary[600],
  secondaryOutlineBorderInteract: colorPalette.secondary[600],
  secondaryOutlineDisabled: 'transparent',
  onSecondaryOutlineDisabled: colorPalette.neutral[300],
  secondaryOutlineBorderDisabled: colorPalette.neutral[300],

  tertiary: colorPalette.tertiary[300],

  surface: colorPalette.neutral[0],
  onSurface: colorPalette.neutral[800],
  onSurfaceVariant: colorPalette.primary[500],
  onSurfaceInteract: colorPalette.primary[500],
  surfacePlaceholder: 'hsl(0, 0%, 82%)',

  secondarySurface: colorPalette.neutral[50],
  onSecondarySurface: colorPalette.neutral[800],
  onSecondarySurfaceVariant: colorPalette.primary[500],

  background: colorPalette.neutral[0],
  onBackground: colorPalette.neutral[800],
  onBackgroundLink: colorPalette.primary[500],
  onBackgroundInteract: colorPalette.primary[500],
  onBackgroundLinkInteract: colorPalette.primary[600],

  border: colorPalette.neutral[50],
  error: 'hsl(348, 83%, 47%)',

  // TODO: Remove deprecated "secondBackground" color after refactoring
  secondBackground: colorPalette.neutral[50],
  // TODO: Remove deprecated "text" color after replacing with "onBackground" or "onSurface"
  text: colorPalette.neutral[800],
};

export const fontFamily: AppFontFamily = {
  // TODO: Remove deprecated "poppins" font family after refactoring
  poppins: ['Poppins', 'sans-serif'].join(', '),
  // TODO: Remove deprecated "montserrat" font family after refactoring
  montserrat: ['Montserrat', 'sans-serif'].join(', '),
  primary: ['Montserrat', 'sans-serif'].join(', '),
  secondary: ['Poppins', 'sans-serif'].join(', '),
};

export const fontWeight: AppFontWeight = {
  regular: 400,
  semiBold: 600,
  bold: 700,
};

export const fontSizes: AppFontSizes = {
  h1: '5.6rem',
  h2: '3.6rem',
  h3: '2.4rem',
  h4: '2.0rem',
  h5: '2.0rem',
  h6: '1.6rem',
  h7: '1.6rem',
  h8: '1.4rem',
  body: '2.0rem',
};

export const lineHeights: AppLineHeights = {
  /**
   * These values come from the design system in Figma
   * Each value is calculated as line-height / font-size.
   *
   * Example (h1 corresponds to 'Heading 1' in Figma):
   * Figma specifies line-height: 68px and font-size: 56px, so 68 / 56 = 1.21.
   */
  h1: 68 / 56,
  h2: 46 / 36,
  h3: 30 / 24,
  h4: 30 / 20,
  h5: 30 / 20,
  h6: 24 / 16,
  h7: 24 / 16,
  h8: 20 / 14,
  body: 30 / 20,
};

export const space: AppSpace = {
  0: '0',
  1: '0.4rem',
  2: '0.8rem',
  3: '1.6rem',
  4: '2rem',
  5: '2.4rem',
  6: '3.2rem',
  7: '4rem',
  8: '4.8rem',
  9: '6.4rem',
  10: '8rem',
  11: '10rem',
};

export const screens: AppScreens = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1536px',
};
