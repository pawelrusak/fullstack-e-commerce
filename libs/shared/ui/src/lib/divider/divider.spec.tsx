import { render } from '@e-shop/test-utils';

import Divider from './divider.component';

describe('Divider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Divider />);
    expect(baseElement).toBeTruthy();
  });
});
