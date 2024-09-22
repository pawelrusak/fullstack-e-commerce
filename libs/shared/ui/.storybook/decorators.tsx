import styled, { ThemeProvider, css } from 'styled-components';
import { GlobalStyle, AppThemeProvider, theme } from '@e-shop/theme';

import type { Decorator } from '@storybook/react';

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
  margin: 1px;
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

const baseSurfaceStyles = css`
  padding: ${({ theme }) => `${theme.space[3]} ${theme.space[4]}`};
  width: min-content;
  border-radius: 10px;
`;

const NeutralSurfaceContainer = styled.div`
  background-color: ${({ theme }) => theme.color.surface};
  ${baseSurfaceStyles};
`;

export const NeutralSurfaceDecorator: Decorator = (Story) => {
  return (
    <ThemeProvider theme={theme}>
      <NeutralSurfaceContainer>
        <Story />
      </NeutralSurfaceContainer>
    </ThemeProvider>
  );
};

const PrimarySurfaceContainer = styled.div`
  background-color: ${({ theme }) => theme.color.primary};
  ${baseSurfaceStyles};
`;

export const PrimarySurfaceDecorator: Decorator = (Story) => {
  return (
    <ThemeProvider theme={theme}>
      <PrimarySurfaceContainer>
        <Story />
      </PrimarySurfaceContainer>
    </ThemeProvider>
  );
};

const SecondarySurfaceContainer = styled.div`
  background-color: ${({ theme }) => theme.color.secondary};
  ${baseSurfaceStyles};
`;

export const SecondarySurfaceDecorator: Decorator = (Story) => {
  return (
    <ThemeProvider theme={theme}>
      <SecondarySurfaceContainer>
        <Story />
      </SecondarySurfaceContainer>
    </ThemeProvider>
  );
};
