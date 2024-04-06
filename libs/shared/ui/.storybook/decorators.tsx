import { GlobalStyle, theme } from '../src';
import { ThemeProvider } from 'styled-components';
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
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  );
};
