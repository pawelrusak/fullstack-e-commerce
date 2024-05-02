import { render } from '@e-shop/test-utils';

import Specification from './specification.component';

describe('Specification', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Specification />);
    expect(baseElement).toBeTruthy();
  });
});
