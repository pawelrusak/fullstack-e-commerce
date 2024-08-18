import { Theme as StyledSystemTheme } from 'styled-system';

// TODO: Move this file to the theme library
export type AppSpacesTheme = {
  space: StyledSystemTheme['space'];
};

export type AppColorTheme = {
  color: {
    primary: string;
    secondary: string;
    text: string;
    background: string;
    // TODO: Rename this to "secondarySurface". "Surface" will be used for UI components' backgrounds, such as cards, modals, navbar, etc.
    secondBackground: string;
    border: string;
    error: string;
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
    primary?: string;
    /**
     * For headings, titles, etc.
     */
    secondary?: string;
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
