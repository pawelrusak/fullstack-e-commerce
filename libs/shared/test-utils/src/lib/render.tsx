import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { AppThemeProvider } from '@e-shop/theme';

type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  return <AppThemeProvider>{children}</AppThemeProvider>;
};

const render = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => rtlRender(ui, { wrapper: Wrapper, ...options });

export * from '@testing-library/react';
export { render };
