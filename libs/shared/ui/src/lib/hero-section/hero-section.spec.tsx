import { render } from '@e-shop/test-utils';

import HeroSection from './hero-section.component';

describe('HeroSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroSection imageSrc="" />);
    expect(baseElement).toBeTruthy();
  });
});
