import { render } from '@e-shop/test-utils';

import CardsSection from './cards-section.component';

describe('CardsSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CardsSection />);
    expect(baseElement).toBeTruthy();
  });
});
