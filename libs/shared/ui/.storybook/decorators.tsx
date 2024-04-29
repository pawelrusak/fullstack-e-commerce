import { GlobalStyle, AppThemeProvider } from '@e-shop/theme';
import { Decorator } from '@storybook/react';

export const GlobalStyleDecorator: Decorator = (Story) => {
  return (
    <>
      <GlobalStyle />
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
