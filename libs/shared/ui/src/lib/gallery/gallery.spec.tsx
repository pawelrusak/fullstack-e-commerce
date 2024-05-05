import { render } from '@e-shop/test-utils';

import Gallery from './gallery.component';

describe('Gallery', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Gallery images={[]} />);
    expect(baseElement).toBeTruthy();
  });

  it.todo('should not display list items when they have less than two images');

  it.todo('by default, the first item in the list should be selected');

  it.todo('should display the selected item from the list');
});
