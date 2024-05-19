import { render } from '@e-shop/test-utils';

import Footer from './footer.component';

describe('Footer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Footer />);
    expect(baseElement).toBeTruthy();
  });
});
