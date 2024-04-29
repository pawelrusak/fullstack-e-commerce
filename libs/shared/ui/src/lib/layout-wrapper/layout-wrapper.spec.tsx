import { render } from '@e-shop/test-utils';

import LayoutWrapper from './layout-wrapper.component';

describe('LayoutWrapper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LayoutWrapper />);
    expect(baseElement).toBeTruthy();
  });
});
