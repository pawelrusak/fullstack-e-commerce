import { render } from '@e-shop/test-utils';

import Panel from './panel.component';

describe('Panel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Panel />);
    expect(baseElement).toBeTruthy();
  });
});
