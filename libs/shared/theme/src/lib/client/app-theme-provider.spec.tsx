import { ThemeProvider } from 'styled-components';
import defaultTheme from './theme';
import { AppThemeProvider } from './app-theme-provider';
import { render, screen } from '@testing-library/react';

jest.mock('styled-components', () => ({
  ThemeProvider: jest.fn(({ children }) => <div>{children}</div>),
}));

describe('AppThemeProvider', () => {
  it('should be called with the default theme', () => {
    render(<AppThemeProvider />);

    expect(ThemeProvider).toHaveBeenCalledWith(
      expect.objectContaining({ theme: defaultTheme }),
      expect.anything(),
    );
  });

  it('should render a child component', () => {
    const childElementText = 'Child Element';

    render(
      <AppThemeProvider>
        <div>Child Element</div>
      </AppThemeProvider>,
    );

    const childElement = screen.getByText(childElementText);
    expect(childElement).toBeInTheDocument();
  });
});
