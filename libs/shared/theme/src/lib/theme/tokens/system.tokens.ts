import { colorPalette } from './color-palette.reference.tokens';

import type {
  AppColor,
  AppFontFamily,
  AppFontWeight,
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

export const space: AppSpace = [0, 0.2, 0.4, 0.8, 1.6, 2.4, 3.2];

export const screens: AppScreens = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1536px',
};
