import { render } from '@e-shop/test-utils';

import Heading from './heading.component';

describe('Heading', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Heading />);
    expect(baseElement).toBeTruthy();
  });
});
