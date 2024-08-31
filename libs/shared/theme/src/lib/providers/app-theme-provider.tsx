'use client';

import { ThemeProvider } from 'styled-components';
import { theme as defaultTheme } from '../theme';
import type { DefaultTheme } from 'styled-components';

export type AppThemeProviderProps = {
  theme?: DefaultTheme;
  children?: React.ReactNode;
};

export const AppThemeProvider = ({
  children,
  theme = defaultTheme,
}: AppThemeProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
