import styled, { ThemeProvider } from 'styled-components';
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

export const AppThemeDecorator: Decorator = (Story) => {
  return (
    <AppThemeProvider>
      <Story />
    </AppThemeProvider>
  );
};

const SpacingHighlightContainer = styled.div`
  background-color: ${({ theme }) => theme.color.primaryContainer};
  border: 1px solid transparent;
  margin-bottom: 12px;
`;

export const SpacingHighlightDecorator: Decorator = (Story) => {
  return (
    <ThemeProvider theme={theme}>
      <SpacingHighlightContainer>
        <Story />
      </SpacingHighlightContainer>
    </ThemeProvider>
  );
};
