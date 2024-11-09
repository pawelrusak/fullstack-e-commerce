import { render } from '@testing-library/react';

import Badge from './badge.component';

describe('Badge', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Badge />);
    expect(baseElement).toBeTruthy();
  });
});
