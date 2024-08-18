import { Theme as StyledSystemTheme } from 'styled-system';

// TODO: Move this file to the theme library
export type AppSpacesTheme = {
  space: StyledSystemTheme['space'];
};

export type AppColorTheme = {
  color: {
    primary: string;
    onPrimary: string;

    secondary: string;
    /**
     * Background color for UI components such as cards, modals, navbars, etc.
     */
    surface: string;
    onSurface: string;
    /**
     * Background color for secondary UI components, such as panels, forms, etc.
     */
    secondarySurface: string;
    onSecondarySurface: string;
    /**
     * The primary background color for the entire application.
     * Use this for the main application background. For specific UI elements like
     * navbars or cards, use "surface" even if the color is the same.
     */
    background: string;
    onBackground: string;

    error: string;
    border: string;
    /**
     * @deprecated Use "onBackground" or "onSurface" instead, depending on the context.
     */
    text: string;
    /**
     * @deprecated Use "secondarySurface" instead.
     * TODO: Rename this to "secondarySurface" to align with naming conventions.
     */
    secondBackground: string;
  };
};

export type AppFontFamily = {
  fontFamily: {
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
};

export type AppFontWeight = {
  fontWeight: {
    regular: number;
    semiBold: number;
    bold: number;
  };
};

export type AppScreensTheme = {
  screens: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
};

export type AppTheme = AppColorTheme &
  AppFontFamily &
  AppFontWeight &
  AppSpacesTheme &
  AppScreensTheme;
