import { Theme as StyledSystemTheme } from 'styled-system';

export type AppSpacesTheme = {
  space: StyledSystemTheme['space'];
};

export type AppColorTheme = {
  color: {
    primary: string;
    secondary: string;
    text: string;
    background: string;
    // TODO: rename this to secondarySurface (surface will be used for ui components background like card, modal, navbar, etc.)
    secondBackground: string;
    border: string;
    error: string;
  };
};

export type AppFontFamily = {
  fontFamily: {
    montserrat: string;
    poppins: string;
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
