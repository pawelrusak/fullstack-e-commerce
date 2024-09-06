import { GlobalStyle, AppThemeProvider, theme } from '@e-shop/theme';
import { Decorator } from '@storybook/react';

export const GlobalStyleDecorator: Decorator = (Story) => {
  return (
    <>
      <GlobalStyle theme={theme} />
      <Story />
    </>
  );
};

export const ThemeDecorator: Decorator = (Story) => {
  return (
    <AppThemeProvider>
      <Story />
    </AppThemeProvider>
  );
};
