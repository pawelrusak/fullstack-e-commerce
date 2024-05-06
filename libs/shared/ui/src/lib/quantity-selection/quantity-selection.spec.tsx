import { render } from '@e-shop/test-utils';

import QuantitySelection from './quantity-selection.component';

describe('QuantitySelection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<QuantitySelection />);
    expect(baseElement).toBeTruthy();
  });
});
