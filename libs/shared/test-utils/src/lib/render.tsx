import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { theme } from '@e-shop/ui';

type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const render = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => rtlRender(ui, { wrapper: Wrapper, ...options });

export * from '@testing-library/react';
export { render };
