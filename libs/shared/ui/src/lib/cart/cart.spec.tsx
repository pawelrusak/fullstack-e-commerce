import { render } from '@e-shop/test-utils';

import Cart from './cart.component';

describe('Cart', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Cart />);
    expect(baseElement).toBeTruthy();
  });
});
