import { render } from '@testing-library/react';

import SimpleCartList from './simple-cart-list.component';

describe('SimpleCartList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SimpleCartList />);
    expect(baseElement).toBeTruthy();
  });
});
