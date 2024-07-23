import { render } from '@e-shop/test-utils';

import Checkbox from './checkbox.component';

describe('Checkbox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Checkbox />);
    expect(baseElement).toBeTruthy();
  });
});
