import { render } from '@e-shop/test-utils';

import Paragraph from './paragraph.component';

describe('Paragraph', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Paragraph />);
    expect(baseElement).toBeTruthy();
  });
});
