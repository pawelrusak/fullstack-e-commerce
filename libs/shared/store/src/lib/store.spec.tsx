import { render } from '@e-shop/test-utils';

import Store from './store';

describe('Store', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Store />);
    expect(baseElement).toBeTruthy();
  });
});
