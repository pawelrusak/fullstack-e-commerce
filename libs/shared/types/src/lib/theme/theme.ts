import type { Theme as StyledSystemTheme } from 'styled-system';
import type { Component } from './component';

export type AppSpace = StyledSystemTheme['space'];

// TODO: Move this file to the theme library
export type AppSpacesTheme = {
  space: AppSpace;
};

/**
 * The `color` object defines color groups used across multiple components like buttons, navbars,
 * and badges. Follow these guidelines when adding new colors:
 *
 * @property {string} color.example - Base color for the `example` group (e.g., primary, secondary).
 * @property {string} color.onExample - Text color on top of the `example` color.
 * @property {string} color.exampleBorder - Border color within the `example` group.
 * @property {string} color.exampleInteract - Color for interactive states (e.g., hover, focus) in the `example` group.
 * @property {string} color.onExampleInteract - Text color during interactive states in the `example` group.
 * @property {string} color.exampleVariant - A variant shade of the `example` color.
 * @property {string} color.onExampleVariant - Text color on top of the `exampleVariant` color.
 * @property {string} color.exampleBorderInteract - Border color for interactive states in the `example` group.
 * @property {string} color.onExampleLink - Link color in the `example` group.
 * @property {string} color.onExampleLinkInteract - Link color for interactive states in the `example` group.
 *
 * Naming Conventions:
 * - Base name (e.g., `primary`, `surface`) for each color group.
 * - Prefix with `on` for overlay colors (e.g., text, icons).
 * - Suffix with `Interact` for interactive states (e.g., hover, focus).
 * - Use `Variant` for alternative color for others related elements.
 */
export type AppColor = {
  primary: string;
  onPrimary: string;
  // For focus, hover states etc.
  primaryBorder: string;
  primaryInteract: string;
  primaryBorderInteract: string;

  secondary: string;
  onSecondary: string;
  secondaryBorder: string;
  secondaryInteract: string;
  secondaryBorderInteract: string;

  tertiary: string;

  /**
   * Background color for UI components such as cards, modals, navbars, etc.
   */
  surface: string;
  onSurface: string;
  onSurfaceVariant: string;
  onSurfaceInteract: string;
  /**
   * Background color for secondary UI components, such as panels, forms, etc.
   */
  secondarySurface: string;
  onSecondarySurface: string;
  onSecondarySurfaceVariant: string;
  /**
   * The primary background color for the entire application.
   * Use this for the main application background. For specific UI elements like
   * navbars or cards, use "surface" even if the color is the same.
   */
  background: string;
  onBackground: string;
  onBackgroundLink: string;
  onBackgroundInteract: string;
  onBackgroundLinkInteract: string;

  error: string;
  border: string;
  /**
   * @deprecated Use "onBackground" or "onSurface" instead, depending on the context.
   * TODO: Remove this in future.
   */
  text: string;
  /**
   * @deprecated Use "secondarySurface" instead.
   * TODO: Rename this to "secondarySurface" to align with naming conventions.
   */
  secondBackground: string;
};

export type AppColorTheme = {
  color: AppColor;
};

export type AppFontFamily = {
  /**
   * @deprecated Use "primary" instead
   */
  montserrat: string;
  /**
   * @deprecated Use "secondary" instead.
   */
  poppins: string;
  /**
   * For body text, forms, etc.
   *
   * @warning Use only for headings at level H5 or lower.
   */
  primary: string;
  /**
   * For headings, titles, etc.
   */
  secondary: string;
};

export type AppFontFamilyTheme = {
  fontFamily: AppFontFamily;
};

export type AppFontWeight = {
  regular: number;
  semiBold: number;
  bold: number;
};

export type AppFontWeightTheme = {
  fontWeight: AppFontWeight;
};

export type AppScreens = {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
};

export type AppScreensTheme = {
  screens: AppScreens;
};

export type AppComponent = Component;

export type AppComponentTheme = {
  component: AppComponent;
};

export type AppTheme = AppColorTheme &
  AppFontFamilyTheme &
  AppFontWeightTheme &
  AppSpacesTheme &
  AppScreensTheme &
  AppComponentTheme;
