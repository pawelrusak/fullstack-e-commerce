import { render, screen } from '@testing-library/react';

import Ui from './ui';

describe('Ui', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui />);
    expect(baseElement).toBeTruthy();

    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  });
});
