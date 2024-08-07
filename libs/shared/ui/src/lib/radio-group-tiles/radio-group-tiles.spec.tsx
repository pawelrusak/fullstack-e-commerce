import { render } from '@e-shop/test-utils';

import RadioGroupTiles from './radio-group-tiles.component';

describe('RadioGroupTiles', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RadioGroupTiles />);
    expect(baseElement).toBeTruthy();
  });
});
