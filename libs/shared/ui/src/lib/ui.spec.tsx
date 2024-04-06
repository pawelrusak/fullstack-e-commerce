// eslint-disable-next-line @nx/enforce-module-boundaries
import { render, screen } from '@e-shop/test-utils';

import Ui from './ui';

describe('Ui', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui />);
    expect(baseElement).toBeTruthy();

    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  });
});
