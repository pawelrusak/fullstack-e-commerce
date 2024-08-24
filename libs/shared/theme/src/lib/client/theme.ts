import { DefaultTheme } from 'styled-components';
import { colorPalette } from './color-palette';

const theme: DefaultTheme = {
  color: {
    primary: colorPalette.primary[500],
    onPrimary: 'hsl(0, 0%, 100%)',
    primaryBorder: colorPalette.primary[500],
    primaryInteract: colorPalette.primary[600],
    primaryBorderInteract: colorPalette.primary[600],

    secondary: colorPalette.secondary[500],
    onSecondary: 'hsl(0, 0%, 100%)',
    secondaryBorder: colorPalette.secondary[500],
    secondaryInteract: colorPalette.secondary[600],
    secondaryBorderInteract: colorPalette.secondary[600],

    tertiary: 'hsl(46, 99%, 65%)',

    surface: 'hsl(0, 0%, 100%)',
    onSurface: 'hsl(0, 0%, 19%);',
    onSurfaceVariant: colorPalette.primary[500],
    onSurfaceInteract: colorPalette.primary[500],

    secondarySurface: 'hsl(0, 0%, 96%)',
    onSecondarySurface: 'hsl(0, 0%, 19%)',
    onSecondarySurfaceVariant: colorPalette.primary[500],

    background: 'hsl(0, 0%, 100%)',
    onBackground: 'hsl(0, 0%, 19%)',
    onBackgroundLink: colorPalette.primary[500],
    onBackgroundInteract: colorPalette.primary[500],
    onBackgroundLinkInteract: colorPalette.primary[600],

    border: 'hsl(0, 0%, 96%)',
    error: 'hsl(348, 83%, 47%)',

    // TODO: Remove deprecated "secondBackground" color after refactoring
    secondBackground: 'hsl(0, 0%, 96%)',
    // TODO: Remove deprecated "text" color after replacing with "onBackground" or "onSurface"
    text: 'hsl(0, 0%, 19%)',
  },
  fontFamily: {
    // TODO: Remove deprecated "poppins" font family after refactoring
    poppins: ['Poppins', 'sans-serif'].join(', '),
    // TODO: Remove deprecated "montserrat" font family after refactoring
    montserrat: ['Montserrat', 'sans-serif'].join(', '),
    primary: ['Montserrat', 'sans-serif'].join(', '),
    secondary: ['Poppins', 'sans-serif'].join(', '),
  },
  fontWeight: {
    regular: 400,
    semiBold: 600,
    bold: 700,
  },
  space: [0, 0.2, 0.4, 0.8, 1.6, 2.4, 3.2],
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1536px',
  },
};

export default theme;
