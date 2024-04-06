import { render, screen } from '@testing-library/react';

import Ui from './ui';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

describe('Ui', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui />, {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      ),
    });
    expect(baseElement).toBeTruthy();

    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  });
});
