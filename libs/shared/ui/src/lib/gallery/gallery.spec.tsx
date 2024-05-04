import { render } from '@e-shop/test-utils';

import Gallery from './gallery.component';

describe('Gallery', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Gallery images={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
